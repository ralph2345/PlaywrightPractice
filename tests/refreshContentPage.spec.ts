import { test, expect } from '@playwright/test';
import { DynamicContentPage } from '../pages/DynamicContent';

test('Verify content is refreshed', async ({ page }) => {
  const dynamicContentPage = new DynamicContentPage(page);

  await dynamicContentPage.goto();
  await dynamicContentPage.refreshContent();
});