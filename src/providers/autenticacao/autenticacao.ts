import { HttpClient } from '@angular/common/http';
import { Http, Headers, Response, ResponseOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AutenticacaoProvider {

  api: string = 'http://localhost/TCC/API/';

  constructor(public httpClient: HttpClient, public http: Http) {
  }

  getData() {
    return this.httpClient.get(this.api+'apiRecupera.php');
  }

  postData(parans) {
    let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
    return this.http.post(this.api+'apiCadastro.php', parans, {
      headers: headers,
      method: "POST"
    }).pipe(map(
      (res: Response) => {return res.json();}
      ));
  }
}
