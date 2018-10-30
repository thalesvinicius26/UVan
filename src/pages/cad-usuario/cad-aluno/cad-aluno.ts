import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

import { Usuario } from '../../../models/usuario';
import { CadastroProvider } from '../../../providers/cadastro/cadastro';
import { FaculdadeProvider } from '../../../providers/faculdade/faculdade';


@IonicPage()
@Component({
  selector: 'page-cad-aluno',
  templateUrl: 'cad-aluno.html',
})
export class CadAlunoPage {

  private cadForm: any = {};
  private usuario: Usuario = new Usuario();
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
    this.usuario = this.navParams.get("usuario");
  }

  getFaculdade() {
    this.listaFacul = this.faculdadeProvider.getListaFacul();
  }

  cadastrar() {
    if (this.cadForm.valid) {

      this.cadastroProvider.cadastraAluno(this.usuario);
    }
  }

  ionViewDidLoad() {
    this.getFaculdade();
  }

}
