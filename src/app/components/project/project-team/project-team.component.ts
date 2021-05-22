import { Component, OnInit, Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ProjectService } from '../../../services/project.service';
import { AuthService } from '../../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-project-team',
  templateUrl: './project-team.component.html',
  styleUrls: ['./project-team.component.css']
})
export class ProjectTeamComponent implements OnInit {

  users = [];
  project_id = null;

  constructor(
  	private route: ActivatedRoute,
  	private router: Router,
  	private projectService: ProjectService,
  	private _location: Location,
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
  	this.project_id = this.route.snapshot.paramMap.get("id");
  	this.fetchTeamMembers(1);
  }

  fetchTeamMembers(page: number) {
  	this.projectService.fetchTeam(this.project_id, page).subscribe((res: any) => {
      this.users = [];
      res.data.forEach((el: any) => {
        let result = el;
        result.children = [];
    		this.users.push(result);
      });
  	});
  }

  roleText(role: number) {
    return (role == 2) ? "Business Head" : ((role == 3) ? "Area Manager" : ((role == 4) ? "Field Engineer" : "Unknown"));
  }

  navigateBack() {
  	this._location.back();
  }

  paginateTeam(page: number) {
    this.fetchTeamMembers(page);
  }

  fetchSubtree(index: number) {
    // Field Engineer (role = 4) does not have children
    if (this.users[index].role == 4) {
      return;
    }

    this.projectService.fetchSubtree(this.project_id, this.users[index].id).subscribe((res: any) => {
      this.users[index].children = res.data.children;
    });
  }

}
