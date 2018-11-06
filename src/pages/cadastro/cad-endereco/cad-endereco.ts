import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { CadMotoristaPage } from '../cad-usuario/cad-motorista/cad-motorista';
import { Usuario } from '../../../models/usuario';
import { CadAlunoPage } from '../cad-usuario/cad-aluno/cad-aluno';
import { CepProvider } from '../../../providers/cep/cep';

@IonicPage()
@Component({
  selector: 'page-cad-endereco',
  templateUrl: 'cad-endereco.html',
})
export class CadEnderecoPage {

  private cadForm: FormGroup;
  private usuario: Usuario;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public formBuilder: FormBuilder,
    public cepProvider: CepProvider) {

    this.cadForm = this.formBuilder.group({
      endereco: this.formBuilder.group({
        cep: [null, Validators.compose([
          Validators.required,
          Validators.pattern(/^[0-9]{5}-[0-9]{3}$/)
        ])],
        estado: [null, Validators.required],
        cidade: [null, Validators.required],
        bairro: [null, Validators.required],
        rua: [null, Validators.required],
        numeroDaCasa: [null, Validators.required],
        complemento: [null]
      })
    });
    this.usuario = this.navParams.get('usuario');
  }

  getEndereco() {
    if (this.cadForm.get('endereco.cep').valid) {
      this.cepProvider.consultaCEP(this.cadForm.get('endereco.cep').value).subscribe(
        dados => this.populaDadosForm(dados),
        (erro: any) => alert(erro));
    }
  }

  populaDadosForm(dados) {
    this.cadForm.patchValue({
      endereco: {
        cep: dados.cep,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  onSubmit() {

    if (this.cadForm.valid) {
      let loader = this.loadingCtrl.create({
        content: "Carregando"
      });

      loader.present();

      this.usuario = Object.assign({}, this.cadForm.value, this.usuario);

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
