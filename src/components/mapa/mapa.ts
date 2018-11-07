import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { Observable } from 'rxjs/Observable';
import { LoadingController } from 'ionic-angular';

//declare var google;

@Component({
  selector: 'mapa',
  templateUrl: 'mapa.html'
})
export class MapaComponent implements OnInit {

  @ViewChild('mapa') mapaRef: ElementRef;
  @Input() presenca: boolean;
  public mapa: google.maps.Map;
  public mapIdle: boolean;

  constructor(public geolocation: Geolocation,
    public loadingCtrl: LoadingController) {}

  ngOnInit() {
    this.mapa = this.carregaMapa();
    this.addMapEventListeners();
    
    this.getLocalizacao().subscribe(localizacao => {
      this.centralizarMapa(localizacao);
    });
  }
    
  private carregaMapa(localizacao = new google.maps.LatLng(-23.550520, -46.633308)) {
    let options = {
      center: localizacao,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
    };

    let mapa = new google.maps.Map(this.mapaRef.nativeElement, options);

    return mapa;
  }


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


  private addMapEventListeners() {
    google.maps.event.addListener(this.mapa, 'dragstart', () => {
      this.mapIdle = false;
    })
    google.maps.event.addListener(this.mapa, 'idle', () => {
      this.mapIdle = true;
    })
  }

  public centralizarMapa(localizacao) {

    if (localizacao) {
      this.mapa.panTo(localizacao);
    } else {
      this.getLocalizacao().subscribe(localizacaoAtual => {
        this.mapa.panTo(localizacaoAtual);
      });
    }
  }

}
