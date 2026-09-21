#!/usr/bin/env bash
# Navigate to project folder
cd /home/user/postman_execution

# Interpolate the selected Jenkins environment choice dynamically
newman run Campus_Library_Collection.json \
  -e "${ENV}.postman_environment.json" \
  -d books_data.csv \
  -r cli,htmlextra \
  --reporter-htmlextra-export "reports/${ENV}_report.html" \
  --bail
