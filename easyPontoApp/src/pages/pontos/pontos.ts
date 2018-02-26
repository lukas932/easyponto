import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { PontosProvider } from '../../providers/pontos';
import { AuthProvider } from '../../providers/auth';

/**
 * Generated class for the PontosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pontos',
  templateUrl: 'pontos.html',
})
export class PontosPage {

  pontos = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private pontosProvider: PontosProvider,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private authProvider: AuthProvider
  ) { }

  ionViewWillEnter() {
    let user = this.authProvider.getUser();
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Por favor, aguarde...'});
    loading.present();
    this.pontosProvider.find(user.id)
      .subscribe(data => {
        this.pontos = data;
        loading.dismiss();
      },
      error => { 
        loading.dismiss();
        const perfilError = {
          title: 'Nenhum ponto encontrado!',
          subTitle: 'Você não possui nenhum ponto registrado.',
          buttons: ['Ok']
        };
        this.basicAlert(perfilError);
      });
  }

  basicAlert(options: {title, subTitle, buttons}) {
    let alert = this.alertCtrl.create(options);
    alert.present();
  }

}
