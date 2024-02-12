import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LottieModule } from "ngx-lottie";
import player from "lottie-web";
import { InicioComponent } from './inicio/inicio.component';
export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    LottieModule.forRoot({ player: playerFactory }),


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
