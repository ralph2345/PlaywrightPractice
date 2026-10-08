import { type Page } from "@playwright/test";

export class ModifyCheckboxesPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("http://the-internet.herokuapp.com/checkboxes");
  }
  async modifyCheckboxes() {
    const checkboxes = await this.page.$$('input[type="checkbox"]');
    for (const checkbox of checkboxes) {
      const isChecked = await checkbox.isChecked();
      if (!isChecked) {
        await checkbox.check();
      }
    }
  }
}
