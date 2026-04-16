import { Page } from "@playwright/test";
import { HealerAgent } from "../tests/agents/healer.agent";

export class PostBuyingRequestsPage {
  private healer: HealerAgent;

  constructor(private page: Page) {
    this.healer = new HealerAgent(page);
  }

  async locators(data: any) {
    const buyingRequestTitle = this.page.locator("//*[text()='Buying Requests']");
    const quoteTab = this.page.locator("//*[text()='Request For Quote']");
    
    const firstRow = this.page.getByRole('row').nth(1);
    const cells = firstRow.getByRole('cell');

    // Retrieving details from table
    const submissionId = (await cells.nth(1).textContent())?.trim();
    const source = (await cells.nth(2).textContent())?.trim();
    const productName = (await cells.nth(4).textContent())?.trim();
    const estimatedOrderQuantityWithUnits = (await cells.nth(5).textContent())?.trim();

    return {
      buyingRequestTitle,
      quoteTab,
      source,
      submissionId,
      productName,
      estimatedOrderQuantityWithUnits,
    };
  }
}