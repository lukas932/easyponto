import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';

import { User } from '../models/user.model';

@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }

    show() {
        return this.http
            .get<User[]>(`${environment.apiEndpoint}/users`);
    }

    find(id: number): Observable<User> {
        return this.http
            .get<User>(`${environment.apiEndpoint}/users/${id}`);
    }

    findByName(nome: string): Observable<User[]> {
        return this.http
            .get<User[]>(`${environment.apiEndpoint}/users/teste/${nome}`);
    }

    save(user: User): Observable<any> {
        return !user.id
            ? this.http.post(`${environment.apiEndpoint}/users`, user)
            : this.http.put(`${environment.apiEndpoint}/users/${user.id}`, user);
    }

    destroy(id: number): Observable<any> {
        return this.http
            .delete(`${environment.apiEndpoint}/users/${id}`);
    }

}

