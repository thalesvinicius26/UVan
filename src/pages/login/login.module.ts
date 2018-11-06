import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { LoginPage } from './login';
import { CadUsuarioPageModule } from '../cadastro/cad-usuario/cad-usuario.module';

@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    CadUsuarioPageModule
  ],
  entryComponents: [
    LoginPage
  ]
})
export class LoginPageModule {}
