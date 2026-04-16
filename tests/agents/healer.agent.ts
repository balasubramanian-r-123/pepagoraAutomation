import { Page } from '@playwright/test';

export class HealerAgent {
  constructor(private page: Page) {}

  async safeClick(primary: string, fallback: string) {
    try {
      await this.page.click(primary);
    } catch {
      console.log('Healing click...');
      await this.page.click(fallback);
    }
  }

  async safeFill(selector: string, value: string) {
    try {
      await this.page.fill(selector, value);
    } catch {
      console.log('Healing fill...');
      await this.page.locator(selector).first().fill(value);
    }
  }
}