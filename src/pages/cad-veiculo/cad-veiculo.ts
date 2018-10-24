import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cad-veiculo',
  templateUrl: 'cad-veiculo.html',
})
export class CadVeiculoPage {

  private usuario: any = {};
  private motorista: any = {};
  private veiculo: any = {};
  private endereco: any = {};
  private data: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.usuario = this.navParams.get("usuario");
    this.motorista = this.navParams.get("motorista");
    this.endereco = this.navParams.get("endereco");
    this.veiculo.modelo = this.navParams.get("veiculo.modelo");
    this.veiculo.marca = this.navParams.get("veiculo.marca");
    this.veiculo.ano = this.navParams.get("veiculo.ano");
    this.veiculo.cor = this.navParams.get("veiculo.cor");
    this.veiculo.lugares = this.navParams.get("veiculo.lugares");
    this.veiculo.placa = this.navParams.get("veiculo.placa");
    this.veiculo.renavam = this.navParams.get("veiculo.renavam");

  }

  log() {
    this.data.usuario = this.usuario;
    this.data.motorista = this.motorista;
    this.data.veiculo = this.veiculo;
    this.data.endereco = this.endereco;
    console.log(this.data);
  }

}
