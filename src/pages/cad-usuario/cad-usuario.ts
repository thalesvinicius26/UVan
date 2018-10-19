import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-cad-usuario',
  templateUrl: 'cad-usuario.html',
})
export class CadUsuarioPage {

  private cadForm: any;
  private tipoUsuario: string;
  private email: string;
  private senha: string;
  private senha2: string;
  private nome: string;
  private genero: string;
  private dtNascimento: string;
  private documento: string;
  private telefone: string;

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
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
        //Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$/),
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
      documento: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }

  senhasIguais() {
    if (this.senha != this.senha2) {
      this.msgSenha = "As senhas estão diferentes";
      this.erroSenha = true;
    } else {
      this.msgSenha = "";
      this.erroSenha = false;
    }
  }

  validar(input: string) {
    let { tipoUsuario, email, senha, nome, genero, dtNascimento, documento, telefone } = this.cadForm.controls;

    if (!this.cadForm.valid) {
      
      if (input == "tipoUsuario") {
        if (!tipoUsuario.valid) {
        } else {
        }
      } else if (input == "email") {
        if (!email.valid) {
        } else {
        }
      } else if (input == "senha") {
        if (!senha.valid) {
          this.erroSenha = true;
          this.msgSenha = "Senha inválida. No mínimo 6 dígitos com letras(maiúsculas e minúsculas), números e caracteres especiais(@#!$%&*+_-)";
        } else {
          this.erroSenha = false;
          this.msgSenha = "";
        }
      } else if (input == "nome") {
        if (!nome.valid) {
        } else {
        }
      } else if (input == "genero") {
        if (!genero.valid) {
        } else {
        }
      } else if (input == "dtNascimento") {
        if (!dtNascimento.valid) {
        } else {
        }
      } else if (input == "documento") {
        if (!documento.valid) {
        } else {
        }
      } else if (input == "telefone") {
        if (!telefone.valid) {
        } else {
        }
      }
    } else {
      this.erroSenha = false;
      this.msgSenha = "";
    }
  }

  teste() {
    console.log(this.genero);
  }

  cadastrar() {
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
        this.msgNome = "Informe seu nome completo";
      } else {
        this.erroNome = false;
        this.msgNome = "";
      }
      if (!genero.valid) {
        this.erroGenero = true;
        this.msgGenero = "Selecione o seu gênero";
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
      alert("Cadastrado!");
    }
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CadUsuarioPage');
  }

}
