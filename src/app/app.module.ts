import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';

import { BrMaskerModule } from 'brmasker-ionic-3';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AutenticacaoProvider } from '../providers/autenticacao/autenticacao';
import { LoginProvider } from '../providers/login/login';
import { CadastroProvider } from '../providers/cadastro/cadastro';
import { FaculdadeProvider } from '../providers/faculdade/faculdade';
import { MapaComponent } from '../components/mapa/mapa';
import { ConsultaProvider } from '../providers/consulta/consulta';
import { LoginPageModule } from '../pages/login/login.module';
import { LocalEmbarqueComponent } from '../components/local-embarque/local-embarque';
import { CadLocalEmbarquePage } from '../pages/cadastro/cad-local-embarque/cad-local-embarque';

// Separar em mais módulos para LazyLoading
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapaComponent,
    LocalEmbarqueComponent,
    CadLocalEmbarquePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrMaskerModule,
    HttpClientModule,
    HttpModule,
    LoginPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapaComponent,
    LocalEmbarqueComponent,
    CadLocalEmbarquePage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StatusBar,
    SplashScreen,
    AutenticacaoProvider,
    LoginProvider,
    CadastroProvider,
    FaculdadeProvider,
    Geolocation,
    ConsultaProvider
  ]
})
export class AppModule {}
