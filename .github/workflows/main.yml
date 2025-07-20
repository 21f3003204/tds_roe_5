name: QA Scraper

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  run-scraper:
    name: QA by 21f3003204@ds.study.iitm.ac.in
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'

    - name: Install dependencies
      run: npm install playwright

    - name: Run Playwright Scraper
      run: node scrape_tables.js
