import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpRequestService } from './http-request.service';
import { AuthService } from './auth.service';
import { FormBuilder } from '../helpers/formbuilder';

import { ClientModel } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseUrl       = "client";

  constructor(
  	private httpRequest: HttpRequestService,
    private authSerivce: AuthService,
  ) {
    const userType = this.authSerivce.isAdmin()? "admin" : "user";
    this.baseUrl = `${userType}/${this.baseUrl}`;
  }

  fetch(page: number): Observable<any> {
  	return this.httpRequest.get(this.baseUrl + "/index?page=" + page);
  }

  create(clientModel: ClientModel): Observable<any> {
    const post_data = FormBuilder.mapJSONToFormData(clientModel);

  	return this.httpRequest.post(this.baseUrl + "/store", post_data);
  }
}
