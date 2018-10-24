import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CadVeiculoPage } from '../cad-veiculo/cad-veiculo';


@IonicPage()
@Component({
  selector: 'page-cad-motorista',
  templateUrl: 'cad-motorista.html',
})
export class CadMotoristaPage {

  private usuario: any = {};
  private endereco: any = {};
  private motorista: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
    this.usuario = this.navParams.get("usuario");
    this.endereco = this.navParams.get("endereco");
    this.motorista.cat_cnh = this.navParams.get("motorista.cat_cnh");
    this.motorista.num_cnh = this.navParams.get("motorista.num_cnh");
    this.motorista.valid_cnh = this.navParams.get("motorista.valid_cnh");
    this.motorista.obs_cnh = this.navParams.get("motorista.obs_cnh");
    this.motorista.regiao = this.navParams.get("motorista.regiao");
    this.motorista.faculdade = this.navParams.get("motorista.faculdade");
    console.log(this.usuario);
  }

  proxForm() {
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
