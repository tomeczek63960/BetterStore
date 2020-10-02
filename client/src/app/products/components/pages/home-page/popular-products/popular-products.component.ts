import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/products/services/product.service';

@Component({
  selector: 'app-popular-products',
  templateUrl: './popular-products.component.html',
})
export class PopularProductsComponent implements OnInit {
  products;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts({ limit: 18 }).subscribe( products => {
      this.products = products;
    });
  }

}
