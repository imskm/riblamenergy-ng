import { Component, OnInit, Injectable } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


import { ProjectService } from '../../../services/project.service';
import { UserService } from '../../../services/user.service';
import { TeamBuilderService } from '../../../services/team-builder.service';
import { MessageService } from '../../../services/message.service';

import { ProjectModel } from '../../../models/project.model';
import { ClientModel } from '../../../models/client.model';
import { TeamBuilderModel } from '../../../models/team-builder.model';

// @TODO Dynamic member select dropdown element with business head / area manager
//  populated based on member type choice

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-project-team-build',
  templateUrl: './project-team-build.component.html',
  styleUrls: ['./project-team-build.component.css']
})
export class ProjectTeamBuildComponent implements OnInit {

	project = new ProjectModel("", 0, 0, 0);

  projects = [];
  teamBuilder = new TeamBuilderModel(0, 0, 0, []);
  user_q = "";
  parent_q = "";
  usersSearchResult = [];
  parentsSearchResult = [];
  selectedParent = null;
  errors = {
    project_id: "",
    role: "",
    parent: "",
  };

  constructor(
  	private route: ActivatedRoute,
  	private router: Router,
  	private projectService: ProjectService,
  	private userService: UserService,
    private teamBuilderService: TeamBuilderService,
    private msgService: MessageService
  ) { }

  ngOnInit(): void {
  	this.route.queryParams.subscribe((params) => {
  		if (params["project_id"] !== undefined) {
  			this.teamBuilder.project_id = params["project_id"];
  		}
  	});

  	this.fetchProjects();
  }

  fetchProjects() {
  	this.projectService.fetch().subscribe((res: any) => {
  		// Sort name wise
  		res.data.sort((a, b) => {
  			return a.title.localeCompare(b.title);
  		});
  		this.projects = res.data;
  	});
  }

  searchUser() {
    console.log("OK1");
  	if (this.user_q.replace(" ", "").length < 2) {
  		return;
  	}
    console.log("OK2");
    // If role is not selected then show error
    if (!this.teamBuilder.role) {
      this.errors.role = "Please select a role";
      return;
    }
    console.log("OK3");

  	this.userService.search(this.user_q).subscribe((res: any) => {
  		this.usersSearchResult = res.data;
  	});
  }

  addUser(user: any) {
  	this.teamBuilder.children.push(user);
  }

  selectParent(parent: any) {
    this.selectedParent = parent;
    this.teamBuilder.parent = parent.id;
  }

  roleText(role: number) {
    return (role == 2) ? "Business Head" : ((role == 3) ? "Area Manager" : ((role == 4) ? "Field Engineer" : "Unknown"));
  }

  create() {
    this.teamBuilderService.create(this.teamBuilder).subscribe((res) => {
      const project_id = this.teamBuilder.project_id;
      const url = `/project/${project_id}/team`;
      this.msgService.set("Team added successfully!");
      this.router.navigate([url]);
    });
  }

  fetchUserByRole() {
    if (!this.teamBuilder.role) {
      this.errors.role = "Please select a role";
      return;
    }

  }

  searchParent() {
    if (this.parent_q.replace(" ", "").length < 2) {
      return;
    }
    this.userService.search(this.parent_q).subscribe((res: any) => {
      this.parentsSearchResult = res.data;
    });
  }

}
