import { ComplexNgmodelPage } from './app.po';

describe('complex-ngmodel App', () => {
  let page: ComplexNgmodelPage;

  beforeEach(() => {
    page = new ComplexNgmodelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
