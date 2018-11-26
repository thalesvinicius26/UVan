import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ConsUsuarioPage } from '../pages/consulta/cons-usuario/cons-usuario';
import { LoginProvider } from '../providers/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  private usuario: any;
  userPage: any = {};
  pages: Array<{title: string, component: any}>;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    private loginProvider: LoginProvider
    ) {
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    LoginProvider.response.subscribe(usuario => this.usuario = usuario);

    if (this.loginProvider.getAutenticado()) {
      this.rootPage = HomePage;
    } else {
      this.rootPage = LoginPage;
    }

    if (this.usuario.tipo == 'A') {
      this.userPage = {title: this.usuario.nome, component: ConsUsuarioPage};
      this.pages = [
        {title: 'Consulta Motorista', component: ConsUsuarioPage}
      ];
    } else if (this.usuario.tipo== 'C') {
      this.userPage = {title: this.usuario.nome, component: ConsUsuarioPage};
      this.pages = [
        {title: 'Consulta Aluno', component: ConsUsuarioPage}
      ];
    }

  }

  openPage(page){
    this.nav.push(page.component);
  }

  openUserPage() {
    this.nav.push(this.userPage.component);
  }

  sair() {}
}

