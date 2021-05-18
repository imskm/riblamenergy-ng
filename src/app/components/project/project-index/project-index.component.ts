import { Component, OnInit, Input } from '@angular/core';

import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-project-index',
  templateUrl: './project-index.component.html',
  styleUrls: ['./project-index.component.css']
})
export class ProjectIndexComponent implements OnInit {

  @Input() projectList: Array<any>;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
