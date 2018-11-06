import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  presenca: boolean = true;

  constructor(public navCtrl: NavController) {
    this.presenca = true;
  }

  ionViewDidLoad() {
  }

  localMotorista() {
  }

  confirmarFalta() {
    this.presenca = !this.presenca;
  }
}
