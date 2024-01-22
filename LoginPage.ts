import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;

    readonly getUserField: Locator;
    readonly getPasswordField: Locator;
    readonly getSugmitLoginBtn: Locator;
    readonly tocList: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getUserField = page.locator("xpath=//input[@type='text']");
        this.getPasswordField = page.locator("xpath=//input[@type='password']");
        this.getSugmitLoginBtn = page.locator("xpath=//input[@type='submit']");
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/ ');
    }
}