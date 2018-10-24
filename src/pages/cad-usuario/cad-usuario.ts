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

  private nome: string;
  private erroTipoUsuario: boolean = false;
  private erroEmail: boolean = false;
  private erroSenha: boolean = false;
  private erroNome: boolean = false;
  private erroGenero: boolean = false;
  private erroDtNasc: boolean = false;
  private erroDocumento: boolean = false;
  private erroTelefone: boolean = false;
  private msgTipoUsuario: string;
  private msgEmail: string;
  private msgSenha: string;
  private msgNome: string;
  private msgGenero: string;
  private msgDtNasc: string;
  private msgDocumento: string;
  private msgTelefone: string;

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
        Validators.maxLength(30),
        Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#!$%&*+-_])[a-zA-Z0-9 @#!$%&*+-_]*$/),
        Validators.required
      ])],
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
    if (!this.cadForm.valid) {
      this.validar();
    } else {
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

  senhasIguais() {
    if (this.usuario.senha != this.usuario.senha2) {
      this.msgSenha = "As senhas estão diferentes";
      this.erroSenha = true;
    } else {
      this.msgSenha = "";
      this.erroSenha = false;
    }
  }

  validar() {
    let { tipoUsuario, email, senha, nome, genero, dtNascimento, documento, telefone } = this.cadForm.controls;

    if (!this.cadForm.valid) {
      if (!tipoUsuario.valid) {
        this.erroTipoUsuario = true;
        this.msgTipoUsuario = "Selecione o tipo de usuário";
      } else {
        this.erroTipoUsuario = false;
        this.msgTipoUsuario = "";
      }
      if (!email.valid) {
        
        this.erroEmail = true;
        this.msgEmail = "Email inválido";
      } else {
        this.erroEmail = false;
        this.msgEmail = "";
      }
      if (!senha.valid) {
        this.erroSenha = true;
        this.msgSenha = "Senha inválida. No mínimo 6 dígitos com letras(maiúsculas e minúsculas), números e caracteres especiais(@#!$%&*+_-)";
      } else {
        this.erroSenha = false;
        this.msgSenha = "";
      }
      if (!nome.valid) {
        this.erroNome = true;
        this.msgNome = "Informe o seu nome completo";
      } else {
        this.erroNome = false;
        this.msgNome = "";
      }
      if (!genero.valid) {
        this.erroGenero = true;
        this.msgGenero = "Selecione seu gênero";
      } else {
        this.erroGenero = false;
        this.msgGenero = "";
      }
      if (!dtNascimento.valid) {
        this.erroDtNasc = true;
        this.msgDtNasc = "Informe sua data de nascimento";
      } else {
        this.erroDtNasc = false;
        this.msgDtNasc = "";
      }
      if (!documento.valid) {
        this.erroDocumento = true;
        this.msgDocumento = "CPF/CNPJ inválido";
      } else {
        this.erroDocumento = false;
        this.msgDocumento = "";
      }
      if (!telefone.valid) {
        this.erroTelefone = true;
        this.msgTelefone = "Telefone inválido";
      } else {
        this.erroTelefone = false;
        this.msgTelefone = "";
      }
    } else {
      this.erroTipoUsuario = false;
      this.msgTipoUsuario = "";
      this.erroEmail = false;
      this.msgEmail = "";
      this.erroSenha = false;
      this.msgSenha = "";
      this.erroNome = false;
      this.msgNome = "";
      this.erroGenero = false;
      this.msgGenero = "";
      this.erroDtNasc = false;
      this.msgDtNasc = "";
      this.erroDocumento = false;
      this.msgDocumento = "";
      this.erroTelefone = false;
      this.msgTelefone = "";
    }
  }

}
