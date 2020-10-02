import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShippingModule } from './shipping/shipping.module';

const routes: Routes = [
  {
    path: 'cart',
    loadChildren: () => ShippingModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
