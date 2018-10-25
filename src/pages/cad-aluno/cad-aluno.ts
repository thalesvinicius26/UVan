import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-cad-aluno',
  templateUrl: 'cad-aluno.html',
})
export class CadAlunoPage {

  private cadForm: any = {};
  private usuario: any = {};
  private aluno: any = {};
  private endereco: any = {};
  private dados: any = {};

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
      this.dados.usuario = this.usuario;
      this.dados.aluno = this.aluno;
      this.dados.endereco = this.endereco;
      console.log(this.dados);
    } else {

    }
  }

}
