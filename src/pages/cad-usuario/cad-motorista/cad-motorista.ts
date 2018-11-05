import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

import { FaculdadeProvider } from '../../../providers/faculdade/faculdade';
import { CadVeiculoPage } from '../../cad-veiculo/cad-veiculo';
import { Motorista } from '../../../models/motorista';


@IonicPage()
@Component({
  selector: 'page-cad-motorista',
  templateUrl: 'cad-motorista.html',
})
export class CadMotoristaPage {

  private cadForm: any = {};
  private motorista: Motorista = new Motorista();
  private listaFacul: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public formBuilder: FormBuilder,
    private faculdadeProvider: FaculdadeProvider
    ) {

    this.cadForm = formBuilder.group({
      cat_cnh: ['', Validators.compose([
        Validators.minLength(1),
        Validators.maxLength(2),
        Validators.required
      ])],
      num_cnh: ['', Validators.compose([
        Validators.pattern(/^[0-9]{11}$/),
        Validators.required
      ])],
      valid_cnh: ['', Validators.required],
      obs_cnh: ['', Validators.nullValidator],
      regiao: ['', Validators.required],
      faculdade: ['', Validators.required]
    });
    this.motorista = this.navParams.get("usuario");
    this.motorista.categoriaCNH = this.navParams.get("motorista.categoriaCNH");
    this.motorista.numeroCnh = this.navParams.get("motorista.numeroCnh");
    this.motorista.validaCnh = this.navParams.get("motorista.validaCnh");
    this.motorista.obsCnh = this.navParams.get("motorista.obsCnh");
    this.motorista.regiao = this.navParams.get("motorista.regiao");
    this.motorista.faculdade = this.navParams.get("motorista.faculdade");
  }

  getFaculdade() {
    this.listaFacul = this.faculdadeProvider.getListaFacul();
  }

  proxForm() {

    if (this.cadForm.valid) {
      let loader = this.loadingCtrl.create({
        content: "Carregando"
      });

      loader.present();

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
