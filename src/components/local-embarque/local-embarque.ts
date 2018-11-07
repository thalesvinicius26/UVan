import { Component, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'local-embarque',
  templateUrl: 'local-embarque.html'
})
export class LocalEmbarqueComponent implements OnChanges {

  @Input() pinMarcado: boolean;
  @Input() mapa: google.maps.Map;
  private pin: google.maps.Marker;
  private popup: google.maps.InfoWindow;

  constructor() {
  }

  ngOnChanges(changes) {

    if (this.pinMarcado) {
      this.exibePin();
    } else {
      this.removePin();
    }
  }

  private exibePin() {
    let localizacao = new google.maps.LatLng(40.697299, -73.809815); 
    //let localizacao = this.mapa.getCenter();

    this.pin = new google.maps.Marker({
      map: this.mapa,
      animation: google.maps.Animation.DROP, //BOUNCE
      position: localizacao,
      icon: '../../assets/imgs/pin.png'
    })

    setTimeout( () => {
      this.pin.setAnimation(null);
    }, 750);

    this.exibeTempo();
  }

  private removePin() {
    if (this.pin) {
      this.pin.setMap(null);
      this.pin = null;
    }
  }

  exibeTempo() {
    /* Muitos problemas ocorrem nesta etapa usar pesquisar outros tutoriais para se trablhar com informações mais atualizadas.
    this.popup = new google.maps.InfoWindow({
      content: '<h5>Você está aqui</h5>'
    });

    this.popup.open(this.mapa, this.pin);

    google.maps.event.addListener(this.pin, 'click', () => {
      this.popup.open(this.mapa, this.pin);
    });
    */
  }
}
