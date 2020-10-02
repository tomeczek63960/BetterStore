import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private http: HttpClient){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return new Promise((resolve, reject) => {

      if ( !localStorage.getItem('token') ){
        this.router.navigate(['/auth/login'], {
              queryParams: {
                return: state.url
              }
            });
        return reject(false);

      }
      this.http.get('auth/authentication')

      .subscribe(e => {

        if (e){
          resolve(true);
        }else{
          reject(false);
        }
      });

    });
  }

}
