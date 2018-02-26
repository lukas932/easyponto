import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { User } from '../../models/user.model';
import { UserProvider } from '../../providers/user';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  user: User;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserProvider,
    private loadingCtrl: LoadingController,
  ) { }

  ionViewWillEnter() {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Por favor, aguarde...'});
    loading.present();
    this.userProvider.me()
      .subscribe((data) => {
        this.user = data;
        loading.dismiss();
      }, error => {
        loading.dismiss();
        console.log(error);
      });
  }

}
