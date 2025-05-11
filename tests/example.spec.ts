import { test } from "@playwright/test";
import { BasePage } from "./base";

test.beforeEach(async ({ page }) => {
  await page.goto('https://bugbank.netlify.app');
});

let basePage: BasePage;

test('Criar Conta', async({ page }) => {
  basePage = new BasePage(page);
  await basePage.criarConta();
})