import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';

import { AutenticacaoProvider } from '../../providers/autenticacao/autenticacao';
import { CadUsuarioPage } from '../cad-usuario/cad-usuario';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private loginForm: any;
  usuario: any;
  private email: string;
  private senha: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public auth: AutenticacaoProvider) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
        Validators.required
      ])],
      senha: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.auth.getData().subscribe(
        data => this.usuario = data,
        err => console.log(err)
      );
      alert("Login Realizado");
    }
    
    console.log(this.email, this.senha);
  }

  pagCadastro() {
    this.navCtrl.push(CadUsuarioPage);
    //this.navCtrl.setRoot(CadUsuarioPage);
  }
}
