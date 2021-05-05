export class FormBuilder {

  constructor() { }

  static mapJSONToFormData(model: any): FormData {
  	const form = new FormData();

  	const keys = Object.keys(model);

  	keys.forEach((key) => {
  		if (model[key] !== undefined) {
	  		form.append(key, model[key]);
  		}
  	});

  	return form;
  }

}
