import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/membership/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) { }

  handleSubmit = (value: any): void => {

    this.authService.loginUser(value).subscribe(res => {
        localStorage.setItem('token', `Bearer ${res.token}`);
        this.router.navigate([this.route.snapshot.queryParams.return || '/']);
      }
    );

  }

}
