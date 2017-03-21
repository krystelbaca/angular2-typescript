import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TodoAppAppComponent } from '../app/todo-app.component';

beforeEachProviders(() => [TodoAppAppComponent]);

describe('App: TodoApp', () => {
  it('should create the app',
      inject([TodoAppAppComponent], (app: TodoAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'todo-app works!\'',
      inject([TodoAppAppComponent], (app: TodoAppAppComponent) => {
    expect(app.title).toEqual('todo-app works!');
  }));
});
