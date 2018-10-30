import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { BrMaskerModule } from 'brmasker-ionic-3';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { CadUsuarioPage } from '../pages/cad-usuario/cad-usuario';
import { CadMotoristaPage } from '../pages/cad-usuario/cad-motorista/cad-motorista';
import { CadEnderecoPage } from '../pages/cad-endereco/cad-endereco';
import { CadAlunoPage } from '../pages/cad-usuario/cad-aluno/cad-aluno';
import { CadVeiculoPage } from '../pages/cad-veiculo/cad-veiculo';
import { ConsUsuarioPage } from '../pages/cons-usuario/cons-usuario';
import { AutenticacaoProvider } from '../providers/autenticacao/autenticacao';
import { LoginProvider } from '../providers/login/login';
import { CadastroProvider } from '../providers/cadastro/cadastro';
import { FaculdadeProvider } from '../providers/faculdade/faculdade';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CadUsuarioPage,
    CadMotoristaPage,
    CadEnderecoPage,
    CadAlunoPage,
    CadVeiculoPage,
    ConsUsuarioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrMaskerModule,
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CadUsuarioPage,
    CadMotoristaPage,
    CadEnderecoPage,
    CadAlunoPage,
    CadVeiculoPage,
    ConsUsuarioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AutenticacaoProvider,
    LoginProvider,
    CadastroProvider,
    FaculdadeProvider
  ]
})
export class AppModule {}
