export class Personne{
  private _id  : number;
  private _pseudo : string;

  constructor(id: number, pseudo: string) {
    this._id = id;
    this._pseudo = pseudo;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get pseudo(): string {
    return this._pseudo;
  }

  set pseudo(value: string) {
    this._pseudo = value;
  }
}
