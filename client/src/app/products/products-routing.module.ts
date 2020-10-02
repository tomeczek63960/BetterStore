import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from 'src/app/products/components/pages/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class ProductsRoutingModule { }
