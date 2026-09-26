#!/usr/bin/env bash
# Execute headless Newman regression run with environment and HTML Extra reporter
newman run Zero-to-Agentic-API-Testing.postman_collection.json \
  -e Campus-Library-UAT.postman_environment.json \
  -r cli,htmlextra \
  --reporter-htmlextra-export reports/regression-report.html \
  --bail
