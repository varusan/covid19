#!/bin/python

import json 
import csv
import os
import glob
import sys
import datetime
import pandas as pd
from pprint import pprint

PATIENTS_DATA_CSV_FILE_NAME = "440001_oita_covid19_patients.csv"

def main():
    patients_data_csv_file = "../../static/data/" + PATIENTS_DATA_CSV_FILE_NAME
    if os.path.exists(patients_data_csv_file) == False:
        print("CSV data files are not found.")
        sys.exit(1)

    data = import_csv_to_dict(patients_data_csv_file, encoding='utf_8_sig')
    patients = generate_patients(data)


def import_csv_to_dict(csv_file, encoding='utf_8_sig'):
    json_list = []
    with open(csv_file, 'r', encoding=encoding) as f:
        for row in csv.DictReader(f): json_list.append(row)
    return json.loads(json.dumps(json_list))

def generate_patients(data):
    patients = {
        "date": datetime.datetime.now().strftime("%Y/%m/%d %H:%M"),
        "data": [],
    }
    for d in data:
        p = {
            "リリース日": d["公表_年月日"] + "T08:00:00",
            "居住地": d["居住地"],
            "年代": d["年代"],
            "性別": d["性別"],
            "退院": d["退院済フラグ"],
            "date": d["公表_年月日"]
        }
        patients["data"].append(p)
    return patients

main()