import { DignityhealthPage } from './app.po';

describe('dignityhealth App', () => {
  let page: DignityhealthPage;

  beforeEach(() => {
    page = new DignityhealthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
