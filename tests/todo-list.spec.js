const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  // Keep the test offline: the icon font and web font are cosmetic.
  await page.route(/fonts\.googleapis\.com|cdnjs\.cloudflare\.com/, (route) => route.abort());
  await page.goto("/TodoList/");
});

test("adds a to-do on Enter", async ({ page }) => {
  await page.getByPlaceholder("Add New").fill("Write smoke tests");
  await page.getByPlaceholder("Add New").press("Enter");
  await expect(page.locator("li").last()).toHaveText(/Write smoke tests/);
});

test("shows typed HTML as text and ignores blank input", async ({ page }) => {
  const input = page.getByPlaceholder("Add New");
  await input.fill("<b>bold</b>");
  await input.press("Enter");
  await input.fill("   ");
  await input.press("Enter");

  await expect(page.locator("li")).toHaveCount(4);
  await expect(page.locator("li").last()).toHaveText(/<b>bold<\/b>/);
  await expect(page.locator("li b")).toHaveCount(0);
});

test("clicking a to-do toggles it complete", async ({ page }) => {
  const first = page.locator("li").first();
  await first.click();
  await expect(first).toHaveClass(/completed/);
  await first.click();
  await expect(first).not.toHaveClass(/completed/);
});

test("trash icon deletes a to-do", async ({ page }) => {
  const first = page.locator("li").first();
  await first.hover();
  await first.locator("span").click();
  await expect(page.locator("li")).toHaveCount(2);
});
