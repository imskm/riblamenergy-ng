import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-payment-index',
  templateUrl: './payment-index.component.html',
  styleUrls: ['./payment-index.component.css']
})
export class PaymentIndexComponent implements OnInit {

  @Input() paymentList: Array<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
