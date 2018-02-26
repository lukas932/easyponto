import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { TabsPage } from '../tabs/tabs';
import { AuthProvider } from '../../providers/auth';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public form: FormGroup;

  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private authProvider: AuthProvider,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {
      this.form = this.formBuilder.group({
        'email': ['', Validators.compose([Validators.required])],
        'password': ['', Validators.compose([Validators.required])]
      });
  }

  ionViewDidLoad() {
    if (this.authProvider.isLogged()) {
      this.navCtrl.setRoot(TabsPage);
    }
  }

  login() {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Por favor, aguarde...'});
    loading.present();
    this.authProvider.login(this.form.value)
      .subscribe(() => {
        loading.dismiss();
        this.navCtrl.setRoot(TabsPage);
      }, error => {
        loading.dismiss();
        const invalidPassword = {
          title: 'Usuário ou senha incorretos',
          subTitle: 'Os dados que você inseriu estão incorretos. Tente novamente.',
          buttons: ['Tente novamente'],
          enableBackdropDismiss: false 
        };
        this.basicAlert(invalidPassword);
      });
  }

  basicAlert(options: {title, subTitle, buttons}) {
    let alert = this.alertCtrl.create(options);
    alert.present();
  }

}
