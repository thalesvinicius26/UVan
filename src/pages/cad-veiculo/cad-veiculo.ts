import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

import { Usuario } from '../../models/usuario';
import { CadastroProvider } from '../../providers/cadastro/cadastro';

@IonicPage()
@Component({
  selector: 'page-cad-veiculo',
  templateUrl: 'cad-veiculo.html',
})
export class CadVeiculoPage {

  private cadForm: any = {};
  private usuario: Usuario = new Usuario();

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
    this.usuario = this.navParams.get("usuario");
    this.usuario.motorista.veiculo.modelo = this.navParams.get("veiculo.modelo");
    this.usuario.motorista.veiculo.marca = this.navParams.get("veiculo.marca");
    this.usuario.motorista.veiculo.ano = this.navParams.get("veiculo.ano");
    this.usuario.motorista.veiculo.cor = this.navParams.get("veiculo.cor");
    this.usuario.motorista.veiculo.lugares = this.navParams.get("veiculo.lugares");
    this.usuario.motorista.veiculo.placa = this.navParams.get("veiculo.placa");
    this.usuario.motorista.veiculo.renavam = this.navParams.get("veiculo.renavam");

  }

  log() {

    if (this.cadForm.valid) {

      this.cadastroProvider.cadastroMotorista(this.usuario);
    }
  }

}
