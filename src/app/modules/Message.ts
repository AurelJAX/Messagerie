import {Personne} from "./Personne";

export class Message{
  private _id : number;
  private _message : string;
  private _personne : Personne;
  private _date : Date;

  constructor(id: number, message: string, personne: Personne, date: Date) {
    this._id = id;
    this._message = message;
    this._personne = personne;
    this._date = date;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }

  get personne(): Personne {
    return this._personne;
  }

  set personne(value: Personne) {
    this._personne = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

}
