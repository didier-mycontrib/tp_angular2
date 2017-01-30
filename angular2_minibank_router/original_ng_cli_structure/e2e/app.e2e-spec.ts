import { ENgPage } from './app.po';

describe('e-ng App', function() {
  let page: ENgPage;

  beforeEach(() => {
    page = new ENgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
