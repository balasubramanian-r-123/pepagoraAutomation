import { expect, Page } from "@playwright/test";
import { HealerAgent } from "../tests/agents/healer.agent";

export class BuyingRequestPage {
  private healer: HealerAgent;

  constructor(private page: Page) {
    this.healer = new HealerAgent(page);
  }

  async navigate() {
    await this.page.goto("/post-buying-request");
  }

  async fillBasicDetails(data: any) {
    // Entering a product name
    await this.healer.safeFill(
      "input[placeholder='Enter Product Name']",
      data.productName,
    );

    // Clicking on Browse Category
    await this.page.getByRole("button", { name: "Browse Category" }).click();

    const title = this.page.getByRole("heading", { name: "Browse category" });
    await expect(title).toBeVisible();

    // CATEGORY
    await this.page
      .getByRole("searchbox", { name: "Search" })
      .nth(1)
      .fill(data.category);
    await this.page.locator("//li[text()='" + data.category + "']").click();

    // SUB-CATEGORY
    await this.page
      .getByRole("searchbox", { name: "Search" })
      .nth(2)
      .fill(data.subCategory);
    await this.page.getByText(data.subCategory).click();

    // PRODUCT CATEGORY
    await this.page
      .getByRole("searchbox", { name: "Search" })
      .nth(3)
      .fill(data.productCategory);
    await this.page.getByText(data.productCategory).click();

    // clicking choose after selecting category, subcategory and product category
    await this.healer.safeClick('button:has-text("Choose")', "text=Choose");

    // Filling the description, quantity and selecting units
    await this.healer.safeFill('[name="productDescription"]', data.description);

    await this.healer.safeFill(
      '[name="estOrderQuantity.quantity"]',
      data.quantity,
    );

    const dropdown = this.page.locator("span").filter({ hasText: "Units" });
    await dropdown.click();
    const dropdownOptions = this.page.locator(".p-dropdown-items-wrapper");
    await dropdownOptions.getByText(data.units).click({ force: true });
  }

  errorMessages() {
    const productErrorText = this.page.getByText("Product Name is required");
    const productCapsErrorText = this.page.getByText("Product Name must not be in all caps");

    return{
     productErrorText,
     productCapsErrorText
    }
  }

  async clickContinue() {
    await this.healer.safeClick('button:has-text("Continue")', "text=Continue");
  }
}
