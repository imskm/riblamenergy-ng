import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { ProjectModel } from '../models/project.model';
import { FormBuilder } from '../helpers/formbuilder';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  baseUrl       = "http://riblamenergy/admin/project";

  constructor(private http: HttpClient) { }

  create(projectModel: ProjectModel): Observable<any> {
    const post_data = FormBuilder.mapJSONToFormData(projectModel);

  	return this.http.post<ProjectModel>(this.baseUrl + "/store", post_data);
  }

  // Fetch recent users by page
  fetch(): Observable<any> {
    return this.http.get<ProjectModel>(this.baseUrl + "/index");
  }

  // Get a specific user by ID
  get(id: number):Observable<any> {
    const url = this.baseUrl + "/" + id + "/show";
    return this.http.get<ProjectModel>(url);
  }

  update(id: number, projectModel: ProjectModel):Observable<any> {
    const url = `${this.baseUrl}/${id}/update`;
    const post_data = FormBuilder.mapJSONToFormData(projectModel);

    return this.http.post<ProjectModel>(url, post_data);
  }

  search(q: string) {
    return this.http.get(this.baseUrl + "/search?q=" + q);
  }
}
