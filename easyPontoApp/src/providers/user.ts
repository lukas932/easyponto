import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';
import { AuthProvider } from './auth';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(public http: HttpClient, private authProvider: AuthProvider) { }

  me(): Observable<User> {
    const user = this.authProvider.getUser();
    return this.http
      // .get<User>(`http://localhost:8010/api/users/${user.id}`);
      .get<User>(`http://192.168.129.40/api/users/${user.id}`);
  }

}
