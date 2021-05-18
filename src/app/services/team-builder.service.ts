import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { AuthService } from './auth.service';

import { TeamBuilderModel } from '../models/team-builder.model';
import { FormBuilder } from '../helpers/formbuilder';
import { HttpRequestService } from './http-request.service';

@Injectable({
  providedIn: 'root'
})
export class TeamBuilderService {
  baseUrl       = "team-builder";

  constructor(private httpRequest: HttpRequestService, private authSerivce: AuthService) {
    const userType = this.authSerivce.isAdmin()? "admin" : "user";
    this.baseUrl = `${userType}/${this.baseUrl}`;
  }

  create(teamBuilderModel: TeamBuilderModel): Observable<any> {
    const post_data = new FormData();
    post_data.append("project_id", teamBuilderModel.project_id.toString());
    post_data.append("role", teamBuilderModel.role.toString());
    if (teamBuilderModel.parent) {
      post_data.append("parent", teamBuilderModel.parent.toString());
    }
    teamBuilderModel.children.forEach((c: any) => {
      post_data.append("children[]", c.id);
    });

    return this.httpRequest.post(this.baseUrl + "/assign-member", post_data);
  }

}
