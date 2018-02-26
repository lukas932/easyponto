import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, AlertController, Platform } from 'ionic-angular';
import { PontosProvider } from '../../providers/pontos';
import { Geolocation, Geoposition, GeolocationOptions } from '@ionic-native/geolocation';
import { Device } from '@ionic-native/device';

declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  markers = [];
  currentPos : Geoposition;
  options : GeolocationOptions;

  constructor(
    public navCtrl: NavController,
    private pontosProvider: PontosProvider,
    private alertCtrl: AlertController,
    private geolocation: Geolocation,
    private device: Device,
    public platform: Platform
  ) { }

  ionViewWillEnter() {
    this.getUserPosition();
  }

  ponto() {
    const info = {
      // 'device_uuid': this.device.uuid,
      'device_uuid': this.device.model,
      'latitude': this.currentPos.coords.latitude,
      'longitude': this.currentPos.coords.longitude
    };
    this.pontosProvider.registrar(info)
      .subscribe(() => {
        let alert = this.alertCtrl.create({
          title: 'Ponto registrado!',
          subTitle: 'Seu ponto foi registrado com sucesso!',
          buttons: ['OK']
        });
        alert.present();
      }, error => console.log(error));
  }

  addMap(lat, long) {
    let latLng = new google.maps.LatLng(lat, long);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.addMarker();
  }

  addMarker() {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = "<p>Você está aqui!</p>";          
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }

  getUserPosition() {
    this.geolocation.getCurrentPosition({ enableHighAccuracy: true })
      .then((pos : Geoposition) => {
        this.currentPos = pos;
        this.addMap(pos.coords.latitude, pos.coords.longitude);
      },(err : PositionError) => {
        console.log("error : " + err.message);
      });
  }

}
