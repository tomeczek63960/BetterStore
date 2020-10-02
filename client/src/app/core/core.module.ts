import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent } from 'src/app/core/components/page-bar/cart/cart.component';
import { BarsComponent } from 'src/app/core/components/page-bar/bars/bars.component';
import { NavbarComponent } from 'src/app/core/components/page-bar/navbar/navbar.component';
import { PageLogoComponent } from 'src/app/core/components/page-bar/page-logo/page-logo.component';
import { PageBarComponent } from 'src/app/core/components/page-bar/page-bar.component';
import { PageFooterComponent } from 'src/app/core/components/page-footer/page-footer.component';

@NgModule({
  declarations: [
    PageFooterComponent,
    PageBarComponent,
    PageLogoComponent,
    NavbarComponent,
    BarsComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PageFooterComponent,
    PageBarComponent
  ]
})
export class CoreModule { }
