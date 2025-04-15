import { test, expect } from '@playwright/test';
import { text } from 'stream/consumers';

test('open Amazon Web', async ({ page }) => {
  await page.goto('https://www.amazon.com/');

  // Search product - not found
  const searchbox = await page.locator('//input[@placeholder="Search Amazon"]')
  await searchbox.fill('lkjzlhgd')

  const searchbutton = await page.locator('//input[@type="submit"]')
  await searchbutton.click()

  //Verify the product is not found
  const textnotfound = await.page.locator('//span[normalize-space(text())="No results for"]')
  await expect(textnotfound).toContainText('No results for')

});