import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleMap, GoogleMaps, GoogleMapOptions, Marker } from '@ionic-native/google-maps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mapa: GoogleMap;
  presenca: boolean = true;

  constructor(public navCtrl: NavController) {
    this.presenca = true;
  }

  ionViewDidLoad() {
    this.carregaMapa();
  }

  carregaMapa() {
    
    let options: GoogleMapOptions = {
      camera: {
        target: {
          lat: -23.689842,
          long: -46.564850
        },
        zoom: 15,
        tilt: 30
      }
    };

    this.mapa = GoogleMaps.create('map_canvas');

    this.mapa.addMarker({
      title: 'Ionic',
      icon: 'blue',
      // icon: 'assets/imgs/pin.png',
      animation: 'DROP',
      position: {
        lat: -23.689842,
        lng: -46.564850
      }
    }).then((marker: Marker) => {
      marker.showInfoWindow();
    });
  }

  localMotorista() {
  }

  confirmarFalta() {
    this.presenca = !this.presenca;
  }
}
