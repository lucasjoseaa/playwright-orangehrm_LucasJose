import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { PIMPage } from '../../pages/PIMPage';

test('Cadastrar funcionário', async ({ page }) => {
  const login = new LoginPage(page);
  const pim = new PIMPage(page);

  await login.goto();
  await login.login('Admin', 'admin123');

  await pim.goToPIM();

  const firstName = 'Lucas';
  const lastName = 'QA';

  await pim.addEmployee(firstName, lastName);

  await expect(page.locator('input[name="firstName"]'))
  .toHaveValue('Lucas');
});