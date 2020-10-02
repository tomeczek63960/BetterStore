import { AuthGuard } from './../shared/services/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartPageComponent } from './components/pages/cart-page/cart-page.component';

const routes: Routes = [
  {
    path: 'cart',
    component: CartPageComponent,
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ShippingRoutingModule { }
