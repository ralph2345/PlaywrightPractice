import { test, expect } from '@playwright/test';
import { UsersAPI } from '../pages/UserApi';

test.describe('Users API Tests', () => {

  let usersAPI: UsersAPI;

  test.beforeEach(async ({ request }) => {
    usersAPI = new UsersAPI(request);
  });

  test('GET - Get all users', async () => {

    const response = await usersAPI.getUsers();

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(Array.isArray(body)).toBeTruthy();

    expect(body[0]).toHaveProperty('id');
    expect(body[0]).toHaveProperty('name');
    expect(body[0]).toHaveProperty('username');
    expect(body[0]).toHaveProperty('email');
  });


  test('GET - Get single user', async () => {

    const userId = 1;

    const response = await usersAPI.getUser(userId);

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.id).toBe(userId);
    expect(body).toHaveProperty('name');
    expect(body).toHaveProperty('username');
    expect(body).toHaveProperty('email');
  });


  test('POST - Create new user', async () => {

    const userData = {
      name: 'Ralph Suarez',
      username: 'ralphsuarez',
      email: 'ralph@gmail.com'
    };

    const response = await usersAPI.createUser(userData);

    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body).toHaveProperty('id');
    expect(body.name).toBe(userData.name);
    expect(body.username).toBe(userData.username);
    expect(body.email).toBe(userData.email);
  });

});