import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { CadEnderecoPage } from './cad-endereco';
import { CepProvider } from '../../../providers/cep/cep';

@NgModule({
  declarations: [
    CadEnderecoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadEnderecoPage)
  ],
  providers: [
    CepProvider
  ]
})
export class CadEnderecoPageModule {}
