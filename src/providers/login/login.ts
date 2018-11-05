import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class LoginProvider {

  //private url = 'http://uvan.ddns.net/';
  private autenticado: boolean = true;
  private usuario: any = {};
  static response = new EventEmitter<Object>();

  constructor() {
    this.usuario.nome = 'Thales Vinicius';
    this.usuario.tipo = 'A';
    this.usuario.eMail = 'thales@gmail.com';
    this.usuario.senha = '*********';
    this.usuario.sexo = 'M';
    this.usuario.dataNascimento = '1996-09-26';
    this.usuario.documento = '123.456.789-63';
    this.usuario.telefone = '(11) 95174-5878';
    this.usuario.hrEntrada = '19:00';
    this.usuario.hrSaida = '22:30';
    //this.usuario.faculdade.id = 1;
    //this.usuario.faculdade.nome = 'UNIP';
    //this.usuario.faculdade.campos = 'Anchieta';
  }

  getLogin(usuario: any) {

    if (usuario.eMail == 'teste@email.com' && usuario.senha == '1234') {

      if (usuario.tipo == 'A') {
        LoginProvider.response.emit(this.usuario);
        return true;
      } else {
        LoginProvider.response.emit(this.usuario);
        return true;
      }
    }
    return false;
  }

  getAutenticado() {
    LoginProvider.response.emit(this.usuario);
    return this.autenticado;
  }
}
 