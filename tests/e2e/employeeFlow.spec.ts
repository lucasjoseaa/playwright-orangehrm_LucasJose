import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { PIMPage } from '../../pages/PIMPage';

test('Fluxo completo', async ({ page }) => {
  const login = new LoginPage(page);
  const pim = new PIMPage(page);

  await login.goto();
  await login.login('Admin', 'admin123');

  await pim.goToPIM();

  await pim.addEmployee('Lucas', 'Flow');
  await pim.goToPIM();
  await pim.searchEmployee('Lucas');

  await expect(page.locator('.oxd-table')).toBeVisible();
});