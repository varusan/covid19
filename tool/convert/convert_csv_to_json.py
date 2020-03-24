#!/bin/python

import json 
import csv
import os
import glob

csv_files = glob.glob("../../static/data/*.csv")
if len(csv_files) == 0: print("CSV data files are not found.")

for cf in csv_files:
    json_list = []
    output_json = "../../data/" + os.path.splitext(os.path.basename(cf))[0] + ".json"
    with open(cf, 'r', encoding='utf_8_sig') as f:
        for row in csv.DictReader(f):
            json_list.append(row)
    
    with open(output_json, 'w') as f:
        json.dump(json_list, f, ensure_ascii=False, indent=2)