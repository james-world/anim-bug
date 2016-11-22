import { AnimBugPage } from './app.po';

describe('anim-bug App', function() {
  let page: AnimBugPage;

  beforeEach(() => {
    page = new AnimBugPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
