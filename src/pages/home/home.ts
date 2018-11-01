import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  presenca: boolean;

  constructor(public navCtrl: NavController) {
    this.presenca = true;
  }

  ionViewDidLoad() {
  }

  localMotorista() {
    
  }
}
