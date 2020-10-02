import { SharedModule } from './../shared/shared.module';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { ShippingRoutingModule } from './shipping-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShippingPageComponent } from './components/pages/shipping-page/shipping-page.component';
import { CheckoutSuccessComponent } from './components/pages/checkout-success/checkout-success.component';

@NgModule({
  declarations: [
    ShippingPageComponent,
    CartPageComponent,
    CheckoutSuccessComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    ShippingRoutingModule,
  ]
})
export class ShippingModule { }
