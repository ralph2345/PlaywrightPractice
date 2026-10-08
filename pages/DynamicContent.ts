import { type Page } from '@playwright/test';

export class DynamicContentPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('http://the-internet.herokuapp.com/dynamic_content');
  }

  async refreshContent() {
    for (let i = 0; i < 5; i++) {
        await this.page.reload();
        await this.page.waitForTimeout(1000); // Wait for 1 second to allow content to refresh
    }
  }
}