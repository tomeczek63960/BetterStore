import { Product } from 'src/app/products/interfaces/product';
import { ProductService } from 'src/app/products/services/product.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
})
export class ProductsPageComponent implements OnInit, DoCheck {
  products: Product[];
  queryParams;
  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const queryParams = this.route.snapshot.queryParams;
    this.queryParams = queryParams;

    this.productService.getProducts({ limit: queryParams.limit || 20, page: queryParams.page }).subscribe( e => {
      this.products = e;
    });
  }
  ngDoCheck(): void {
    const queryParams = this.route.snapshot.queryParams;

    if (this.queryParams !== queryParams){
      this.queryParams = queryParams;

      this.productService.getProducts({ limit: queryParams.limit || 20, page: this.queryParams.page }).subscribe(e => {
        this.products = e;
      });
    }
  }

}
