import { Component, OnInit } from '@angular/core';

import { ProjectModel } from '../../../models/project.model';
import { UserModel } from '../../../models/user.model';

@Component({
  selector: 'app-payment-show',
  templateUrl: './payment-show.component.html',
  styleUrls: ['./payment-show.component.css']
})
export class PaymentShowComponent implements OnInit {

  project: ProjectModel;
  user: UserModel;

  constructor() { }

  ngOnInit(): void {
  }

}
