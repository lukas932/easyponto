import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, ErrorHandler, Injector } from '@angular/core';

@Injectable()
export class AplicationErrorHandle extends ErrorHandler {

  constructor(private injector: Injector) {
    super();
  }

  handleError(errorResponse: HttpErrorResponse | any) {
    if (errorResponse instanceof HttpErrorResponse) {
      if (errorResponse.status === 400 || errorResponse.status === 401) {
        this.goToLogin();
      }
    }
    super.handleError(errorResponse);
  }

  goToLogin(): void {
    const router = this.injector.get(Router);
    localStorage.clear();
    router.navigate(['login']);
  }

}