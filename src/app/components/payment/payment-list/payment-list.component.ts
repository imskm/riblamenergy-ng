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
  	this.fetchPayments();
  }

  fetchPayments() {
  	this.paymentService.fetch()
  		.subscribe((res) => {
  			this.payments = res.data;
  		});
  }

}
