import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';

import { Cargo } from '../models/cargo.model';

@Injectable()
export class CargoService {

    constructor(private http: HttpClient) { }

    show() {
        return this.http
            .get<Cargo[]>(`${environment.apiEndpoint}/cargos`);
    }

    find(id: number): Observable<Cargo> {
        return this.http
            .get<Cargo>(`${environment.apiEndpoint}/cargos/${id}`);
    }

    save(cargo: Cargo): Observable<any> {
        return !cargo.id
            ? this.http.post(`${environment.apiEndpoint}/cargos`, cargo)
            : this.http.put(`${environment.apiEndpoint}/cargos/${cargo.id}`, cargo);
    }

    destroy(id: number): Observable<any> {
        return this.http
            .delete(`${environment.apiEndpoint}/cargos/${id}`);
    }

}

