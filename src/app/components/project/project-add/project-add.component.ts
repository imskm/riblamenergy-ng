import { Component, OnInit, Injectable } from '@angular/core';

import { ProjectService } from '../../../services/project.service';
import { ProjectModel } from '../../../models/project.model';
import { ClientModel } from '../../../models/client.model';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {

	project = new ProjectModel("", 0, 0, 0);
  tax_rate = 0.18;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
  }

  create() {
  	this.projectService.create(this.project)
  		.subscribe((res) => {
        // @TODO Show success/error message
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
