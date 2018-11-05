import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

import { CadMotoristaPage } from '../cad-usuario/cad-motorista/cad-motorista';
import { Usuario } from '../../models/usuario';
import { CadAlunoPage } from '../cad-usuario/cad-aluno/cad-aluno';

@IonicPage()
@Component({
  selector: 'page-cad-endereco',
  templateUrl: 'cad-endereco.html',
})
export class CadEnderecoPage {

  private cadForm: any = {};
  private usuario: Usuario = new Usuario();

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
    this.usuario.endereco.cep = this.navParams.get("usuario.endereco.cep");
    this.usuario.endereco.estado = this.navParams.get("usuario.endereco.estado");
    this.usuario.endereco.cidade = this.navParams.get("usuario.endereco.cidade");
    this.usuario.endereco.bairro = this.navParams.get("usuario.endereco.bairro");
    this.usuario.endereco.rua = this.navParams.get("usuario.endereco.rua");
    this.usuario.endereco.numeroDaCasa = this.navParams.get("usuario.endereco.numeroDaCasa");
    this.usuario.endereco.complemento = this.navParams.get("usuario.endereco.complemento");
  }

  getEndereco() {

  }

  proxForm() {

    if (this.cadForm.valid) {
      let loader = this.loadingCtrl.create({
        content: "Carregando"
      });

      loader.present();

      if (this.usuario.tipo == "C") {
        setTimeout(() => {
          this.navCtrl.push(CadMotoristaPage, {
            usuario: this.usuario
          });
          loader.dismiss();
        }, 1000);

      } else {
        setTimeout(() => {
          this.navCtrl.push(CadAlunoPage, {
            usuario: this.usuario
          });
          loader.dismiss();
        }, 1000);
      }
    }
  }
}
