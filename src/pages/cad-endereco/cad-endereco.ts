import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CadMotoristaPage } from '../cad-motorista/cad-motorista';
import { FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-cad-endereco',
  templateUrl: 'cad-endereco.html',
})
export class CadEnderecoPage {

  private cadForm: any = {};
  private usuario: any = {};
  private endereco: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public formBuilder: FormBuilder) {

    this.cadForm = formBuilder.group({
      cep: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^[0-9]{5}-[0-9]{3}$/)
      ])],
      uf: ['', Validators.required],
      cidade: ['', Validators.required],
      bairro: ['', Validators.required],
      rua: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: ['', Validators.nullValidator]
    });
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

    if (this.cadForm.valid) {
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
}
