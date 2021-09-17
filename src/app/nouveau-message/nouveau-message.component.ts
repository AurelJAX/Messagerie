import { Component, OnInit } from '@angular/core';
import {Message} from "../modules/Message";
import {MessageService} from "../services/message.service";
import {Personne} from "../modules/Personne";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-nouveau-message',
  templateUrl: './nouveau-message.component.html',
  styleUrls: ['./nouveau-message.component.css']
})
export class NouveauMessageComponent implements OnInit {

  constructor(private http : HttpClient) {

  }

  ngOnInit(): void {
  }

  public soummettreLeForm(message : Message) : Observable<any>{
       return this.http.post("http://10.21.0.254:8080/", message);
    }


}
