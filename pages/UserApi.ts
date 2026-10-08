import { APIRequestContext } from '@playwright/test';

export class UsersAPI {
  private readonly baseURL = 'https://jsonplaceholder.typicode.com';

  constructor(private request: APIRequestContext) {}

  async getUsers() {
    return await this.request.get(`${this.baseURL}/users`);
  }

  async getUser(userId: number) {
    return await this.request.get(`${this.baseURL}/users/${userId}`);
  }

  async createUser(userData: {
    name: string;
    username: string;
    email: string;
  }) {
    return await this.request.post(`${this.baseURL}/users`, {
      data: userData
    });
  }
}