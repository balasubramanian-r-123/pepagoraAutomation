import { expect, test } from "@playwright/test";
import { PlannerAgent } from "./agents/planner.agent";
import { GeneratorAgent } from "./agents/generator.agent";
import { BuyingRequestPage } from "../pages/BuyingRequestPage";
import { OTPPage } from "../pages/OTPPage";
import { AboutYouPage } from "../pages/AboutYouPage";
import { PostBuyingRequestsPage } from "../pages/PostBuyingRequestsPage";

test("End-to-End Buying Request Flow", async ({ page }) => {
  // Planner Agent
  const planner = new PlannerAgent();
  planner.logPlan();

  // Generator Agent
  const generator = new GeneratorAgent();
  const data = generator.getValidData();

  // Page Objects
  const buying = new BuyingRequestPage(page);
  const otp = new OTPPage(page);
  const about = new AboutYouPage(page);
  const pbr = new PostBuyingRequestsPage(page);

  // Step 1: Navigate to the Buying Request page
  await buying.navigate();

  // Step 2: Fill the post buying request form
  await buying.fillBasicDetails(data);

  // Step 3: Clicking continue to proceed to OTP page
  await buying.clickContinue();

  // Step 4: OTP Handling
  await otp.enterPhone(data.phoneNumber);
  console.log("Please enter OTP manually");


  // Tell is about yourself page validations
  const locators = about.pageLocators();
  await page.waitForSelector('text=Tell us about yourself');
  await expect(locators.titleLocator).toHaveText('Tell us about yourself');
  await expect(locators.descriptionLocator).toHaveText('Help us serve you better');
  await expect(locators.detailsLocator).toContainText('Receive detailed quotes & documents');

  // Step 5: Fill About You
  await about.fillUserDetails(data);

  // Step 6: Post buy request field validations after submitting
  const pbrLocators = pbr.locators(data);
  await page.waitForSelector("//*[text()='Buying Requests']");
  expect((await pbrLocators).buyingRequestTitle).toBeVisible();
  expect((await pbrLocators).quoteTab).toBeVisible();
  
  const quantityUnits = `${data.quantity}-${data.units}`.toLowerCase();
  expect((await pbrLocators).submissionId).toMatch(/^PBR[a-zA-Z0-9]{10}$/);
  expect((await pbrLocators).source).toEqual("Buying Request");
  expect((await pbrLocators).productName).toEqual(data.productName);
  expect((await pbrLocators).estimatedOrderQuantityWithUnits).toEqual(quantityUnits);
});