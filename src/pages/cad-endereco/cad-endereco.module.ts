import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { BrMaskerModule } from 'brmasker-ionic-3';

import { CadEnderecoPage } from './cad-endereco';
import { CepProvider } from '../../providers/cep/cep';

@NgModule({
  declarations: [
    CadEnderecoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadEnderecoPage),
    BrMaskerModule
  ],
  providers: [
    CepProvider
  ]
})
export class CadEnderecoPageModule {}
