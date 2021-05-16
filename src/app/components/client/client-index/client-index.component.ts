import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-client-index',
  templateUrl: './client-index.component.html',
  styleUrls: ['./client-index.component.css']
})
export class ClientIndexComponent implements OnInit {

  @Input() clientList: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
