import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { FaculdadeProvider } from '../../../../providers/faculdade/faculdade';
import { CadVeiculoPage } from '../../cad-veiculo/cad-veiculo';
import { Motorista } from '../../../../models/motorista';


@IonicPage()
@Component({
  selector: 'page-cad-motorista',
  templateUrl: 'cad-motorista.html',
})
export class CadMotoristaPage {

  private cadForm: FormGroup;
  private motorista: Motorista;
  private listaFacul: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public formBuilder: FormBuilder,
    private faculdadeProvider: FaculdadeProvider
    ) {

    this.cadForm = formBuilder.group({
      categoriaCNH: [null, Validators.compose([
        Validators.minLength(1),
        Validators.maxLength(2),
        Validators.required
      ])],
      numeroCnh: [null, Validators.compose([
        Validators.pattern(/^[0-9]{11}$/),
        Validators.required
      ])],
      validaCnh: [null, Validators.required],
      obsCnh: [null, Validators.nullValidator],
      regiao: [null, Validators.required],
      faculdade: [null, Validators.required]
    });
    this.motorista = this.navParams.get("usuario");
  }

  getFaculdade() {
    this.listaFacul = this.faculdadeProvider.getListaFacul();

    if (this.listaFacul == null) {
      alert("Erro ao buscar informações, tente novamente!")
    }
  }

  onSubmit() {

    if (this.cadForm.valid) {
      let loader = this.loadingCtrl.create({
        content: "Carregando"
      });

      loader.present();
      this.motorista = Object.assign({}, this.motorista, this.cadForm.value);

      setTimeout(() => {
        this.navCtrl.push(CadVeiculoPage, {
          usuario: this.motorista
        });
        loader.dismiss();
      }, 1000);
    }
  }

  ionViewDidLoad() {
    this.getFaculdade();
  }
}
