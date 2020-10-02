import { ProductResponse } from './../../../interfaces/ProductResponse';
import { ToastService } from 'angular-toastify';
import { OnlyLoginUserGuard } from 'src/app/products/services/only-login-user.guard';
import { CartService } from 'src/app/shipping/services/cart.service';
import { ProductService } from 'src/app/products/services/product.service';

import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/products/interfaces/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit, DoCheck {
  product$: Observable<Product>;
  id: string;
  category: string;
  quantity = 1;
  categoryProducts: ProductResponse;

  stringifyData(data): string {
    return JSON.stringify(data);
  }
  constructor(private productService: ProductService, private route: ActivatedRoute,
              private cartService: CartService,
              private onlyLoggedUserGuard: OnlyLoginUserGuard,
              private toastService: ToastService
              ) { }

  private getCategoryProducts(): void{
    this.productService.getCategoryProducts({ category: this.category }).subscribe(e => {
      this.categoryProducts = e;
    });
  }
  private getProduct(): void{
    this.product$ = this.productService.getProduct(this.id);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.category = this.route.snapshot.paramMap.get('category');

    this.getProduct();
    this.getCategoryProducts();
  }
  ngDoCheck(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id !== this.id){
      this.id = id;
      this.getProduct();
    }
  }

  async addToCart(currentProduct): Promise<void> {
    const { _id, img, price, title } = currentProduct;

    const product = {
      title,
      productId: _id,
      amount: this.quantity,
      img,
      price
    };

    const params = this.route.snapshot.params;
    const location = `/products/${params.category}/${params.id}`;
    const isLogged = await this.onlyLoggedUserGuard.canActivate(location);
    if (!isLogged)  { return; }

    this.cartService.addProduct(product).subscribe(e => {
      this.toastService.success('Produkt dodany do koszyka');
    });
  }
}
