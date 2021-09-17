import { Component, OnInit } from '@angular/core';
import {Personne} from "../modules/Personne";
import {Message} from "../modules/Message";
import {MessageService} from "../services/message.service";

@Component({
  selector: 'app-personnes-actives',
  templateUrl: './personnes-actives.component.html',
  styleUrls: ['./personnes-actives.component.css']
})
export class PersonnesActivesComponent implements OnInit {

  tabPersonne : Array<Personne>;
  tabMessage : Array<Message>;

  constructor(private svc: MessageService) {
    this.tabPersonne = [];
    this.tabMessage = [];
    this.tabMessage.forEach((t) => {
      this.tabPersonne.push(t.personne);
    })


  }

  ngOnInit(): void {
  }

}
