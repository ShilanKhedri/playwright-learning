class InventoryPage{

    constructor(page){
        this.page = page;
        this.backpackAddToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    }
    async addToCart(){
        await this.backpackAddToCartButton.click();
    }
    async getCartLink(){
        await this.cartLink.click();
    }
}
module.exports = { InventoryPage };