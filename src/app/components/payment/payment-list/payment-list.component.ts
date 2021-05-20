import { Component, OnInit, Injectable } from '@angular/core';

import { AuthService } from '../../../services/auth.service';
import { PaymentService } from '../../../services/payment.service';
import { PaymentModel } from '../../../models/payment.model';

@Injectable({
	providedIn: 'root'
})
@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {
  
  payments: Array<PaymentModel>;

  constructor(private paymentService: PaymentService, public authService: AuthService) {
  	this.payments = [];
  }

  ngOnInit(): void {
  	this.fetchPayments(1);
  }

  fetchPayments(page: number) {
  	this.paymentService.fetch(page)
  		.subscribe((res) => {
  			this.payments = res.data;
  		});
  }

  paginatePayment(page: number) {
    this.fetchPayments(page);
  }

}
