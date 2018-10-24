import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CadMotoristaPage } from '../cad-motorista/cad-motorista';

@IonicPage()
@Component({
  selector: 'page-cad-endereco',
  templateUrl: 'cad-endereco.html',
})
export class CadEnderecoPage {

  private usuario: any = {};
  private endereco: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
    this.usuario = this.navParams.get("usuario");
    this.endereco.cep = this.navParams.get("endereco.cep");
    this.endereco.uf = this.navParams.get("endereco.uf");
    this.endereco.cidade = this.navParams.get("endereco.cidade");
    this.endereco.bairro = this.navParams.get("endereco.bairro");
    this.endereco.rua = this.navParams.get("endereco.rua");
    this.endereco.numero = this.navParams.get("endereco.numero");
    this.endereco.complemento = this.navParams.get("endereco.complemento");
  }

  proxForm() {
    let loader = this.loadingCtrl.create({
      content: "Carregando"
    });

    loader.present();

    setTimeout(() => {
      this.navCtrl.push(CadMotoristaPage, {
        usuario: this.usuario,
        endereco: this.endereco
      });
      loader.dismiss();
    }, 1000);
  }

}
