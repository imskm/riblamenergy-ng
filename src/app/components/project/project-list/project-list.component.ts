import { Component, OnInit, Injectable } from '@angular/core';


import { AuthService } from '../../../services/auth.service';
import { ProjectService } from '../../../services/project.service';
import { ProjectModel } from '../../../models/project.model';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Array<ProjectModel>;
  project_q: string = "";

  constructor(private projectService: ProjectService, public authService: AuthService) {
  	this.projects = [];
  }

  ngOnInit(): void {
  	this.fetchProjects(1);
  }

  fetchProjects(page: number) {
  	this.projectService.fetch(page).subscribe((res: any) => {
  		this.projects = res.data;
      // @TODO Handle error response
  	});
  }

  searchProject() {
    if (this.project_q.replace(" ", "").length < 3) {
      if (this.project_q.replace(" ", "").length == 0) {
        this.fetchProjects(1);
        return;
      }
      return;
    }
    this.projectService.search(this.project_q)
      .subscribe((res: any) => {
        this.projects = res.data;
      });
  }

  paginateProject(page: number) {
    this.fetchProjects(page);
  }

}
