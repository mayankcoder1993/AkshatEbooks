#!/usr/bin/env bash
# Step 1: Navigate to the directory where exported artifacts are stored
cd /home/user/postman_execution

# Step 2: Run Newman with environment and HTML Extra reporter
newman run Campus_Library_Collection.json \
  -e Campus_Library_UAT.json \
  -d books_data.csv \
  -r cli,htmlextra \
  --reporter-htmlextra-export reports/build_report.html \
  --bail
