import { Page } from '@playwright/test';

export class PIMPage {
  constructor(private page: Page) {}

  async goToPIM() {
    await this.page.click('text=PIM');
  }

  async addEmployee(firstName: string, lastName: string) {
    await this.page.click('text=Add');
    await this.page.fill('input[name="firstName"]', firstName);
    await this.page.fill('input[name="lastName"]', lastName);
    await this.page.click('button[type="submit"]');
  }

  async searchEmployee(name: string) {
    await this.page.fill('input[placeholder="Type for hints..."]', name);
    await this.page.click('button:has-text("Search")');
  }
}