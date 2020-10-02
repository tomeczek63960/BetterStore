import { ProductsRoutingModule } from './products-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductsWrapperComponent } from 'src/app/products/components/common/products-wrapper/products-wrapper.component';
import { PaginationComponent } from 'src/app/products/components/common/pagination/pagination.component';
import { SearchBarComponent } from 'src/app/products/components/common/search-bar/search-bar.component';
import { SelectPerPageComponent } from 'src/app/products/components/common/select-per-page/select-per-page.component';

import { CategoriesComponent } from 'src/app/products/components/pages/home-page/categories/categories.component';
import { HeroComponent } from 'src/app/products/components/pages/home-page/hero/hero.component';
import { HomePageComponent } from 'src/app/products/components/pages/home-page/home-page.component';
import { PopularProductsComponent } from 'src/app/products/components/pages/home-page/popular-products/popular-products.component';
import { ProductsPageComponent } from 'src/app/products/components/pages/products-page/products-page.component';
import { ProductPageComponent } from 'src/app/products/components/pages/product-page/product-page.component';
import { FilterPageComponent } from 'src/app/products/components/pages/filter-page/filter-page.component';

@NgModule({
  declarations: [
    ProductsWrapperComponent,
    SearchBarComponent,
    SelectPerPageComponent,
    PaginationComponent,
    CategoriesComponent,
    HeroComponent,
    HomePageComponent,
    PopularProductsComponent,
    ProductsPageComponent,
    ProductPageComponent,
    FilterPageComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
