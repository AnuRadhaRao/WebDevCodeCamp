const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto("/ColorGame/");
});

test("starts in hard mode with six squares", async ({ page }) => {
  await expect(page.getByRole("button", { name: "HARD" })).toHaveClass(/selected/);
  await expect(page.locator(".square:visible")).toHaveCount(6);
});

test("picking the matching square wins", async ({ page }) => {
  const target = await page.locator("#colorDisplay").textContent();
  const squares = page.locator(".square");
  const colors = await squares.evaluateAll((els) => els.map((el) => el.style.backgroundColor));
  await squares.nth(colors.indexOf(target)).click();

  await expect(page.locator("#message")).toHaveText("Correct!");
  await expect(page.locator("#reset")).toHaveText("Play Again?");
});

test("picking a wrong square says try again", async ({ page }) => {
  const target = await page.locator("#colorDisplay").textContent();
  const squares = page.locator(".square");
  const colors = await squares.evaluateAll((els) => els.map((el) => el.style.backgroundColor));
  await squares.nth(colors.findIndex((c) => c !== target)).click();

  await expect(page.locator("#message")).toHaveText("Try Again");
});

test("easy mode shows three squares", async ({ page }) => {
  await page.getByRole("button", { name: "EASY" }).click();
  await expect(page.locator(".square:visible")).toHaveCount(3);
});
