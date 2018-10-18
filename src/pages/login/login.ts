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
      email: ['', Validators.required],
      senha: ['', Validators.compose([
        Validators.minLength(6), 
        Validators.maxLength(30), 
        Validators.required])]
    });
  }

  login() {
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
        this.msgSenha = "A senha precisa ter de 6 a 8 caracteres";
      } else {
        this.erroSenha = false;
        this.msgSenha = "";
      }
    } else {
      alert("Login Realizado");
    }
    
    console.log(this.email, this.senha);
  }

  validar(input: string) {
    let { email, senha } = this.loginForm.controls;

    if (!this.loginForm.valid) {
      if (input == "email") {
        if (!email.valid) {
          this.erroEmail = true;
          this.msgEmail = "Email inválido";
        } else {
          this.erroEmail = false;
          this.msgEmail = "";
        }
      }

      if (input == "senha") {
        if (!senha.valid) {
          this.erroSenha = true;
          this.msgSenha = "A senha precisa ter de 6 a 30 caracteres";
        } else {
          this.erroSenha = false;
          this.msgSenha = "";
        }
      }
    }
  }

  pagCadastro() {
    this.navCtrl.push(CadUsuarioPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
