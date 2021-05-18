import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AuthService } from './auth.service';

import { PaymentModel } from '../models/payment.model';
import { FormBuilder } from '../helpers/formbuilder';
import { HttpRequestService } from './http-request.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  baseUrl       = "payment";

  constructor(private httpRequest: HttpRequestService, private authSerivce: AuthService) {
    const userType = this.authSerivce.isAdmin()? "admin" : "user";
    this.baseUrl = `${userType}/${this.baseUrl}`;
  }

  create(PaymentModel: PaymentModel): Observable<any> {
    const post_data = FormBuilder.mapJSONToFormData(PaymentModel);

  	return this.httpRequest.post(this.baseUrl + "/store", post_data);
  }

  // Fetch recent users by page
  fetch(): Observable<any> {
    return this.httpRequest.get(this.baseUrl + "/index");
  }

  // Get a specific user by ID
  get(id: number):Observable<any> {
    const url = this.baseUrl + "/" + id + "/show";
    return this.httpRequest.get(url);
  }
}
