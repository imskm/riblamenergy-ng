import { Component, OnInit, Injectable } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ProjectService } from '../../../services/project.service';
import { MessageService } from '../../../services/message.service';
import { ProjectModel } from '../../../models/project.model';

@Injectable({
	providedIn: 'root'
})
@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  project: ProjectModel;
  tax_rate = 0.18;

  constructor(
  	private route: ActivatedRoute,
  	private router: Router,
  	private projectService: ProjectService,
    private msgService: MessageService
  ) { }

  ngOnInit(): void {
  	const id = this.route.snapshot.paramMap.get("id");
    this.projectService.get(Number(id)).subscribe((res: any) => {
      const result = res.data;
      const data   = result.project;
      this.project = new ProjectModel(
      	data.title,
      	Number(data.revenue),
      	Number(data.commission_rate),
      	Number(data.client_id),
      	data.created_at,
      	Number(data.tax),
      	Number(data.net_revenue),
      	Number(data.commission_amount),
      	Number(data.paid_amount),
      	data.id
      );
    });
  }

  update(): void {
  	const id = this.route.snapshot.paramMap.get("id");
    this.projectService.update(Number(id), this.project).subscribe((res: any) => {
      const url = `/project/${id}/show`;
      this.msgService.set("Project updated successfully");
      this.router.navigate([url]);
    });
  }

  calcNetRevenue() {
    const revenue = this.project.revenue;

    this.project.tax = Math.round((revenue * this.tax_rate) * 100) / 100;
    this.project.net_revenue = revenue - this.project.tax;
  }

  calcCommission() {
    const rate = this.project.commission_rate;
    this.project.commission_amount = this.project.net_revenue * (rate / 100);
  }

}
