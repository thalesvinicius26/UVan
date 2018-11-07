import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { BrMaskerModule } from 'brmasker-ionic-3';

import { CadUsuarioPage } from './cad-usuario';
import { CadAlunoPage } from './cad-aluno/cad-aluno';
import { CadMotoristaPage } from './cad-motorista/cad-motorista';
import { CadEnderecoPage } from '../cad-endereco/cad-endereco';
import { CadVeiculoPage } from '../cad-veiculo/cad-veiculo';
import { CepProvider } from '../../../providers/cep/cep';
//import { CadLocalEmbarquePage } from '../cad-local-embarque/cad-local-embarque';

@NgModule({
  declarations: [
    CadUsuarioPage,
    CadAlunoPage,
    CadMotoristaPage,
    CadEnderecoPage,
    CadVeiculoPage,
    //CadLocalEmbarquePage
  ],
  imports: [
    IonicPageModule.forChild(CadUsuarioPage),
    BrMaskerModule
  ],
  entryComponents: [
    CadUsuarioPage,
    CadAlunoPage,
    CadMotoristaPage,
    CadEnderecoPage,
    CadVeiculoPage,
    //CadLocalEmbarquePage
  ],
  providers: [
    CepProvider
  ]
})
export class CadUsuarioPageModule {}
