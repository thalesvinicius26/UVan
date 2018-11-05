import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

import { Aluno } from '../../../models/aluno';
import { CadastroProvider } from '../../../providers/cadastro/cadastro';
import { FaculdadeProvider } from '../../../providers/faculdade/faculdade';


@IonicPage()
@Component({
  selector: 'page-cad-aluno',
  templateUrl: 'cad-aluno.html',
})
export class CadAlunoPage {

  private cadForm: any = {};
  private aluno: Aluno;
  private listaFacul: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private cadastroProvider: CadastroProvider,
    private faculdadeProvider: FaculdadeProvider) {

    this.cadForm = formBuilder.group({
      faculdade: ['', Validators.required],
      hrEntrada: ['', Validators.required],
      hrSaida: ['', Validators.required],
    });
    this.aluno = this.navParams.get("usuario");
  }

  getFaculdade() {
    this.listaFacul = this.faculdadeProvider.getListaFacul();
  }

  cadastrar() {
    if (this.cadForm.valid) {

      this.cadastroProvider.cadastraAluno(this.aluno);
    }
  }

  ionViewDidLoad() {
    this.getFaculdade();
  }

}
