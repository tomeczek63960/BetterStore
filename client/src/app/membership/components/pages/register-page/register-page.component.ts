import { User } from 'src/app/membership/interfaces/User';
import { ToastService } from 'angular-toastify';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/membership/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {
  constructor(private authService: AuthService, private toastService: ToastService) { }

  handleSubmit(value: User): void{
    this.authService.registerUser(value).subscribe(res => {
      this.toastService.success('Użytkownik został dodany!');
    });
  }
}
