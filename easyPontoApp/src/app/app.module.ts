import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation';
import { Device } from '@ionic-native/device';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { AuthProvider } from '../providers/auth';
import { PontosProvider } from '../providers/pontos';
import { PontosPage } from '../pages/pontos/pontos';
import { TokenInterceptor } from '../interceptors/token.interceptor';
import { PerfilPage } from '../pages/perfil/perfil';
import { UserProvider } from '../providers/user';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    PontosPage,
    PerfilPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    PontosPage,
    PerfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    AuthProvider,
    PontosProvider,
    UserProvider,
    Geolocation,
    Device
  ]
})
export class AppModule {}
