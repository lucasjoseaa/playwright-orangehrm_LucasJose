import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { PIMPage } from '../../pages/PIMPage';

test('Buscar funcionário', async ({ page }) => {
  const login = new LoginPage(page);
  const pim = new PIMPage(page);

  await login.goto();
  await login.login('Admin', 'admin123');

  await pim.goToPIM();

  await pim.searchEmployee('Lucas');

  await expect(page.locator('.oxd-table')).toBeVisible();
});