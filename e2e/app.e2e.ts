import { TodoAppPage } from './app.po';

describe('todo-app App', function() {
  let page: TodoAppPage;

  beforeEach(() => {
    page = new TodoAppPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('todo-app works!');
  });
});
