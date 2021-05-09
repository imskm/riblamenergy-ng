import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { TeamBuilderModel } from '../models/team-builder.model';
import { FormBuilder } from '../helpers/formbuilder';

@Injectable({
  providedIn: 'root'
})
export class TeamBuilderService {
  baseUrl       = "http://riblamenergy/admin/team-builder";

  constructor(private http: HttpClient) { }

  create(teamBuilderModel: TeamBuilderModel): Observable<any> {
    const post_data = new FormData();
    post_data.append("project_id", teamBuilderModel.project_id.toString());
    post_data.append("role", teamBuilderModel.role.toString());
    if (teamBuilderModel.parent) {
      post_data.append("parent", teamBuilderModel.parent.toString());
    }
    teamBuilderModel.children.forEach((c: any) => {
      console.log(c.id);
      post_data.append("children[]", c.id);
    });

    return this.http.post(this.baseUrl + "/assign-member", post_data, {});
  }

}
