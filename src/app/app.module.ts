import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { BrMaskerModule } from 'brmasker-ionic-3';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { CadUsuarioPage } from '../pages/cad-usuario/cad-usuario';
import { CadMotoristaPage } from '../pages/cad-motorista/cad-motorista';
import { CadEnderecoPage } from '../pages/cad-endereco/cad-endereco';
import { CadAlunoPage } from '../pages/cad-aluno/cad-aluno';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CadUsuarioPage,
    CadMotoristaPage,
    CadEnderecoPage,
    CadAlunoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrMaskerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CadUsuarioPage,
    CadMotoristaPage,
    CadEnderecoPage,
    CadAlunoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
