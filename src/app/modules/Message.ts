import {Personne} from "./Personne";

export class Message{
  auteur : Personne;
  dateMessage : Date;
  textMessage : string;



  constructor(auteur: Personne, dateMessage: Date, textMessage: string) {
    this.auteur = auteur;
    this.dateMessage = dateMessage;
    this.textMessage = textMessage;

  }



}
