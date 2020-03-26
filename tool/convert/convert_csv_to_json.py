#!/bin/python

import json 
import csv
import os
import glob
import sys
import datetime
import collections 
from copy import deepcopy
from pprint import pprint

PATIENTS_DATA_CSV_FILE_NAME = "440001_oita_covid19_patients.csv"

def main():
    import_csv_file = os.path.dirname(__file__) + "/../../static/data/" + PATIENTS_DATA_CSV_FILE_NAME
    export_json_file = os.path.dirname(__file__) + "/../../data/data.json"

    if os.path.exists(import_csv_file) == False:
        print("CSV data files are not found.")
        sys.exit(1)

    data = import_csv_to_dict(import_csv_file, encoding='utf_8_sig')
    patients = generate_patients(data)
    patients_summary = generate_patients_summary(data)

    today_date_string = datetime.datetime.now().strftime("%Y/%m/%d %H:%M")
    data_json = {
        "patients": {
            "date": today_date_string,
            "data": patients,
        },
        "patients_summary": {
            "date": today_date_string,
            "data": patients_summary,
        }
    }

    with open(export_json_file, 'w') as f:
        json.dump(data_json, f, indent=2, ensure_ascii=False)


def import_csv_to_dict(csv_file, encoding='utf_8_sig'):
    json_list = []
    with open(csv_file, 'r', encoding=encoding) as f:
        for row in csv.DictReader(f): json_list.append(row)
    return json.loads(json.dumps(json_list))

def generate_patients(data):
#    patients = 
#        "date": datetime.datetime.now().strftime("%Y/%m/%d %H:%M"),
#        "data": [],
#    }
    patients = []
    for d in data:
        p = {
            "リリース日": d["公表_年月日"] + "T08:00:00",
            "居住地": d["居住地"],
            "年代": d["年代"],
            "性別": d["性別"],
            "退院": d["退院済フラグ"],
            "date": d["公表_年月日"]
        }
        patients.append(p)

    return patients

def generate_patients_summary(data):
    count_date = [ datetime.datetime.strptime(d["公表_年月日"], '%Y-%m-%d') for d in data ]
    start_date = sorted(count_date)[0]
    end_date   = start_date + datetime.timedelta(days=len(count_date))

    # 日付に対して値が0のデータを作る
    df_date = {}
    for i in daterange(start_date, end_date):
        df_date[i] = 0

    df_summary = {}
    for date, total in collections.Counter(count_date).items():
        df_summary[date] = total

    df = deepmerge(df_date, df_summary)

    patients_summary = []
    for date, total in df.items():
        ps = {
            "日付": date.strftime("%Y-%m-%d"),
            "小計": total,
        }
        patients_summary.append(ps)
    
    return patients_summary
    

def deepmerge(src, update):
    result = deepcopy(src)
    for k, v in update.items():
        if k in result and isinstance(result[k], dict):
            result[k] = deepmerge(result[k], v)
        else:
            result[k] = deepcopy(v)
    return result

def daterange(start_date, end_date):
    for n in range((end_date - start_date).days):
        yield start_date + datetime.timedelta(n)

main()