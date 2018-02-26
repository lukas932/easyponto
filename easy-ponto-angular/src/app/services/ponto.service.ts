import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';

import { Ponto } from '../models/ponto.model';

@Injectable()
export class PontoService {

    constructor(private http: HttpClient) { }

    find(user_id: number): Observable<Ponto[]> {
        return this.http
            .get<Ponto[]>(`${environment.apiEndpoint}/pontos/${user_id}`);
    }

}

