import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../../models/usuario';


@IonicPage()
@Component({
  selector: 'page-cad-aluno',
  templateUrl: 'cad-aluno.html',
})
export class CadAlunoPage {

  private cadForm: any = {};
  private usuario: Usuario = new Usuario();
  private aluno: any = {};
  private endereco: any = {};
  private dadosAluno: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.cadForm = formBuilder.group({
      faculdade: ['', Validators.required],
      hrEntrada: ['', Validators.required],
      hrSaida: ['', Validators.required],
    });
    this.usuario = this.navParams.get("usuario");
    this.endereco = this.navParams.get("endereco");
  }

  cadastrar() {
    if (this.cadForm.valid) {
      this.dadosAluno.usuario = this.usuario;
      this.dadosAluno.aluno = this.aluno;
      this.dadosAluno.endereco = this.endereco;
      console.log(this.dadosAluno);
    } else {

    }
  }

}
