import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cad-local-embarque',
  templateUrl: 'cad-local-embarque.html',
})
export class CadLocalEmbarquePage {

  ptEmbarque: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

}
