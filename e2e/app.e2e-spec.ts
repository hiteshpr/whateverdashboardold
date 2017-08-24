import { WhateverdashboardPage } from './app.po';

describe('whateverdashboard App', function() {
  let page: WhateverdashboardPage;

  beforeEach(() => {
    page = new WhateverdashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
