import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

import { AutenticacaoProvider } from '../../providers/autenticacao/autenticacao';
import { CadEnderecoPage } from '../cad-endereco/cad-endereco';

@IonicPage()
@Component({
  selector: 'page-cad-usuario',
  templateUrl: 'cad-usuario.html',
})
export class CadUsuarioPage {

  private cadForm: any;
  private usuario: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public auth: AutenticacaoProvider, public loadingCtrl: LoadingController) {
    this.cadForm = formBuilder.group({
      tipoUsuario: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.minLength(5),
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
        Validators.required
      ])],
      senha: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(50),
        Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#!$%&*+-_])[a-zA-Z0-9 @#!$%&*+-_]*$/),
        Validators.required
      ])],
      senha2: ['', Validators.required],
      nome: ['', Validators.compose([
        Validators.minLength(10),
        Validators.maxLength(100),
        Validators.required
      ])],
      genero: ['', Validators.required],
      dtNascimento: ['', Validators.required],
      documento: ['', Validators.compose([
        Validators.minLength(14),
        Validators.maxLength(16),
        Validators.required
      ])],
      telefone: ['', Validators.compose([
        Validators.minLength(14),
        Validators.maxLength(15),
        Validators.required
      ])]
    });

    this.usuario.tipo = this.navParams.get("usuario.tipo");
    this.usuario.email = this.navParams.get("usuario.email");
    this.usuario.senha = this.navParams.get("usuario.senha");
    this.usuario.senha2 = this.navParams.get("usuario.senha2");
    this.usuario.nome = this.navParams.get("usuario.nome");
    this.usuario.genero = this.navParams.get("usuario.genero");
    this.usuario.dtNascimento = this.navParams.get("usuario.dtNascimento");
    this.usuario.documento = this.navParams.get("usuario.documento");
    this.usuario.telefone = this.navParams.get("usuario.telefone");
  }

  proxForm() {
    if (this.cadForm.valid) {
      /*this.auth.postData(this.cadForm.value).subscribe( 
        data => console.log(data),
        err => console.log(err)
      );*/
      //alert("Cadastrado!");
      //aqui fazer nav push para outra tela de acordo com o tipo do usuário
      let loader = this.loadingCtrl.create({
        content: "Carregando"
      });
  
      loader.present();
  
      setTimeout(() => {
        this.navCtrl.push(CadEnderecoPage, {
          usuario: this.usuario
        });
        loader.dismiss();
      }, 1000);
    }
  }
}
