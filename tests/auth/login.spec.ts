import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('Login válido', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login('Admin', 'admin123');

  await expect(page).toHaveURL(/dashboard/);
});