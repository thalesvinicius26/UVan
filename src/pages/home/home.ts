import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginProvider } from '../../providers/login/login';
//import { Usuario } from '../../models/usuario';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
//AIzaSyDpXwXu0JLTljo3ppsP_S6fkzN_FchzbRM

  //private usuario: Usuario = new Usuario();

  // mapa: string;
  constructor(public navCtrl: NavController) {
    LoginProvider.response.subscribe( data => console.log(data)); //trabalhar com emissor 
    
  //  this.mapa = this.getMapa();
  }
/*
  private getEndereco() {
    return 'R. Francisco Bautista, 300 - Anchieta, São Paulo - SP';
  }

  private getMapa() {
    return 'https://maps.googleapis.com/maps/api/staticmap?zoom=15&size=400x400&markers=color:red|' + this.getEndereco() + '&key=AIzaSyDpXwXu0JLTljo3ppsP_S6fkzN_FchzbRM';
  } */

  ionViewDidLoad() {
    LoginProvider.response.subscribe( data => console.log(data)); //trabalhar com emissor 
  }
}
