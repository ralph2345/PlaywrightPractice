import { type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private get usernameInput() {
    return this.page.getByLabel('Username');
  }

  private get passwordInput() {
    return this.page.getByLabel('Password');
  }

  private get loginButton() {
    return this.page.getByRole('button', { name: 'Login' });
  }


  async goto() {
    await this.page.goto('http://the-internet.herokuapp.com/login');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

}