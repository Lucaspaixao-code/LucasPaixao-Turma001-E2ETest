import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import DemoBlazeElements from '../elements/DemoBlazeElements';
import BasePage from './BasePage';
import { promises } from 'dns';

export default class DemoBlazePage extends BasePage {
  readonly demoBlazeElements: DemoBlazeElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.demoBlazeElements = new DemoBlazeElements(page);
  }

  async RealizarLogin(): Promise<void> {
    await this.demoBlazeElements.getBotaoLogin().click();
    await this.demoBlazeElements
      .getCampoUserName()
      .fill(faker.internet.email());
    await this.demoBlazeElements.getCampoPassword().fill('SenhaZik4');
    await this.demoBlazeElements.getBotaoRealizarLogin().click();
  }

  async RealizarCompra(): Promise<void> {
    await this.demoBlazeElements.getPrimeiroProduto().click();
    await this.demoBlazeElements.getAddCart().click();
    await this.demoBlazeElements.getCart().click();
    await this.demoBlazeElements.getPlaceOrder().click();
    await this.demoBlazeElements.getName().fill(faker.person.fullName());
    await this.demoBlazeElements.getCountry().fill('Brasil');
    await this.demoBlazeElements.getCity().fill('teste');
    await this.demoBlazeElements.getCreditCard().fill('123');
    await this.demoBlazeElements.getYear().fill('123123');
    await this.demoBlazeElements.getMonth().fill('1');
    await this.demoBlazeElements.getPurchase().click();
  }

  async ValidarComrpaSucesso(): Promise<void> {
    await expect(this.demoBlazeElements.getPurchaseValidate()).toBeVisible();
  }
}
