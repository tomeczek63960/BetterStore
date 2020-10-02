import { ToastService } from 'angular-toastify';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {
  constructor(private http: HttpClient) { }

  loginUser(userData: object): Observable<any>{
    return this.http.post('http://localhost:5500/auth/login', userData);
  }

  registerUser(userData: object): Observable<any>{
    return this.http.post('http://localhost:5500/auth/register', userData);
  }

  getUserData(): Observable<any> {
    return this.http.get('http://localhost:5500/auth');
  }
  changeUserData(data): Observable<any>{
    return this.http.post('http://localhost:5500/auth', { data } );
  }

}
