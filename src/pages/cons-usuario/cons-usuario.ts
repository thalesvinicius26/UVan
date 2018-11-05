import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginProvider } from '../../providers/login/login';


@IonicPage()
@Component({
  selector: 'page-cons-usuario',
  templateUrl: 'cons-usuario.html',
})
export class ConsUsuarioPage {

  private usuario: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private loginProvider: LoginProvider) {
    LoginProvider.response.subscribe(usuario => this.usuario = usuario);
  }

  ionViewDidLoad() {
    this.loginProvider.getAutenticado();
    //LoginProvider.response.subscribe(usuario => this.usuario = usuario);
    //console.log(this.usuario);
    //colocar aqui método de buscar infos
  }

}
