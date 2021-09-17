import { Injectable } from '@angular/core';
import {Message} from "../modules/Message";
import {Personne} from "../modules/Personne";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private _tabMessage : Array<Message>;
  private _tabPersonne : Array<Personne>;

  constructor(private http : HttpClient) { //Injection de dépendance
    this._tabMessage = [];
    this._tabPersonne = [];
  }

  public appelMessage() : Observable<any>{
    return this.http.get("http://10.21.0.254:8080/");
  }

  public envoieMessage(message : Message) : Observable<any>{
    return this.http.post("http://10.21.0.254:8080/", message);
  }

  get tabMessage(): Array<Message> {
    return this._tabMessage;
  }

  set tabMessage(value: Array<Message>) {
    this._tabMessage = value;
  }

  get tabPersonne(): Array<Personne> {
    for (let chaqueMessage of this._tabMessage){
      if (this._tabPersonne.indexOf(chaqueMessage.auteur) === -1) {
        this._tabPersonne.push(chaqueMessage.auteur);
      }
    }
    return this._tabPersonne;
  }

  set tabPersonne(value: Array<Personne>) {
    this._tabPersonne = value;
  }
}
