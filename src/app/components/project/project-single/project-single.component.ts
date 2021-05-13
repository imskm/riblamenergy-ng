import { Component, OnInit, Input } from '@angular/core';

import { ProjectModel } from '../../../models/project.model';

@Component({
  selector: 'app-project-single',
  templateUrl: './project-single.component.html',
  styleUrls: ['./project-single.component.css']
})
export class ProjectSingleComponent implements OnInit {

  @Input() project: ProjectModel;

  constructor() { }

  ngOnInit(): void {
  }

}
