import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-cad-veiculo',
  templateUrl: 'cad-veiculo.html',
})
export class CadVeiculoPage {

  private cadForm: any = {};
  private usuario: any = {};
  private motorista: any = {};
  private veiculo: any = {};
  private endereco: any = {};
  private dados: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    
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
    this.motorista = this.navParams.get("motorista");
    this.endereco = this.navParams.get("endereco");
    this.veiculo.modelo = this.navParams.get("veiculo.modelo");
    this.veiculo.marca = this.navParams.get("veiculo.marca");
    this.veiculo.ano = this.navParams.get("veiculo.ano");
    this.veiculo.cor = this.navParams.get("veiculo.cor");
    this.veiculo.lugares = this.navParams.get("veiculo.lugares");
    this.veiculo.placa = this.navParams.get("veiculo.placa");
    //this.veiculo.renavam = this.navParams.get("veiculo.renavam");

  }

  log() {

    if (this.cadForm.valid) {
      this.dados.usuario = this.usuario;
      this.dados.motorista = this.motorista;
      this.dados.veiculo = this.veiculo;
      this.dados.endereco = this.endereco;
      console.log(this.dados);
    } else {
    }
  }

}
