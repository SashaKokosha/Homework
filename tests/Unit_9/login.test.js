import { test, expect } from '@playwright/test';

test ('Perform login and verify elements', async ({ page }) => {
    await page.goto('/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await expect(page.locator('.title')).toHaveText('Products');
    await expect(page.locator('.shopping_cart_link')).toBeVisible();
    const products = await page.locator('.inventory_item').count();
    expect(products).toBeGreaterThan(1); // 1 line from 2
});