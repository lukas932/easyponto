import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/do';

import { environment } from '../../environments/environment';

import { User } from '../models/user.model';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient, private router: Router) { }

    login(credentials: {email: string, senha: string}) {
        return this.http
            .post<any>(`${environment.apiEndpoint}/login`, credentials)
            .do(data => {
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', btoa(JSON.stringify(data.user)));
            });
    }

    check(): boolean {
        return localStorage.getItem('user') ? true : false; 
    }

    logout(): void {
        this.http
            .get(`${environment.apiEndpoint}/logout`)
            .subscribe(resp => {
                localStorage.clear();
                this.router.navigate(['login']);
            })
    }

    getUser(): User {
        return localStorage.getItem('user') ? JSON.parse(atob(localStorage.getItem('user'))) : null;
    }

    setUser() {
        return this.http
            .get<any>(`${environment.apiEndpoint}/user`).toPromise()
            .then(data => {
                localStorage.setItem('user', btoa(JSON.stringify(data.user)));
            });
    }

}

