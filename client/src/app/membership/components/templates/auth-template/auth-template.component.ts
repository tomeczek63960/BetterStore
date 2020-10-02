import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-template',
  templateUrl: './auth-template.component.html',
  styleUrls: ['./auth-template.component.scss']
})
export class AuthTemplateComponent implements OnInit{
  @Input() type: string;
  @Output() formValues = new EventEmitter();

  authGroup: FormGroup;

  inputFields = [
    {
      formType: ['login', 'register'],
      type: 'email',
      key: 'email',
      label: 'E-mail:',
      placeholder: 'simple@o2.pl',
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
          msg: 'Wymagane conajmniej 255 znaków'
        },
      ]
    },
    {
      formType: ['login', 'register'],
      type: 'password',
      key: 'password',
      label: 'Hasło:',
      placeholder: 'password',
      errors: [
        {
          type: 'required',
          msg: 'Pole wymagane'
        },
        {
          type: 'minlength',
          msg: 'Wymagane conajmniej 5 znaków'
        },
        {
          type: 'maxlength',
          msg: 'Wymagane conajmniej 255 znaków'
        },
      ]
    },
    {
      formType: ['register'],
      type: 'text',
      key: 'name',
      label: 'Imię:',
      placeholder: 'John',
      errors: [
        {
          type: 'required',
          msg: 'Pole wymagane'
        },
        {
          type: 'minlength',
          msg: 'Wymagane conajmniej 3 znaków'
        },
        {
          type: 'maxlength',
          msg: 'Wymagane conajmniej 255 znaków'
        },
      ]
    },
    {
      formType: ['register'],
      type: 'text',
      key: 'surname',
      label: 'Nazwisko:',
      placeholder: 'Doe',
      errors: [
        {
          type: 'required',
          msg: 'Pole wymagane'
        },
        {
          type: 'minlength',
          msg: 'Wymagane conajmniej 3 znaków'
        },
        {
          type: 'maxlength',
          msg: 'Wymagane conajmniej 255 znaków'
        },
      ]
    },
  ];

  ngOnInit(): void {

    if ( this.type === 'register'){
      this.authGroup = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(255) ] ),
        surname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(255) ] ),
        email: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(255), Validators.email ]),
        password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(255) ] ),
      });

    } else{
      this.authGroup = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(255), Validators.email ]),
        password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(255) ] ),
      });
    }
  }

  handleSubmit(): void{
    this.formValues.emit(this.authGroup.value);
  }

  constructor() { }


}
