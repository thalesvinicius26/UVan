import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { Observable } from 'rxjs/Observable';
import { LoadingController } from 'ionic-angular';

declare var google;

@Component({
  selector: 'mapa',
  templateUrl: 'mapa.html'
})
export class MapaComponent implements OnInit {

  @ViewChild('mapa') mapaRef: ElementRef;
  @Input() presenca: boolean;
  public mapa;

  constructor(public geolocation: Geolocation,
    public loadingCtrl: LoadingController) {}

  ngOnInit() {
    this.mapa = this.carregaMapa();
    let loader = this.loadingCtrl.create({
      content: "Carregando"
    });
    loader.present();

    setTimeout(() => {
      this.getLocalizacao().subscribe(location => {
        this.mapa.panTo(location);
      });
      loader.dismiss();
    }, 1000);
  }
    
  private carregaMapa(location = new google.maps.LatLng('-23.550520', '-46.633308')) {
    let options = {
      center: location,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
    };

    let mapa = new google.maps.Map(this.mapaRef.nativeElement, options);

    return mapa;
  }

  private getLocalizacao() {
    let options = {timeout: 10000, enableHighAccuracy: true};
    let locationsObs = Observable.create(observable => {
      this.geolocation.getCurrentPosition(options)
        .then((resp) => {
          let lat = resp.coords.latitude;
          let long = resp.coords.longitude;

          let location = new google.maps.LatLng(lat, long);
          observable.next(location);
        },
        (erro) => {
          console.log('Geolocation erro: ' + erro);
        })
    })

    return locationsObs;
  }

}
