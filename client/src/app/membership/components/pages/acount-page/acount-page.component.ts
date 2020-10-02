import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from 'src/app/membership/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acount-page',
  templateUrl: './acount-page.component.html',
  styleUrls: ['./acount-page.component.scss']
})
export class AcountPageComponent implements OnInit {
  user$: Observable<any>;
  constructor(private authServie: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.user$ = this.authServie.getUserData();
  }

  logout(): void{
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

}
