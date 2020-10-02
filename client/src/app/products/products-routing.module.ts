import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from 'src/app/products/components/pages/home-page/home-page.component';
import { ProductsPageComponent } from 'src/app/products/components/pages/products-page/products-page.component';
import { ProductPageComponent } from 'src/app/products/components/pages/product-page/product-page.component';

// import { FilterPageComponent } from 'src/app/products/components/pages/filter-page/filter-page.component';
// { path: 'products/filter', component: FilterPageComponent },
    // FilterPageComponent,
const routes: Routes = [
  { path: 'products/:category/:id', component: ProductPageComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: '', component: HomePageComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class ProductsRoutingModule { }
