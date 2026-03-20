import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('Login inválido', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login('Admin', 'senha_errada');

  await expect(page.locator('.oxd-alert-content-text'))
    .toContainText('Invalid credentials');
});