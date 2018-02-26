import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Ponto } from '../models/ponto.model';

/*
  Generated class for the PontosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PontosProvider {

  constructor(public http: HttpClient) { }

  registrar(data: {device_uuid: string, latitude: number, longitude: number}) {
    return this.http
      // .post<any>('http://localhost:8010/api/pontos', data);
      .post<any>('http://192.168.129.40/api/pontos', data);
  }

  find(user_id: number): Observable<Ponto[]> {
    return this.http
      // .get<Ponto[]>(`http://localhost:8010/api/pontos/${user_id}`);
      .get<Ponto[]>(`http://192.168.129.40/api/pontos/${user_id}`);
  }

}
