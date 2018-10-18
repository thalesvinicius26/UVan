import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-cad-usuario',
  templateUrl: 'cad-usuario.html',
})
export class CadUsuarioPage {

  private cadForm: any;
  private dtNascimento;
  private genero;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.cadForm = formBuilder.group({
      tipo: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.required])],
      nome: ['', Validators.compose([
        Validators.minLength(10),
        Validators.maxLength(100),
        Validators.required
      ])],
      genero: ['', Validators.required],
      dtNascimento: ['', Validators.required]
    });
  }

  teste() {
    console.log(this.genero);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CadUsuarioPage');
  }

}
