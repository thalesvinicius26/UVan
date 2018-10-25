import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CadVeiculoPage } from '../cad-veiculo/cad-veiculo';
import { FormBuilder, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-cad-motorista',
  templateUrl: 'cad-motorista.html',
})
export class CadMotoristaPage {

  private cadForm: any = {};
  private usuario: any = {};
  private endereco: any = {};
  private motorista: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public formBuilder: FormBuilder) {

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
    this.endereco = this.navParams.get("endereco");
    this.motorista.cat_cnh = this.navParams.get("motorista.cat_cnh");
    this.motorista.num_cnh = this.navParams.get("motorista.num_cnh");
    this.motorista.valid_cnh = this.navParams.get("motorista.valid_cnh");
    this.motorista.obs_cnh = this.navParams.get("motorista.obs_cnh");
    this.motorista.regiao = this.navParams.get("motorista.regiao");
    this.motorista.faculdade = this.navParams.get("motorista.faculdade");
  }

  proxForm() {

    if (this.cadForm.valid) {
      let loader = this.loadingCtrl.create({
        content: "Carregando"
      });

      loader.present();

      setTimeout(() => {
        this.navCtrl.push(CadVeiculoPage, {
          usuario: this.usuario,
          endereco: this.endereco,
          motorista: this.motorista
        });
        loader.dismiss();
      }, 1000);
    }
  }

}
