import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class DemoBlazePage extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getBotaoLogin(): Locator {
    return this.page.getByRole('link', { name: 'Log in' });
  }

  getCampoUserName(): Locator {
    return this.page.locator('#loginusername');
  }

  getCampoPassword(): Locator {
    return this.page.locator('#loginpassword');
  }

  getBotaoRealizarLogin(): Locator {
    return this.page.getByRole('button', { name: 'Log in' });
  }

  getBotaoLogout(): Locator {
    return this.page.getByRole('link', { name: 'Log out' });
  }

  getPrimeiroProduto(): Locator {
    return this.page.locator('.card > a').first();
  }

  getAddCart(): Locator {
    return this.page.getByRole('link', { name: 'Add to cart', exact: true });
  }

  getCart(): Locator {
    return this.page.getByRole('link', { name: 'Cart', exact: true });
  }

  getPlaceOrder(): Locator {
    return this.page.getByRole('button', { name: 'Place Order' });
  }

  getName(): Locator {
    return this.page.getByRole('textbox', { name: 'Name:' });
  }

  getCountry(): Locator {
    return this.page.getByRole('textbox', { name: 'Country:' });
  }

  getCity(): Locator {
    return this.page.getByRole('textbox', { name: 'City:' });
  }

  getCreditCard(): Locator {
    return this.page.getByRole('textbox', { name: 'Credit card:' });
  }

  getMonth(): Locator {
    return this.page.getByRole('textbox', { name: 'Month:' });
  }

  getYear(): Locator {
    return this.page.getByRole('textbox', { name: 'Year:' });
  }

  getPurchase(): Locator {
    return this.page.locator('text=Purchase');
  }

  getPurchaseValidate(): Locator {
    return this.page.locator('text=Thank you for your purchase!');
  }
}
