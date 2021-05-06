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

}
