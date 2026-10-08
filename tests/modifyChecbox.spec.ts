import { test, expect } from '@playwright/test';
import { ModifyCheckboxesPage } from '../pages/ModifyCheckboxes';

test('The user is logging in with invalid credentials', async ({ page }) => {
  const modifyCheckboxesPage = new ModifyCheckboxesPage(page);

  await modifyCheckboxesPage.goto();
  await modifyCheckboxesPage.modifyCheckboxes();

});