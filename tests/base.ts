import { test as base, Locator, Page } from '@playwright/test';

export const test = base.extend({
  context: async ({ browser }, use) => {
    const context = await browser.newContext();
    await use(context);
    await context.close();
  },

  page: async ({ context }, use) => {
    const page = await context.newPage();
    await use(page);
    await page.close();
  },
});

test.use({
  headless: false,
  launchOptions: {
    slowMo: 50
  }
});

//------

interface IRegisterSelectors {
  registrar(): Locator;
  emailInput(): Locator;
  nomeInput(): Locator;
  senhaInput(): Locator;
  confirmarSenhaInput(): Locator;
  cadastrarButton(): Locator;
}

export class BasePage {
  private selectors: IRegisterSelectors;

  constructor(private page: Page) {
    this.selectors = this.initializeSelectors();
  }

  private initializeSelectors(): IRegisterSelectors {
    return {
      registrar: () => this.page.getByRole('button', { name: 'Registrar' }),
      emailInput: () => this.page.locator('form').filter({ hasText: 'Voltar ao loginE-' }).getByPlaceholder('Informe seu e-mail'),
      nomeInput: () => this.page.getByRole('textbox', { name: 'Informe seu Nome' }),
      senhaInput: () => this.page.locator('form').filter({ hasText: 'Voltar ao loginE-' }).getByPlaceholder('Informe sua senha'),
      confirmarSenhaInput: () => this.page.getByRole('textbox', { name: 'Informe a confirmação da senha' }),
      cadastrarButton: () => this.page.getByRole('button', { name: 'Cadastrar' }),
    }
  }


  async criarConta(): Promise<void> {
    await this.registrar();
    await this.preencherEmail();
    await this.preencherNome();
    await this.preencherSenha();
    await this.confirmarSenha();
    await this.cadastrarUsuario();
  }

  async registrar(): Promise<void> {
    await this.selectors.registrar().click();

  }

  async preencherEmail(): Promise<void> {
    await this.selectors.emailInput().click();
    await this.selectors.emailInput().fill('bkguyi8@gmail.com')
  }

  async preencherNome(): Promise<void> {
    await this.selectors.nomeInput().click();
    await this.selectors.nomeInput().fill('bkguyi')
  }
  async preencherSenha(): Promise<void> {
    await this.selectors.senhaInput().click();
    await this.selectors.senhaInput().fill('12345')

  }
  async confirmarSenha(): Promise<void> {
    await this.selectors.confirmarSenhaInput().click();
    await this.selectors.confirmarSenhaInput().fill('12345')

  }
  async cadastrarUsuario(): Promise<void> {
    await this.selectors.cadastrarButton().click();


  }
}


