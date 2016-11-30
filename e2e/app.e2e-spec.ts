import { StoryBoardingPage } from './app.po';

describe('story-boarding App', function() {
  let page: StoryBoardingPage;

  beforeEach(() => {
    page = new StoryBoardingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
