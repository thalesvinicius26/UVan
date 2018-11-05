import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

import { CadastroProvider } from '../../providers/cadastro/cadastro';
import { Motorista } from '../../models/motorista';

@IonicPage()
@Component({
  selector: 'page-cad-veiculo',
  templateUrl: 'cad-veiculo.html',
})
export class CadVeiculoPage {

  private cadForm: any = {};
  private motorista: Motorista = new Motorista();

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, private cadastroProvider: CadastroProvider) {
    
    this.cadForm = formBuilder.group({
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      ano: ['', Validators.required],
      cor: ['', Validators.required],
      lugares: ['', Validators.required],
      placa: ['', Validators.compose([
        Validators.pattern(/^[a-zA-Z]{3}-[0-9]{4}$/),
        Validators.required
      ])],
      renavam: ['', Validators.compose([
        Validators.pattern(/^[0-9]{11}$/),
        Validators.required
      ])]
    });
    //this.motorista = this.navParams.get("usuario");
    this.motorista.veiculo.modelo = this.navParams.get("motorista.veiculo.modelo");
    this.motorista.veiculo.marca = this.navParams.get("motorista.veiculo.marca");
    this.motorista.veiculo.ano = this.navParams.get("motorista.veiculo.ano");
    this.motorista.veiculo.cor = this.navParams.get("motorista.veiculo.cor");
    this.motorista.veiculo.lugares = this.navParams.get("motorista.veiculo.lugares");
    this.motorista.veiculo.placa = this.navParams.get("motorista.veiculo.placa");
    this.motorista.veiculo.renavam = this.navParams.get("motorista.veiculo.renavam");

  }

  log() {

    if (this.cadForm.valid) {

      this.cadastroProvider.cadastroMotorista(this.motorista);
    }
  }

}
