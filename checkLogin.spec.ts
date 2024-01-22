import { test, expect } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { SwagLabsPage } from './SwagLabsPage';

test("has title", async ({ page }) => {

  const loginPage = new LoginPage(page);
  const swagLabsPage = new SwagLabsPage(page);

  await loginPage.goto();
  await loginPage.getUserField.pressSequentially("standard_user");
  await loginPage.getPasswordField.pressSequentially("secret_sauce");
  await loginPage.getSugmitLoginBtn.click();
  let AddToCardButton = page.locator("xpath =//button[@id='add-to-cart-sauce-labs-backpack']");

  await expect(swagLabsPage.AddToCardButton).toBeVisible();
});