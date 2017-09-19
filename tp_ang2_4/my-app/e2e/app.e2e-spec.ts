import { Angular4MinibankRouterPage } from './app.po';

describe('angular4-minibank-router App', () => {
  let page: Angular4MinibankRouterPage;

  beforeEach(() => {
    page = new Angular4MinibankRouterPage();
  });

 /* it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mon pied de page');
  }); */


 it('should display title Minibank App', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Minibank App');
  });
});
