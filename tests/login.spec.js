const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');


test.describe('SauceDemo login page', () => {
  test('logs in successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/\/inventory\.html$/);
    await expect(page.locator('.title')).toHaveText('Products');
  });

  test('shows an error for invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login('standard_user', 'wrong_password');

    await expect(loginPage.errorMessage).toBeVisible();
  });

  test('blocks login for a locked-out user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login('locked_out_user', 'secret_sauce');

    await expect(page.locator('[data-test="error"]')).toContainText('Sorry, this user has been locked out');
  });

  test('shows validation error when username is empty', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login('', 'secret_sauce');

    await expect(page.locator('[data-test="error"]')).toContainText('Username is required');
  });

  test('shows validation error when password is empty', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login('standard_user', '');

    await expect(page.locator('[data-test="error"]')).toContainText('Password is required');
  });

  test('cart number should shows 1', async ({ page }) =>{
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce');
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await expect(page.locator('[data-test="shopping-cart-link"]')).toHaveText('1');
  });
});
