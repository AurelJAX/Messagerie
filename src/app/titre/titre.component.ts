import { Component, OnInit } from '@angular/core';
import {MessageService} from "../services/message.service";
import {ChuckService} from "../services/chuck.service";

@Component({
  selector: 'app-titre',
  templateUrl: './titre.component.html',
  styleUrls: ['./titre.component.css']
})
export class TitreComponent implements OnInit {

  blague : String;

  constructor(private chuckService : ChuckService) {
    this.blague = "";
    this.chuckService.appelAPI().subscribe(
      (donnees) => this.blague = donnees.value,
      () => console.log("Ca se passe mal")

    );
  }

  ngOnInit(): void {
  }

}
