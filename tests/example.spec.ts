import { test, expect } from "@playwright/test";

test("Verify page title", async ({ page }) => {
  await test.step("Access e-commerce betterbytesvn page", async () => {
    await page.goto("https://e-commerce-dev.betterbytesvn.com/");
  });

  await test.step("Verify the page title", async () => {
    await expect(page).toHaveTitle(`E-commerce site for automation testing – E-commerce site for automation testing`);
  });
});

test("Verify heading of My Account page", async ({ page }) => {
  await test.step("Access e-commerce betterbytesvn page", async () => {
    await page.goto("https://e-commerce-dev.betterbytesvn.com/");
  });

  await test.step("Go to my account page", async () => {
    await page.locator("//a[text()='My account']").click();
  })
  
  await test.step("Verify heading", async ()=> {
    await expect(page.locator("h1.vw-page-title")).toContainText(`My account`);
    await expect(page.locator("h1.vw-page-title")).toHaveText(`My account`);
  })
  
});
