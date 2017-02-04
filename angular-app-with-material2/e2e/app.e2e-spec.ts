import { AngularAppWithMaterial2Page } from './app.po';

describe('angular-app-with-material2 App', function() {
  let page: AngularAppWithMaterial2Page;

  beforeEach(() => {
    page = new AngularAppWithMaterial2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
