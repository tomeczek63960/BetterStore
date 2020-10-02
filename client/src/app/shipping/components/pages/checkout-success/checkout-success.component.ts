import { Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { CartService } from 'src/app/shared/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-success',
  template: ``,
})
export class CheckoutSuccessComponent implements OnInit {

  constructor(private toastService: ToastService, private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartService.removeAll().subscribe(e => {
      this.toastService.success('Płatność dokonana pomyślnie');
      this.router.navigate(['/cart/cart']);
    });
  }
}
