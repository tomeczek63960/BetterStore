import { CartProduct } from '../../shipping/interfaces/cartProduct';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient) { }

  addProduct( product: CartProduct ): Observable<CartProduct> {
    return this.http.post<CartProduct>('cart', product);
  }
  getProducts(): Observable<CartProduct[]> {
    return this.http.get<CartProduct[]>('cart', {headers: {token: localStorage.getItem('token')}});
  }
  remove(id: string): Observable<any>{
    return this.http.delete(`cart/${id}`);
  }
  removeAll(): Observable<any>{
    return this.http.delete(`cart`);
  }
}

