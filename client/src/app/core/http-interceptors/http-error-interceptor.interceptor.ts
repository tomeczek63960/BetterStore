import { HttpErrorService } from './../services/http-error.service';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpErrorInterceptorInterceptor implements HttpInterceptor {
  constructor(private httpErrorService: HttpErrorService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const hardcodedToken = localStorage.getItem('token');
    if (hardcodedToken){
      request = request.clone({
        setHeaders: {
          token: hardcodedToken
        }
      });
    }


    return next.handle(request).pipe(
      catchError(this.httpErrorService.showErrorMessage)
    );
  }
}
