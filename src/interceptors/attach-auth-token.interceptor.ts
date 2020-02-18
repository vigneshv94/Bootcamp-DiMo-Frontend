import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AttachAuthTokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const storageUser = localStorage.getItem('LoggedUser');
    const loggedUser = storageUser ? JSON.parse(storageUser) : null;

    if (loggedUser) {
      request = request.clone({
        headers: request.headers.set('Authorization', loggedUser.authToken)
      });
    }

    return next.handle(request);
  }
}
