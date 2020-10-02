import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OnlyLoginUserGuard implements CanActivate {
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute){}

  canActivate(prevLocation): Promise<boolean> {
    return new Promise((resolve, reject) => {

      if ( !localStorage.getItem('token') ){

        this.router.navigate(['/auth/login'], {
          queryParams: {
            return: prevLocation
          }
        });

        return reject(false);
      }

      this.http.get('http://localhost:5500/auth/authentication').subscribe(e => {
        if (e){
          resolve(true);
        }else{
          reject(false);

          this.router.navigate(['/auth/login'], {
            queryParams: {
              return: prevLocation
            }
          });
        }
      });

    });

  }

}
