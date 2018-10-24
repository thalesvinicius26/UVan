import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AutenticacaoProvider {

  api: string = 'http://localhost/API/'
  constructor(public http: HttpClient) {
  }

  getData() {
    return this.http.get(this.api+'apiRecupera.php');
  }

}
