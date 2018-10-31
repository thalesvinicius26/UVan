import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('mapa') mapaRef: ElementRef;
  mapa;

  constructor(public navCtrl: NavController, public geolocation: Geolocation) {
  }

  private carregaMapa() {
    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let options = {
        center: latLng,
        zoom: 15
      };
      this.mapa = new google.maps.Map(this.mapaRef.nativeElement, options);

    }, (erro) => {
      console.log(erro);
    });
  }

  ionViewDidLoad() {
    this.carregaMapa();
  }
}
