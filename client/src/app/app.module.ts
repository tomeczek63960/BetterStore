import { ShippingModule } from './shipping/shipping.module';
import { MembershipModule } from './membership/membership.module';
import { ProductsModule } from './products/products.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularToastifyModule, ToastService } from 'angular-toastify';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptorInterceptor } from 'src/app/core/http-interceptors/http-error-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularToastifyModule,
    HttpClientModule,

    CoreModule,
    SharedModule,
    MembershipModule,
    ProductsModule,
    ShippingModule
  ],
  providers: [
    ToastService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
