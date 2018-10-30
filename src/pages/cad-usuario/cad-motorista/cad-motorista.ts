import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

import { FaculdadeProvider } from '../../../providers/faculdade/faculdade';
import { CadVeiculoPage } from '../../cad-veiculo/cad-veiculo';
import { Usuario } from '../../../models/usuario';


@IonicPage()
@Component({
  selector: 'page-cad-motorista',
  templateUrl: 'cad-motorista.html',
})
export class CadMotoristaPage {

  private cadForm: any = {};
  private usuario: Usuario = new Usuario();
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
    this.usuario = this.navParams.get("usuario");
    this.usuario.motorista.cat_cnh = this.navParams.get("motorista.cat_cnh");
    this.usuario.motorista.num_cnh = this.navParams.get("motorista.num_cnh");
    this.usuario.motorista.validade_cnh = this.navParams.get("motorista.valid_cnh");
    this.usuario.motorista.obs_cnh = this.navParams.get("motorista.obs_cnh");
    this.usuario.motorista.regiao = this.navParams.get("motorista.regiao");
    this.usuario.motorista.faculdade = this.navParams.get("faculdade");
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
          usuario: this.usuario
        });
        loader.dismiss();
      }, 1000);
    }
  }

  ionViewDidLoad() {
    this.getFaculdade();
  }

}
