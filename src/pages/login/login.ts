import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';

import { CadUsuarioPage } from '../cad-usuario/cad-usuario';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private loginForm: any;
  private msgEmail: string;
  private msgSenha: string;
  private erroEmail: boolean = false;
  private erroSenha: boolean = false;
  private email: string;
  private senha: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
        Validators.required
      ])],
      senha: ['', Validators.required]
    });
  }

  login() {
    if (!this.loginForm.valid) {
      this.validar();
    } else {
      alert("Login Realizado");
    }
    
    console.log(this.email, this.senha);
  }

  validar() {
    let { email, senha } = this.loginForm.controls;

    if (!this.loginForm.valid) {
      if (!email.valid) {
        this.erroEmail = true;
        this.msgEmail = "Email inválido";
      } else {
        this.erroEmail = false;
        this.msgEmail = "";
      }
      if (!senha.valid) {
        this.erroSenha = true;
        this.msgSenha = "Senha inválida";
      } else {
        this.erroSenha = false;
        this.msgSenha = "";
      }
    } else {
      this.erroEmail = false;
      this.msgEmail = "";
      this.erroSenha = false;
      this.msgSenha = "";
    }
  }

  pagCadastro() {
    this.navCtrl.push(CadUsuarioPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
