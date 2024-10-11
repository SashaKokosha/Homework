import { test, expect } from '@playwright/test';

test('Add product to the cart and verify', async ({ page }) => {
    await page.goto('/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.locator('.inventory_item button').nth(3).click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    const productName = await page.locator('.inventory_item_name').nth(3).innerText();
    await page.click('.shopping_cart_link');

    const productNameInCart = await page.locator('.inventory_item_name').innerText();
    expect(productNameInCart).toBe(productName);
    await page.click('.cart_button');

    await expect(page.locator('.cart_item')).toHaveCount(0);
});