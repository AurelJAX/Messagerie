import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitreComponent } from './titre/titre.component';
import { PersonnesActivesComponent } from './personnes-actives/personnes-actives.component';
import { NouveauMessageComponent } from './nouveau-message/nouveau-message.component';
import { AnciensMessagesComponent } from './anciens-messages/anciens-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    TitreComponent,
    PersonnesActivesComponent,
    NouveauMessageComponent,
    AnciensMessagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
