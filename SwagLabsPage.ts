import { expect, type Locator, type Page } from '@playwright/test';

export class SwagLabsPage {
    readonly page: Page;

    readonly AddToCardButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.AddToCardButton = page.locator("xpath=//button[@id='add-to-cart-sauce-labs-backpack']");

    }
}