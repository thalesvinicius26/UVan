import { Component, OnInit } from '@angular/core';
import { GoogleMap, GoogleMaps, GoogleMapOptions, Marker, GoogleMapsEvent } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { LoadingController } from 'ionic-angular';


@Component({
  selector: 'mapa',
  templateUrl: 'mapa.html'
})
export class MapaComponent implements OnInit {

  mapa: GoogleMap;

  constructor(
    public geolocation: Geolocation,
    public loadingCtrl: LoadingController) {}

  async ngOnInit() {
    this.carregaMapa();
    /*
    this.getLocalizacao().subscribe(localizacao => {
      this.centralizarMapa(localizacao);
    });
    */
  }
  
  // createMap()
  private carregaMapa() {
    /*
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBKa18NEkKmGLnUeMLiyFgW90TChxu0Dko',
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBKa18NEkKmGLnUeMLiyFgW90TChxu0Dko'
    });

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
    */

    this.mapa = GoogleMaps.create('map_canvas');
/*
    let marker: Marker = this.mapa.addMarkerSync({
      title: 'Ionic',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: -23.689842,
        lng: -46.564850
      }
    });

    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('Clicked');
    });
  }
*/
/*
  private getLocalizacao() {
    let loader = this.loadingCtrl.create({
      content: "Carregando"
    });
    loader.present();

    let options = {timeout: 10000, enableHighAccuracy: true};
    let localizacaoObs = Observable.create(observable => {
      this.geolocation.getCurrentPosition(options)
        .then((resp) => {
          let lat = resp.coords.latitude;
          let long = resp.coords.longitude;

          let localizacao = new google.maps.LatLng(lat, long);
          observable.next(localizacao);

          setTimeout(() => {
            loader.dismiss();
          }, 1000);
        },
        (erro) => {
          console.log('Geolocation erro: ' + erro);

          setTimeout(() => {
            loader.dismiss();
          }, 1000);
        })
    })

    return localizacaoObs;
  }
  */
/*
  public centralizarMapa(localizacao) {

    if (localizacao) {
      this.mapa.panTo(localizacao);
    } else {
      this.getLocalizacao().subscribe(localizacaoAtual => {
        this.mapa.panTo(localizacaoAtual);
      });
    }
  }
*/
  }
}
