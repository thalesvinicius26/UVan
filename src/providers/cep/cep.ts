import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CepProvider {

  constructor(private http: HttpClient) {
  }

  consultaCEP(cep: string) {
    cep = cep.replace(/\D/g, '');

    if (cep !== '' && cep != null) {
      const validaCEP = /^[0-9]{8}$/;

      if (validaCEP.test(cep)) {
        // this.http.get('//viacep.com.br/ws/' + cep + '/json/unicode/');
        return this.http.get(`//viacep.com.br/ws/${cep}/json/unicode/`);
      }
    }
  }

}
