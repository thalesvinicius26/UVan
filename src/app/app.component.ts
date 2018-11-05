import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { CadEnderecoPage } from '../pages/cad-endereco/cad-endereco';
import { CadMotoristaPage } from '../pages/cad-usuario/cad-motorista/cad-motorista';
import { CadAlunoPage } from '../pages/cad-usuario/cad-aluno/cad-aluno';
import { CadUsuarioPage } from '../pages/cad-usuario/cad-usuario';
import { CadVeiculoPage } from '../pages/cad-veiculo/cad-veiculo';
import { ConsUsuarioPage } from '../pages/cons-usuario/cons-usuario';
import { LoginProvider } from '../providers/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  private usuario: any;
  userPage: any = {};
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private loginProvider: LoginProvider) {

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

    this.userPage = {title: this.usuario.nome, component: ConsUsuarioPage};
    this.pages = [
      {title: 'Login', component: LoginPage},
      {title: 'Cadastro', component: CadUsuarioPage},
      {title: 'Endereço', component: CadEnderecoPage},
      {title: 'Motorista', component: CadMotoristaPage},
      {title: 'Aluno', component: CadAlunoPage},
      {title: 'Veículo', component: CadVeiculoPage}
    ];
  }

  openPage(page){
    this.nav.push(page.component);
  }

  openUserPage() {
    this.nav.push(this.userPage.component);
  }

  sair() {
    
  }
}

