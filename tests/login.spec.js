// @ts-check
const { test, expect } = require('@playwright/test');
test('Login with success @login', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/');

  // Access login, fill fields and submit login
  await page.getByRole('link',{name: 'login'}).click()
  await page.locator('#user').fill('guismtester@gmail.com')
  await page.locator('#password').fill('guismguism')
  await page.getByRole('button', {name: 'login'}).click()
  await page.getByRole('heading', {name: 'Login realizado'}).hover()
  await page.getByRole('button', { name: 'OK' }).click()
});
