import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request.headers.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    const token = localStorage.getItem('token');

    if (token) {
      const clonedReq = request.clone({headers: request.headers.set('Authorization', `Bearer ${token}`)});
      return next.handle(clonedReq);
    }
    
    return next.handle(request);
  }

}