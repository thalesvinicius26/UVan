import { Injectable } from '@angular/core';

@Injectable()
export class FaculdadeProvider {

  constructor() {
  }

  getListaFacul() {
    let lista: Array<Object>;

    lista = [
    {id:1, nome: 'UNIP', campos: 'Anchieta'},
    {id:2, nome: 'UNIP', campos: 'Vergueiro'},
    {id:3, nome: 'UNIP', campos: 'Marquês'},
    {id:4, nome: 'UNIP', campos: 'Ribeirão'},
    {id:5, nome: 'UNIP', campos: 'Campinas'},
    {id:6, nome: 'UNIP', campos: 'Paulista'},
    {id:7, nome: 'UNIP', campos: 'Santos'}
  ];
    // Fazer conexão com o BD e retornar lista
    return lista;
  }

}
