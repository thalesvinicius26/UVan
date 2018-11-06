import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { Aluno } from '../../../../models/aluno';
import { CadastroProvider } from '../../../../providers/cadastro/cadastro';
import { FaculdadeProvider } from '../../../../providers/faculdade/faculdade';


@IonicPage()
@Component({
  selector: 'page-cad-aluno',
  templateUrl: 'cad-aluno.html',
})
export class CadAlunoPage {

  private cadForm: FormGroup;
  private aluno: Aluno;
  private listaFacul: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private cadastroProvider: CadastroProvider,
    private faculdadeProvider: FaculdadeProvider) {

    this.cadForm = formBuilder.group({
      faculdade: [null, Validators.required],
      hrEntrada: [null, Validators.required],
      hrSaida: [null, Validators.required],
    });
    this.aluno = this.navParams.get("usuario");
  }

  getFaculdade() {
    this.listaFacul = this.faculdadeProvider.getListaFacul();

    if (this.listaFacul == null) {
      alert("Erro ao buscar informações, tente novamente!")
    }
  }

  onSubmit() {
    if (this.cadForm.valid) {
      this.aluno = Object.assign({}, this.aluno, this.cadForm.value);
      this.cadastroProvider.cadastraAluno(this.aluno);
    }
  }

  ionViewDidLoad() {
    this.getFaculdade();
  }
}
