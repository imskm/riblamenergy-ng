import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClientService } from '../../../services/client.service';
import { MessageService } from '../../../services/message.service';
import { ClientModel } from '../../../models/client.model';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {

  client = new ClientModel("", "", null);

  constructor(
  	private clientService: ClientService,
  	private msgService: MessageService,
  	private router: Router,
  ) { }

  ngOnInit(): void {
  }

  create() {
  	this.clientService.create(this.client)
  		.subscribe((res) => {
	        this.msgService.set("Client created successfully");
	        this.router.navigate(['/clients']);
  		});
  }

}
