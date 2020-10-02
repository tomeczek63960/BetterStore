import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/shipping/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  products = [];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  removeProduct(product): void{
    this.cartService.remove(product.productId).subscribe(msg => {
      this.products = this.products.filter(e => e.productId !== product.productId );
    });
  }

  getTotalPrice(): any{
    let total = 0;
    this.products.forEach(product => {
      total += product.price * product.amount;
    });
    return total.toFixed(2);
  }
}
