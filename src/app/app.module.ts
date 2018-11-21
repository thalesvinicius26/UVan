import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';

import { BrMaskerModule } from 'brmasker-ionic-3';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginProvider } from '../providers/login/login';
import { LoginPageModule } from '../pages/login/login.module';
import { ConsUsuarioPage } from '../pages/consulta/cons-usuario/cons-usuario';

// Separar em mais módulos para LazyLoading
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ConsUsuarioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrMaskerModule,
    HttpClientModule,
    LoginPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ConsUsuarioPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StatusBar,
    SplashScreen,
    LoginProvider,
    GoogleMaps,
    Geolocation
  ]
})
export class AppModule {}
