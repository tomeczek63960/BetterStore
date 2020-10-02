import { MembershipRoutingModule } from './membership-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthTemplateComponent } from './components/templates/auth-template/auth-template.component';
import { AcountPageComponent } from './components/pages/acount-page/acount-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from 'src/app/membership/components/pages/register-page/register-page.component';
import { AcountEditPageComponent } from './components/pages/acount-edit-page/acount-edit-page.component';

@NgModule({
  declarations: [
    AuthTemplateComponent,
    AcountPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    AcountEditPageComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    MembershipRoutingModule,
  ]
})
export class MembershipModule { }
