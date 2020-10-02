import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient) { }

  addProduct( product: any ): Observable<object> {
    return this.http.post('http://localhost:5500/cart', product);
  }
  getProducts(): Observable<any> {
    return this.http.get('http://localhost:5500/cart');
  }
  remove(id: string): Observable<any>{
    return this.http.delete(`http://localhost:5500/cart/${id}`);
  }
  removeAll(): Observable<any>{
    return this.http.delete(`http://localhost:5500/cart`);
  }
}

