import { Page } from '@playwright/test';
import { HealerAgent } from "../tests/agents/healer.agent";

export class OTPPage {
  private healer: HealerAgent;

  constructor(private page: Page) {
    this.healer = new HealerAgent(page);
  }

  async enterPhone(phone: string) {
    await this.healer.safeFill('input[type="tel"]', phone);
    await this.healer.safeClick('button:has-text("Continue with Phone")', 'text=Continue with Phone');
    await this.page.pause(); 
  }
}