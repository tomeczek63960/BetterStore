import { AcountEditPageComponent } from './components/pages/acount-edit-page/acount-edit-page.component';
import { AcountPageComponent } from './components/pages/acount-page/acount-page.component';
import { RegisterPageComponent } from 'src/app/membership/components/pages/register-page/register-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/shared/services/auth.guard';

const routes: Routes = [

  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'account/edit',
    component: AcountEditPageComponent,
    canActivate: [ AuthGuard ]
  },
  { path: 'account',
    component: AcountPageComponent,
    canActivate: [ AuthGuard ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembershipRoutingModule { }
