import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { PaymentModel } from '../../../models/payment.model';
import { ProjectModel } from '../../../models/project.model';
import { UserModel } from '../../../models/user.model';

import { PaymentService } from '../../../services/payment.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-payment-show',
  templateUrl: './payment-show.component.html',
  styleUrls: ['./payment-show.component.css']
})
export class PaymentShowComponent implements OnInit {

  payment: PaymentModel;
  project: ProjectModel = null;
  user: UserModel = null;

  constructor(
  	private route: ActivatedRoute,
  	private router: Router,
  	private paymentService: PaymentService,
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.paymentService.get(Number(id)).subscribe((res: any) => {
      this.payment = res.data.payment;
      this.project = res.data.project;
      this.user = res.data.user;
    });
  }

}
