import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CadUsuarioPage } from '../cad-usuario/cad-usuario';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private email: string;
  private senha: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  login() {
    console.log(this.email, this.senha);
  }

  pagCadastro() {
    this.navCtrl.push(CadUsuarioPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
