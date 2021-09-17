import { Injectable } from '@angular/core';
import {Message} from "../modules/Message";
import {Personne} from "../modules/Personne";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChuckService {


  constructor(private http : HttpClient) { //Injection de dépendance

  }

  public appelAPI() : Observable<any>{
    return this.http.get("https://api.chucknorris.io/jokes/random");
  }


  /*get tabMessage(): Array<Message> {
    return this._tabMessage;
  }

  set tabMessage(value: Array<Message>) {
    this._tabMessage = value;
  }*/
}
