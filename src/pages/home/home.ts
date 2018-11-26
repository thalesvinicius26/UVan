import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { GoogleMap, GoogleMaps, Marker, ILatLng } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { Observable } from 'rxjs/Observable';


declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mapa: GoogleMap;
  localMotorista: ILatLng;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  presenca: boolean = true;

  constructor(
    public navCtrl: NavController,
    public geolocation: Geolocation,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    this.localMotorista = { lat: -23.694450, lng: -46.565800 };

    this.carregaMapa();

    this.getLocalizacao().subscribe(localizacao => {
      this.centralizarMapa(localizacao);
      this.calculaRota(localizacao);
    });
  }

  private carregaMapa(): void {
    let cameraPos = {
      camera: {
        target: {
          lat: -23.694450,
          lng: -46.565800
        },
        zoom: 15
      }
    };

    this.mapa = GoogleMaps.create('map_canvas', cameraPos);
  }

  private getLocalizacao(): Observable<any> {
    let loader = this.loadingCtrl.create({
      content: "Carregando"
    });
    loader.present();

    let options = { timeout: 10000, enableHighAccuracy: true };
    let localizacaoObs = Observable.create(observable => {
      this.geolocation.getCurrentPosition(options)
        .then((resp) => {
          let localizacao = { lat: resp.coords.latitude, lng: resp.coords.longitude };
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

  private centralizarMapa(localizacao): void {
    if (localizacao) {
      this.mapa.setCameraTarget(localizacao);
    } else {
      this.getLocalizacao().subscribe(localizacaoAtual => {
        this.mapa.setCameraTarget(localizacaoAtual);
      });
    }

    this.mapa.addMarker({
      title: 'Você',
      icon: 'blue',
      // icon: 'assets/imgs/pin.png',
      animation: 'DROP',
      position: localizacao
    }).then((marker: Marker) => {
      marker.showInfoWindow();
    });
  }

  private calculaRota(localizacao) {

    if (this.presenca && localizacao && this.localMotorista) {
      this.directionsDisplay.setMap(this.mapa);
      let request = {
        // Pode ser uma coordenada (LatLng), uma string ou um lugar
        origin: this.localMotorista,
        destination: localizacao,
        travelMode: 'DRIVING'
      };

      this.directionsService.route({
        origin: localizacao,
        destination: this.localMotorista,
        travelMode: 'DRIVING'
      }, (resp, status) => {
        if (status === 'OK') {
          this.directionsDisplay.setDirections(resp);
        }
      });

      this.mapa.addPolyline({
        points: [localizacao, this.localMotorista],
        color: '#AA00FF',
        width: 10,
        geodesic: true
      });


    }
  }

  private getLocalMotorista(): void {
    if (this.presenca) {
      this.mapa.setCameraTarget(this.localMotorista);

      this.mapa.addMarker({
        title: 'Motorista',
        icon: 'red',
        // icon: 'assets/imgs/pin.png',
        animation: 'DROP',
        position: this.localMotorista
      }).then((marker: Marker) => {
        marker.showInfoWindow();
      });

    } else {
      alert("Seu status está como falta. Marque como presença para localização.");
    }
  }

  private confirmarFalta(): void {
    this.presenca = !this.presenca;
  }
}
