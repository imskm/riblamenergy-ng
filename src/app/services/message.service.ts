import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message: string = "";
  errorMessages = [];
  isSuccess: boolean = true;

  constructor() { }

  public set(msg: string, isSuccess: boolean = true) {
  	this.message = msg;
  	this.isSuccess = isSuccess;
  	console.log("Message service set called");

  	setTimeout(() => {
  		this.message = "";
		console.log("Message service timeout called");
  	}, 4000);
  }

  public setError(errors: any) {
    const keys = Object.keys(errors);
    keys.forEach((element) => {
      this.errorMessages.push(errors[element]);
    })
    setTimeout(() => {
      this.errorMessages = [];
    }, 10000);
  }
}
