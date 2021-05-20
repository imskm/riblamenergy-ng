import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AuthService } from './auth.service';

import { ProjectModel } from '../models/project.model';
import { FormBuilder } from '../helpers/formbuilder';
import { HttpRequestService } from './http-request.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  baseUrl       = "project";

  constructor(private httpRequest: HttpRequestService, private authSerivce: AuthService) {
    const userType = this.authSerivce.isAdmin()? "admin" : "user";
    this.baseUrl = `${userType}/${this.baseUrl}`;
  }

  create(projectModel: ProjectModel): Observable<any> {
    const post_data = FormBuilder.mapJSONToFormData(projectModel);

  	return this.httpRequest.post(this.baseUrl + "/store", post_data);
  }

  // Fetch recent users by page
  fetch(page: number): Observable<any> {
    return this.httpRequest.get(this.baseUrl + "/index?page=" + page);
  }

  // Get a specific user by ID
  get(id: number):Observable<any> {
    const url = this.baseUrl + "/" + id + "/show";
    return this.httpRequest.get(url);
  }

  update(id: number, projectModel: ProjectModel):Observable<any> {
    const url = `${this.baseUrl}/${id}/update`;
    const post_data = FormBuilder.mapJSONToFormData(projectModel);

    return this.httpRequest.post(url, post_data);
  }

  search(q: string) {
    return this.httpRequest.get(this.baseUrl + "/search?q=" + q);
  }

  fetchTeam(project_id: number, page: number) {
    return this.httpRequest.get(this.baseUrl + "/" + project_id + "/team?page=" + page);
  }
}
