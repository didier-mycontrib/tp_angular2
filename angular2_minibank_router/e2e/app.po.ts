import { browser, element, by } from 'protractor';

export class ENgPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    //return element(by.css('app-root h1')).getText();
    return element(by.css('app-root #mainHeader h3')).getText();
  }
}
