import { Component, OnInit, Injectable } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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

  constructor(
  	private route: ActivatedRoute,
  	private router: Router
  ) { }

  ngOnInit(): void {
  	this.project_id = this.route.snapshot.paramMap.get("id");
  }

}
