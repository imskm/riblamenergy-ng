import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { UserModel } from '../models/user.model';
import { FormBuilder } from '../helpers/formbuilder';
import { HttpRequestService } from './http-request.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl       = "admin/user";

  constructor(private httpRequest: HttpRequestService) { }

  create(userModel: UserModel): Observable<any> {
    const post_data = FormBuilder.mapJSONToFormData(userModel);

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

  update(id: number, userModel: UserModel):Observable<any> {
    const url = `${this.baseUrl}/${id}/update`;
    const post_data = FormBuilder.mapJSONToFormData(userModel);

    return this.httpRequest.post(url, post_data);
  }

  search(q: string) {
    return this.httpRequest.get(this.baseUrl + "/search?q=" + q);
  }

}
