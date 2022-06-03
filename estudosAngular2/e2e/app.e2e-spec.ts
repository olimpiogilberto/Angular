import { EstudosAngular2Page } from './app.po';

describe('estudos-angular2 App', function() {
  let page: EstudosAngular2Page;

  beforeEach(() => {
    page = new EstudosAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
