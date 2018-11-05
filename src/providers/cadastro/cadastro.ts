import { Injectable } from '@angular/core';

@Injectable()
export class CadastroProvider {

  private dados: any;

  constructor() {
  }

  cadastraAluno(dados: any) {
    this.dados = dados;
    console.log(this.dados);
    // Implementar conexão com a API
  }

  cadastroMotorista(dados: any) {
    this.dados = dados;
    console.log(this.dados);
    // Implementar conexão com a API
  }

}
