class CartPage{
    constructor(page){
        this.page = page;
        this.backpack = page.getByText('Sauce Labs Backpackcarry.');
    }
    async removeFromCart(){
        await this.page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    }
}
module.exports = { CartPage };