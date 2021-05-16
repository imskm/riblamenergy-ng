import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpRequestService } from './http-request.service';
import { FormBuilder } from '../helpers/formbuilder';

import { ClientModel } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseUrl       = "admin/client";

  constructor(
  	private httpRequest: HttpRequestService,
  ) { }

  fetch(): Observable<any> {
  	return this.httpRequest.get(this.baseUrl + "/index");
  }

  create(clientModel: ClientModel): Observable<any> {
    const post_data = FormBuilder.mapJSONToFormData(clientModel);

  	return this.httpRequest.post(this.baseUrl + "/store", post_data);
  }
}
