import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) { }

  // products: Observable<CartProduct[]>
  checkout( products ): Observable<object> {
    return this.http.post('http://localhost:5500/checkout', { products });
  }

}
