import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'mapa',
  templateUrl: 'mapa.html'
})
export class MapaComponent implements OnInit {

  @ViewChild('mapa') mapaRef: ElementRef;
  mapa;

  constructor(public geolocation: Geolocation) {}

  ngOnInit() {
    this.mapa = this.carregaMapa();
  }

  private carregaMapa() {
    this.geolocation.getCurrentPosition().then((position) => {

      let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let options = {
        center: location,
        zoom: 15,
        mapTypeId: 'roadmap',
        disableDefaultUI: true
      };
      let mapa = new google.maps.Map(this.mapaRef.nativeElement, options);

      return mapa;
    }, (erro) => {
      console.log(erro);
    });
  }

}
