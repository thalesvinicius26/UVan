import { Injectable, EventEmitter } from '@angular/core';

import { Usuario } from '../../models/usuario';

@Injectable()
export class LoginProvider {

  //private url = 'http://uvan.ddns.net/';
  private autenticado: boolean = true;
  private usuario: Usuario = new Usuario();
  static response = new EventEmitter<Usuario>();

  constructor() {
    this.usuario.nome = 'Thales Vinicius';
    this.usuario.tipo = 'A';
    this.usuario.email = 'thales@gmail.com';
    this.usuario.senha = '*********';
    this.usuario.genero = 'M';
    this.usuario.dtNascimento = '1996-09-26';
    this.usuario.documento = '123.456.789-63';
    this.usuario.telefone = '(11) 95174-5878';
    this.usuario.aluno.hrEntrada = '19:00';
    this.usuario.aluno.hrSaida = '22:30';
    this.usuario.aluno.faculdade.nome = 'UNIP';
    this.usuario.aluno.faculdade.campos = 'Anchieta';
  }

  getLogin(usuario: Usuario) {

    if (usuario.email == 'teste@email.com' && usuario.senha == '1234') {

      LoginProvider.response.emit(this.usuario); //trabalhar com emissor 
      return true;
    }
    return false;
  }

  getAutenticado() {
    LoginProvider.response.emit(this.usuario);
    return this.autenticado;
  }
}
 