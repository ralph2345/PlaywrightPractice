import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('The user is logging in with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.clickLoginButton();

});