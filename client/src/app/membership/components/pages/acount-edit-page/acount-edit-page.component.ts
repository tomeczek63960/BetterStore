import { ToastService } from 'angular-toastify';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/membership/services/auth.service';

@Component({
  selector: 'app-acount-edit-page',
  templateUrl: './acount-edit-page.component.html',
  styleUrls: ['./acount-edit-page.component.scss']
})
export class AcountEditPageComponent implements OnInit {

  constructor(private authServie: AuthService, private toastService: ToastService) { }
  user$: Observable<any>;

  editGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(255) ] ),
    surname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(255) ] ),
    email: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(255), Validators.email ]),
    oldPassword: new FormControl('', [ Validators.minLength(5), Validators.maxLength(255) ] ),
    newPassword: new FormControl('', [ Validators.minLength(5), Validators.maxLength(255) ])
  });

  inputFields = [
    {
      type: 'text',
      key: 'name',
      label: 'Imię:',
      errors: [
        {
          type: 'required',
          msg: 'Pole wymagane'
        },
        {
          type: 'minlength',
          msg: 'Wymagane conajmniej 3 znaki'
        },
        {
          type: 'maxlength',
          msg: 'Maksymalnie 255 znaków'
        }
      ]
    },
    {
      type: 'text',
      key: 'surname',
      label: 'Nazwisko:',
      errors: [
        {
          type: 'required',
          msg: 'Pole wymagane'
        },
        {
          type: 'minlength',
          msg: 'Wymagane conajmniej 3 znaki'
        },
        {
          type: 'maxlength',
          msg: 'Maksymalnie 255 znaków'
        }
      ]
    },
    {
      type: 'email',
      key: 'email',
      label: 'E-mail:',
      errors: [
        {
          type: 'required',
          msg: 'Pole wymagane'
        },
        {
          type: 'email',
          msg: 'Niepoprawna składnia'
        },
        {
          type: 'minlength',
          msg: 'Wymagane conajmniej 4 znaki'
        },
        {
          type: 'maxlength',
          msg: 'Maksymalnie 255 znaków'
        }
      ]
    },
    {
      type: 'password',
      key: 'oldPassword',
      label: 'Stare hasło:',
      errors: [
        {
          type: 'minlength',
          msg: 'Wymagane conajmniej 5 znaki'
        },
        {
          type: 'maxlength',
          msg: 'Maksymalnie 255 znaków'
        }
      ]
    },
    {
      type: 'password',
      key: 'newPassword',
      label: 'Nowe hasło:',
      errors: [
        {
          type: 'minlength',
          msg: 'Wymagane conajmniej 5 znaki'
        },
        {
          type: 'maxlength',
          msg: 'Maksymalnie 255 znaków'
        }
      ]
    },
  ];

  ngOnInit(): void {
    this.authServie.getUserData().subscribe( user => {
      this.editGroup.patchValue({
        name: user.name,
        surname: user.surname,
        email: user.email
      });
    });

  }
  submit(e): void{
    e.preventDefault();
    this.authServie.changeUserData(this.editGroup.value).subscribe( updated => {
      this.toastService.success('Dane zmienione pomyślnie');
    });
  }

}
