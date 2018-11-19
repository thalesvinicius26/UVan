import { Component, OnInit } from '@angular/core';
import { GoogleMap, GoogleMaps, Environment } from '@ionic-native/google-maps';
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
*/
    this.mapa = GoogleMaps.create('map_canvas');
  }

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
