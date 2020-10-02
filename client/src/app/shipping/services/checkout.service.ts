import { CartProduct } from './../interfaces/cartProduct';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) { }

  checkout( products: CartProduct[] ): Observable<object> {
    return this.http.post('checkout', { products });
  }

}
