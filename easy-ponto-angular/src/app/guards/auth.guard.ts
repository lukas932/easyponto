import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';

import { Observable } from 'rxjs/Observable';
import { Promise } from 'q';

import { AuthService } from '../services/auth.service';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private route: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        if(this.authService.check()) {
            return true;
        }

        this.route.navigate(['login']);
        return false;
    }
}