import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",

  use: {
    baseURL: "https://www.istaging.pepagora.com",
    headless: false,
    launchOptions: {
      args: ["--start-maximized"],
    },
    viewport: null,
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },

  reporter: "html",

  projects: [
    {
      name: "chromium",
      use: { browserName: "chromium" },
    },
  ],
});
