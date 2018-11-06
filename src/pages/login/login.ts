import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';

//import { AutenticacaoProvider } from '../../providers/autenticacao/autenticacao';
import { CadUsuarioPage } from '../cadastro/cad-usuario/cad-usuario';
import { LoginProvider } from '../../providers/login/login';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private loginForm: any;
  private usuario: any = {};
  //private response: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private loginProvider: LoginProvider,
    public loadingCtrl: LoadingController) {
      
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
      if (this.loginProvider.getLogin(this.usuario)) {
        alert("Login Realizado");
        this.navCtrl.setRoot(HomePage);
      } else {
        alert("Falha no Login");
      }
    }
  }

  pagCadastro() {
      this.navCtrl.push(CadUsuarioPage);
  }
  
  ionViewDidLoad() {
    /* exemplo de conexão
    this.auth.getData().subscribe(
    (data: Config) => this.response = {...data},
    err => console.log(err)
  ); 
  */
  }
  
}
