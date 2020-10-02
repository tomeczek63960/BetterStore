import { ProductsModule } from './products/products.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShippingModule } from './shipping/shipping.module';
import { MembershipModule } from './membership/membership.module';

const routes: Routes = [
  {
    path: 'cart',
    loadChildren: () => ShippingModule
  },
  {
    path: 'auth',
    loadChildren: () => MembershipModule
  },
  {
    path: '',
    loadChildren: () => ProductsModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
