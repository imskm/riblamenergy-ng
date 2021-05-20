import { Component, OnInit, Injectable } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ProjectService } from '../../../services/project.service';
import { ClientService } from '../../../services/client.service';
import { MessageService } from '../../../services/message.service';
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
  clients = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService,
    private msgService: MessageService,
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    this.fetchClients(1);
  }

  create() {
  	this.projectService.create(this.project)
  		.subscribe((res) => {
        // @TODO Show success/error message
        const id = res.data.id;
        const url = `/project/${id}/show`;
        this.msgService.set("Project created successfully");
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

  fetchClients(page: number) {
    this.clientService.fetch(page).subscribe((res: any) => {
      this.clients = res.data;
    });
  }

}
