import { Component, OnInit, Injectable } from '@angular/core';

import { PaymentService } from '../../../services/payment.service';
import { UserService } from '../../../services/user.service';
import { ProjectService } from '../../../services/project.service';
import { PaymentModel } from '../../../models/payment.model';
import { ProjectModel } from '../../../models/project.model';
import { UserModel } from '../../../models/user.model';

@Injectable({
	providedIn: 'root'
})
@Component({
  selector: 'app-payment-add',
  templateUrl: './payment-add.component.html',
  styleUrls: ['./payment-add.component.css']
})
export class PaymentAddComponent implements OnInit {

  payment = new PaymentModel(0, null, null);

  projectsSearchResult: Array<ProjectModel>;
  usersSearchResult: Array<UserModel>;

  selectedProject: ProjectModel;
  selectedUser: UserModel;

  showErrors = false;
  project_q = "";
  user_q = "";
  errors = {
  	project_q: "",
  	user_q: "",
  	amount: "",
  };

  // @TODO Show form validation error message

  constructor(private paymentService: PaymentService,
  	private projectService: ProjectService,
  	private userService: UserService
  ) {
  	this.projectsSearchResult = [];
  	this.usersSearchResult = [];
  	this.selectedProject = null;
  	this.selectedUser = null;
  }

  ngOnInit(): void {
  }

  searchProject() {
  	console.log(this.project_q);
  	if (this.project_q.length < 3) {
  		return;
  	}
  	this.projectService.search(this.project_q)
  		.subscribe((res: any) => {
  			this.projectsSearchResult = res.data;
  		});
  }

  searchUser() {
  	console.log(this.user_q);
  	if (this.user_q.length < 3) {
  		return;
  	}
  	this.userService.search(this.user_q)
  		.subscribe((res: any) => {
  			this.usersSearchResult = res.data;
  		});
  }

  selectProject(index: number) {
  	this.selectedProject = this.projectsSearchResult[index];
  }

  selectUser(index: number) {
  	this.selectedUser = this.usersSearchResult[index];
  }

  create() {
  	this.showErrors = true;
  	if (!this.validateCreate()) {
  		this.showErrors = true;
  	}

  	this.payment.project_id = this.selectedProject.id;
  	this.payment.user_id = this.selectedUser.id;

  	this.paymentService.create(this.payment)
  		.subscribe((res) => {
  			// @TODO Handle success/error response
  		});
  }

  validateCreate(): boolean {
  	if (this.selectedProject == null) {
  		this.errors.project_q = "Please search and select a project";
  		return false;
  	}
  	if (this.selectedUser == null) {
  		this.errors.user_q = "Please search and select a user";
  		return false;
  	}
  	if (this.payment.amount < 0) {
  		this.errors.amount = "Invalid amount";
  		return false;
  	}

  	return true;
  }

}
