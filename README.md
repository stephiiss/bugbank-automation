# BugBank - Testes Automatizados com Playwright

Este projeto contém automações de testes end-to-end para o site [BugBank](https://bugbank.netlify.app), utilizando o framework [Playwright](https://playwright.dev/).

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Executar](#como-executar)
- [Relatórios de Teste](#relatórios-de-teste)
- [Customizações e Fixtures](#customizações-e-fixtures)
- [Boas Práticas](#boas-práticas)
- [Contribuição](#contribuição)
- [Licença](#licença)

---

## Sobre o Projeto

O objetivo deste repositório é automatizar cenários de teste para o BugBank, simulando interações reais de usuários, como cadastro de contas, utilizando o Playwright. Os testes são escritos em TypeScript e podem ser executados em diferentes navegadores (Chromium, Firefox, WebKit).

---

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Playwright Test](https://playwright.dev/docs/test-intro)
- [TypeScript](https://www.typescriptlang.org/)

---

## Estrutura do Projeto

```
bugbank/
├── tests/                  # Testes automatizados e utilitários
│   ├── base.ts             # Classe base e fixtures para páginas
│   └── example.spec.ts     # Exemplo de teste automatizado
├── playwright.config.ts    # Configuração do Playwright
├── package.json            # Dependências e scripts do projeto
├── .gitignore              # Arquivos/pastas ignorados pelo git
├── test-results/           # Resultados dos testes (gerado automaticamente)
├── playwright-report/      # Relatórios HTML dos testes (gerado automaticamente)
└── node_modules/           # Dependências instaladas
```

---

## Como Executar

### 1. Instale as dependências

```bash
npm install
```

### 2. Execute os testes

```bash
npx playwright test
```

Por padrão, os testes rodam em paralelo nos navegadores Chromium, Firefox e WebKit.

### 3. Visualize o relatório dos testes

Após a execução, um relatório HTML será gerado em `playwright-report/`. Para abrir:

```bash
npx playwright show-report
```

---

## Relatórios de Teste

- Os relatórios são gerados automaticamente na pasta `playwright-report/`.
- Resultados detalhados de cada execução ficam em `test-results/`.

---

## Customizações e Fixtures

- O arquivo `tests/base.ts` define uma classe `BasePage` com métodos utilitários para interagir com a tela de cadastro do BugBank.
- O teste de exemplo (`example.spec.ts`) utiliza essa classe para realizar o fluxo de criação de conta.
- O Playwright está configurado para rodar os testes em modo não-headless e com `slowMo` de 50ms, facilitando a visualização dos passos.

---

## Boas Práticas

- Mantenha os testes organizados na pasta `tests/`.
- Utilize a classe base para reaproveitar seletores e fluxos comuns.
- Não versionar pastas como `node_modules/`, `test-results/` e `playwright-report/` (já estão no `.gitignore`).

---

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

---

## Licença

Este projeto está licenciado sob a licença ISC. 