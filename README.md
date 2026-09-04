# Playwright Automation Tests

A Page Object Model test suite for [SauceDemo](https://www.saucedemo.com), built with Playwright.

## What it does

- Data-driven login tests (valid/invalid credentials) pulled from an Excel file
- Add-to-cart and remove-from-cart flow tests
- Credentials loaded from environment variables (`.env`), not hardcoded
- Runs on Chromium, Firefox, and WebKit
- CI pipeline via GitHub Actions (runs on every push, uploads HTML report and test results as artifacts)

## Tech stack

Playwright · Node.js · Apache SheetJS (Excel data) · dotenv

## Project structure

```
tests/     # Test specs (login, inventory/cart)
pages/     # Page Object classes
utils/     # Excel data reader
data/      # Test data (Excel file)
```

## How to run

```bash
git clone https://github.com/ShilanKhedri/playwright-learning.git
cd playwright-learning
npm install
cp .env.example .env   # fill in USERNAME and PASSWORD
npx playwright test
```

## Test report

After a run, view the HTML report with:
```bash
npx playwright show-report
```
