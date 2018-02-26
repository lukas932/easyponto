import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/do';
import { User } from '../models/user.model';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient) { }

  login(credentials: {email: string, password: string}) {
    return this.http
      // .post<any>('http://localhost:8010/api/login', credentials)
      .post<any>('http://192.168.129.40/api/login', credentials)
      .do(data => {
        localStorage.setItem('token', JSON.stringify(data.token));
        localStorage.setItem('user', btoa(JSON.stringify(data.user)));
      });
  }

  isLogged(): boolean {
    return (localStorage.getItem('user')) ? true : false;
  }

  getUser(): User {
    return JSON.parse(atob(localStorage.getItem('user')));
  }

}
