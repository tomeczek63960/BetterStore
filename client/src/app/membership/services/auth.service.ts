import { User } from 'src/app/membership/interfaces/User';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {
  constructor(private http: HttpClient) { }

  loginUser(userData: User): Observable<any>{
    return this.http.post('auth/login', userData);
  }

  registerUser(userData: User): Observable<User>{
    return this.http.post<User>('auth/register', userData);
  }

  getUserData(): Observable<User> {
    return this.http.get<User>('auth');
  }
  changeUserData(data: User): Observable<User>{
    return this.http.post<User>('auth', { data } );
  }

}
