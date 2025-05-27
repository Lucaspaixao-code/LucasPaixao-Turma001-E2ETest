import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import DemoBlazePage from '../support/pages/DemoBlazePage';

test.describe('Cadastro de usuário', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let demoBlazePage: DemoBlazePage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.DemoBlaze')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    demoBlazePage = new DemoBlazePage(page);
    await page.goto(BASE_URL);
  });

  test('Realizar compra', async () => {
    await demoBlazePage.RealizarCompra();
    await demoBlazePage.ValidarComrpaSucesso();
  });
});
