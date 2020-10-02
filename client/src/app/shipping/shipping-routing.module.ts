import { AuthGuard } from './../shared/services/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckoutSuccessComponent } from './components/pages/checkout-success/checkout-success.component';
import { ShippingPageComponent } from './components/pages/shipping-page/shipping-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';

const routes: Routes = [
  {
    path: 'cart',
    component: CartPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'shipping',
    component: ShippingPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'checkout/success',
    component: CheckoutSuccessComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ShippingRoutingModule { }
