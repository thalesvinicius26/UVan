import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { CadEnderecoPage } from '../cad-endereco/cad-endereco';

@IonicPage()
@Component({
  selector: 'page-cad-usuario',
  templateUrl: 'cad-usuario.html',
})
export class CadUsuarioPage {

  private cadForm: FormGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController) {
      
    this.cadForm = formBuilder.group({
      tipo: [null, Validators.required],
      eMail: [null, Validators.compose([
        Validators.minLength(5),
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
        Validators.required
      ])],
      senha: [null, Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(50),
        Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#!$%&*+-_])[a-zA-Z0-9 @#!$%&*+-_]*$/),
        Validators.required
      ])],
      senha2: [null, Validators.required],
      nome: [null, Validators.compose([
        Validators.minLength(10),
        Validators.maxLength(100),
        Validators.required
      ])],
      genero: [null, Validators.required],
      dataNascimento: [null, Validators.required],
      documento: [null, Validators.compose([
        Validators.minLength(14),
        Validators.maxLength(16),
        Validators.required
      ])],
      telefone: [null, Validators.compose([
        Validators.minLength(14),
        Validators.maxLength(15),
        Validators.required
      ])]
    });
  }

  senhasIguais() {
    if (this.cadForm.get('senha').value == this.cadForm.get('senha2').value) {
      return true;
    }
    return false;
  }

  onSubmit() {
    if (this.cadForm.valid) {
      /*this.auth.postData(this.cadForm.value).subscribe( 
        data => console.log(data),
        err => console.log(err)
      );*/
      //alert("Cadastrado!");

      if (this.senhasIguais()) {
        let loader = this.loadingCtrl.create({
          content: "Carregando"
        });
    
        loader.present();
    
        setTimeout(() => {
          this.navCtrl.push(CadEnderecoPage, {
            usuario: this.cadForm.value
          });
          loader.dismiss();
        }, 1000);

      } else {
        alert('Senhas inválidas, não são iguais');
      }

    }
  }
}
