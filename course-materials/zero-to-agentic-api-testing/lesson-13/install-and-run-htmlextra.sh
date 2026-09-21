#!/usr/bin/env bash
# Install the HTML Extra reporter globally
npm install -g newman-reporter-htmlextra

# Execute collection and generate interactive dashboard
newman run Campus_Library_Collection.json \
  -e Campus_Library_UAT.json \
  -d books_data.csv \
  -r cli,htmlextra \
  --reporter-htmlextra-export reports/dashboard.html
