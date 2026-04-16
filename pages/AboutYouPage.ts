import { Page } from '@playwright/test';
import { HealerAgent } from '../tests/agents/healer.agent';

export class AboutYouPage {
  private healer: HealerAgent;

  constructor(private page: Page) {
    this.healer = new HealerAgent(page);
  }

  pageLocators() {
      const titleLocator = this.page.locator('text=Tell us about yourself');
      const descriptionLocator = this.page.locator('text=Help us serve you better'); 
      const detailsLocator = this.page.locator('.email-explanation');
      return { titleLocator, descriptionLocator, detailsLocator };
  }

  async fillUserDetails(data:any) {
    await this.healer.safeFill("input[placeholder='Enter your first name']",data.firstName);
    await this.healer.safeFill("input[placeholder='Enter your last name']",data.lastName);
    await this.healer.safeFill("input[placeholder='Enter your email address']",data.email);
    await this.page.getByRole('button', { name: 'Continue Continue' }).click();
  }
}