import { expect, test } from "@playwright/test";
import { PlannerAgent } from "./agents/planner.agent";
import { GeneratorAgent } from "./agents/generator.agent";
import { BuyingRequestPage } from "../pages/BuyingRequestPage";

test("Not giving data in product name field", async ({ page }) => {
  // Planner Agent
  const planner = new PlannerAgent();
  planner.logPlan();

  // Generator Agent
  const generator = new GeneratorAgent();

  // Page Objects
  const buying = new BuyingRequestPage(page);  

  // Step 1: Navigate to the Buying Request page
  await buying.navigate();

  // Step 2: Clicking continue to proceed to OTP page
  await buying.clickContinue();

  // step 3: Validating error messages
  const errorMessages = buying.errorMessages();
  expect (errorMessages.productErrorText).toHaveText("Product Name is required");
});


test("Giving Upper case characters in product name field", async ({ page }) => {
  // Planner Agent
  const planner = new PlannerAgent();
  planner.logPlan();

  // Generator Agent
  const generator = new GeneratorAgent();
  const invalidData = generator.getInvalidData();

  // Page Objects
  const buying = new BuyingRequestPage(page);  

  // Step 1: Navigate to the Buying Request page
  await buying.navigate();

  // Step 2: Fill the post buying request form
  await buying.fillBasicDetails(invalidData);

  // Step 3: Clicking continue to proceed to OTP page
  await buying.clickContinue();

  // step 3: Validating error messages
  const errorMessages = buying.errorMessages();
  expect (errorMessages.productCapsErrorText).toHaveText("Product Name must not be in all caps");
});