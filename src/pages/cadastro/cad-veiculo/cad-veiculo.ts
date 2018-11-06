import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

import { CadastroProvider } from '../../../providers/cadastro/cadastro';
import { Motorista } from '../../../models/motorista';

@IonicPage()
@Component({
  selector: 'page-cad-veiculo',
  templateUrl: 'cad-veiculo.html',
})
export class CadVeiculoPage {

  private cadForm: any = {};
  private motorista: Motorista;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, private cadastroProvider: CadastroProvider) {
    
    this.cadForm = formBuilder.group({
      veiculo: this.formBuilder.group({
        marca: [null, Validators.required],
        modelo: [null, Validators.required],
        ano: [null, Validators.required],
        cor: [null, Validators.required],
        lugares: [null, Validators.required],
        placa: [null, Validators.compose([
          Validators.pattern(/^[a-zA-Z]{3}-[0-9]{4}$/),
          Validators.required
        ])],
        renavam: [null, Validators.compose([
          Validators.pattern(/^[0-9]{11}$/),
          Validators.required
        ])]
      })
    });
    this.motorista = this.navParams.get("usuario");

  }

  onSubmit() {
    if (this.cadForm.valid) {
      this.motorista = Object.assign({}, this.motorista, this.cadForm.value);
      this.cadastroProvider.cadastroMotorista(this.motorista);
    }
  }

}
