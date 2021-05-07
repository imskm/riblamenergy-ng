import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { PaymentModel } from '../models/payment.model';
import { FormBuilder } from '../helpers/formbuilder';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  baseUrl       = "http://riblamenergy/admin/payment";

  constructor(private http: HttpClient) { }

  create(PaymentModel: PaymentModel): Observable<any> {
    const post_data = FormBuilder.mapJSONToFormData(PaymentModel);

  	return this.http.post<PaymentModel>(this.baseUrl + "/store", post_data);
  }

  // Fetch recent users by page
  fetch(): Observable<any> {
    return this.http.get<PaymentModel>(this.baseUrl + "/index");
  }

  // Get a specific user by ID
  get(id: number):Observable<any> {
    const url = this.baseUrl + "/" + id + "/show";
    return this.http.get<PaymentModel>(url);
  }
}
