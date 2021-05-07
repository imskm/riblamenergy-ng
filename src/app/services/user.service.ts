import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { UserModel } from '../models/user.model';
import { FormBuilder } from '../helpers/formbuilder';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl       = "http://riblamenergy/admin/user";

  constructor(private http: HttpClient) { }

  create(userModel: UserModel): Observable<any> {
    const post_data = FormBuilder.mapJSONToFormData(userModel);

  	return this.http.post<UserModel>(this.baseUrl + "/store", post_data, {});
  }

  // Fetch recent users by page
  fetch(): Observable<any> {
    return this.http.get<UserModel>(this.baseUrl + "/index");
  }

  // Get a specific user by ID
  get(id: number):Observable<any> {
    const url = this.baseUrl + "/" + id + "/show";
    return this.http.get<UserModel>(url);
  }

  update(id: number, userModel: UserModel):Observable<any> {
    const url = `${this.baseUrl}/${id}/update`;
    const post_data = FormBuilder.mapJSONToFormData(userModel);

    return this.http.post<UserModel>(url, post_data);
  }

  search(q: string) {
    return this.http.get(this.baseUrl + "/search?q=" + q);
  }
}
