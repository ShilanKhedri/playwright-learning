const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { getTestDataFromExcel } = require('../utils/excelReader');

const testCases = getTestDataFromExcel('./data/LoginData.xlsx');
test.describe('SauceDemo login page', () => {
  for (const record of testCases) {
    const user = record.username ? String(record.username) : '';
    const pass = record.password ? String(record.password) : '';
    const isSuccess = record.expectedSuccess === true || record.expectedSuccess === 'TRUE';

    test(`${record.testCase}: login test for user "${user}"`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      
      await loginPage.open();
      await loginPage.login(user, pass);

      if (isSuccess) {
        await expect(page).toHaveURL(/\/inventory\.html$/);
        await expect(page.locator('.title')).toHaveText('Products');
      } else {
        await expect(page).not.toHaveURL(/\/inventory\.html$/);
        await expect(page.locator('[data-test="error"]')).toBeVisible();
      }
    });
  }
});
