import { Component, OnInit } from '@angular/core';
import {Message} from "../modules/Message";

import {MessageService} from "../services/message.service";

@Component({
  selector: 'app-anciens-messages',
  templateUrl: './anciens-messages.component.html',
  styleUrls: ['./anciens-messages.component.css']
})
export class AnciensMessagesComponent implements OnInit {

  tabMessage : Array<Message>;

  constructor(private svc: MessageService) {
    this.tabMessage = [];
    this.svc.appelMessage().subscribe(
      (e) => {this.tabMessage = e; console.log(e)},
      ()=> console.log("noooooooooooooooooon")
    );
  }

  ngOnInit(): void {
  }

}
