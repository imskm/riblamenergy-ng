import { Component, OnInit, Injectable } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ProjectService } from '../../../services/project.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-project-show',
  templateUrl: './project-show.component.html',
  styleUrls: ['./project-show.component.css']
})
export class ProjectShowComponent implements OnInit {

  project_id = null;
  project = null;
  payments = [];

  constructor(
  	private route: ActivatedRoute,
  	private router: Router,
    private projectSerivce: ProjectService
  ) { }

  ngOnInit(): void {
  	this.project_id = this.route.snapshot.paramMap.get("id");
    this.fetchProject();
  }

  fetchProject() {
    this.projectSerivce.get(this.project_id).subscribe((res: any) => {
      this.project = res.data.project;
      this.payments = res.data.payments;
    });
  }

}
