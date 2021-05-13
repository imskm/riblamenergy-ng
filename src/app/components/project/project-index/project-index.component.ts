import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-index',
  templateUrl: './project-index.component.html',
  styleUrls: ['./project-index.component.css']
})
export class ProjectIndexComponent implements OnInit {

  @Input() projectList: Array<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
