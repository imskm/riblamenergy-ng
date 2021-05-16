import { Component, OnInit, Injectable } from '@angular/core';


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

  constructor(private projectService: ProjectService) {
  	this.projects = [];
  }

  ngOnInit(): void {
  	this.fetchProjects();
  }

  fetchProjects() {
  	this.projectService.fetch().subscribe((res: any) => {
  		this.projects = res.data;
      // @TODO Handle error response
  	});
  }

  searchProject() {
    if (this.project_q.replace(" ", "").length < 3) {
      if (this.project_q.replace(" ", "").length == 0) {
        this.fetchProjects();
        return;
      }
      return;
    }
    this.projectService.search(this.project_q)
      .subscribe((res: any) => {
        this.projects = res.data;
      });
  }

}
