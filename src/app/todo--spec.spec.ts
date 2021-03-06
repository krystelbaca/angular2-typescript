
import {TodoSpec} from './todo--spec';

describe('TodoSpec', () => {
  it('should create an instance', () => {
    expect(new TodoSpec()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let todo = new TodoSpec({
      title: 'hello',
      complete: true
    });
    expect(todo.title).toEqual('hello');
    expect(todo.complete).toEqual(true);
  });



});
