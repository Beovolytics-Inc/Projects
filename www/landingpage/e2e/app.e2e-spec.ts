import { BeovolyticsPage } from './app.po';

describe('beovolytics App', () => {
  let page: BeovolyticsPage;

  beforeEach(() => {
    page = new BeovolyticsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
