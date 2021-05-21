import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ProjectService } from '../../../services/project.service';
import { UserService } from '../../../services/user.service';
import { TeamBuilderService } from '../../../services/team-builder.service';
import { MessageService } from '../../../services/message.service';

import { ProjectModel } from '../../../models/project.model';
import { ClientModel } from '../../../models/client.model';
import { TeamMoverModel } from '../../../models/team-mover.model';


@Component({
  selector: 'app-project-team-move',
  templateUrl: './project-team-move.component.html',
  styleUrls: ['./project-team-move.component.css']
})
export class ProjectTeamMoveComponent implements OnInit {

  projects = [];
  teamMover = new TeamMoverModel(0, 0, 0, 0);
  user_q = "";
  parent_q = "";
  usersSearchResult = [];
  parentsSearchResult = [];
  selectedParent = null;
  selectedUser = null;

  constructor(
  	private route: ActivatedRoute,
  	private router: Router,
  	private projectService: ProjectService,
  	private userService: UserService,
  	private teamBuilderService: TeamBuilderService,
  	private msgService: MessageService,
  ) { }

  ngOnInit(): void {
  	this.route.queryParams.subscribe((params) => {
  		if (params["project_id"] !== undefined) {
  			this.teamMover.src_project_id = params["project_id"];
        this.teamMover.dest_project_id = params["project_id"];
  		}
  	});

  	this.fetchProjects(1);
  }


  fetchProjects(page: number) {
  	this.projectService.fetch(page).subscribe((res: any) => {
  		// Sort name wise
  		res.data.sort((a, b) => {
  			return a.title.localeCompare(b.title);
  		});
  		this.projects = res.data;
  	});
  }

  searchUser() {
  	if (this.user_q.replace(" ", "").length < 2) {
  		return;
  	}

  	this.userService.search(this.user_q).subscribe((res: any) => {
  		this.usersSearchResult = res.data;
  	});
  }

  selectUser(user: any) {
  	this.selectedUser = user;
    this.teamMover.child = user.id;
  }

  selectParent(parent: any) {
    this.selectedParent = parent;
    this.teamMover.parent = parent.id;
  }

  roleText(role: number) {
    return (role == 2) ? "Business Head" : ((role == 3) ? "Area Manager" : ((role == 4) ? "Field Engineer" : "Unknown"));
  }

  create() {
    this.teamBuilderService.move(this.teamMover).subscribe((res) => {
      const project_id = this.teamMover.src_project_id;
      const url = `/project/${project_id}/team`;
      this.msgService.set("Member moved successfully!");
      this.router.navigate([url]);
    });
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
