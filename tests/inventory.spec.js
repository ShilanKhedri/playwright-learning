const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login(process.env.USERNAME,
        process.env.PASSWORD);
})

test('add to cart verification', async ({page}) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await inventoryPage.addToCart();
    await inventoryPage.getCartLink();
    await expect(cartPage.backpack).toBeVisible();
})

test('remove from cart', async ({page}) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.addToCart();
    await inventoryPage.getCartLink();

    const cartPage = new CartPage(page);
    await cartPage.removeFromCart();
    await expect(cartPage.backpack).not.toBeAttached();
})