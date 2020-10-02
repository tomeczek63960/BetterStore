import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { Product } from 'src/app/products/interfaces/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  constructor(private http: HttpClient) { }

  getProducts({limit = 12, page = 1}): Observable<Product[]> {
    const newHeaders = new HttpHeaders({
      limit: `${ limit }`,
      page: `${ page }`
    });
    return this.http.get<Product[]>('http://localhost:5500/products', {headers: newHeaders});
  }
}
