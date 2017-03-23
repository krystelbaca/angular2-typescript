export class TodoSpec {

	id: number;
  	title: string = '';
  	complete: boolean = false;

  	constructor(values: Object = {}) {
    Object.assign(this, values);
  }
};

let todo = new TodoSpec({
  title: 'Read SitePoint article',
  complete: false
});
