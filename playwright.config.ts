import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",

  use: {
    baseURL: "https://www.istaging.pepagora.com",
    headless: false,
    //viewport: { width: 1280, height: 720 },
    launchOptions: {
      args: ["--start-maximized"],
      slowMo:1000,
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
