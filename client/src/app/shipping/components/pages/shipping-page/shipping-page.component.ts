import { CartProduct } from './../../../interfaces/cartProduct';
import { CartService } from 'src/app/shared/services/cart.service';
import { CheckoutService } from './../../../services/checkout.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

const regex = (nameRe: RegExp, msg: string ): ValidatorFn => {
  return (control: AbstractControl): {[key: string]: any} | any => {
    const result = nameRe.test(control.value);
    return result ? true : { regex: msg };
  };
};

const postalCodeRegex = /^([0-9]{2}\-[0-9]{3})$/;
const phoneNumberRegex =
      /(?:(?:(?:\+|00)?48)|(?:\(\+?48\)))?(?:1[2-8]|2[2-69]|3[2-49]|4[1-68]|5[0-9]|6[0-35-9]|[7-8][1-9]|9[145])\d{7}/;

@Component({
  selector: 'app-shipping-page',
  templateUrl: './shipping-page.component.html',
})
export class ShippingPageComponent implements OnInit {

  deliveryAdresGroup = new FormGroup({
    street: new FormControl('', [ Validators.required, Validators.minLength(2), Validators.maxLength(255) ] ),
    number: new FormControl('', [ Validators.required ]),
    city: new FormControl('', [ Validators.required, Validators.minLength(2), Validators.maxLength(255) ]),
    postalCode: new FormControl('', [ Validators.required, regex( postalCodeRegex, 'Wymagany format xx-xxx' ) ]),
    country: new FormControl('', [ Validators.required, Validators.minLength(2), Validators.maxLength(255) ]),
    phone: new FormControl('', [ Validators.required, regex(phoneNumberRegex, 'Niepoprawna składnia') ])
  });

  inputFields = [
    {
      type: 'text',
      key: 'street',
      label: 'Ulica:',
      placeholder: 'Kościuszki',
      errors: [
        {
          type: 'required',
          msg: 'Pole wymagane'
        },
        {
          type: 'minlength',
          msg: 'Wymagane conajmniej 2 znaki'
        },
        {
          type: 'maxlength',
          msg: 'Maksymalnie 255 znaków'
        },
      ]
    },
    {
      type: 'number',
      key: 'number',
      label: 'Numer:',
      placeholder: '41',
      errors: [
        {
          type: 'required',
          msg: 'Pole wymagane'
        },
      ]
    },
     {
      type: 'text',
      key: 'city',
      label: 'Miasto:',
      placeholder: 'Białystok',
      errors:  [
        {
          type: 'required',
          msg: 'Pole wymagane'
        },
        {
          type: 'minlength',
          msg: 'Wymagane conajmniej 2 znaki'
        },
        {
          type: 'maxlength',
          msg: 'Maksymalnie 255 znaków'
        },
      ]
    },
     {
      type: 'tel',
      key: 'postalCode',
      label: 'Kod pocztowy:',
      placeholder: '15-423',
      errors:  [
        {
          type: 'required',
          msg: 'Pole wymagane'
        },
        {
          type: 'regex',
          msg: 'Wymagany format XX-XXX '
        },
      ]
    },
    {
      type: 'text',
      key: 'country',
      label: 'Kraj:',
      placeholder: 'Polska',
      errors:  [
        {
          type: 'required',
          msg: 'Pole wymagane'
        },
        {
          type: 'minlength',
          msg: 'Wymagane conajmniej 2 znaki'
        },
        {
          type: 'maxlength',
          msg: 'Maksymalnie 255 znaków'
        },
      ]

    },
    {
      type: 'number',
      key: 'phone',
      label: 'Telefon:',
      placeholder: '123123123',
      errors:  [
        {
          type: 'required',
          msg: 'Pole wymagane'
        },
        {
          type: 'regex',
          msg: 'Niepoprawny numer '
        },
      ]
    }
  ];

  constructor(private cartService: CartService, private checkoutService: CheckoutService) { }

  stripe = Stripe('pk_test_Hbh4N8yzPt7K0S8vZnLbPNCY00qgv4xKHd');
  items: CartProduct[];

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(e => {
      this.items = e;
    });
  }

  doCheckout(): void{
    this.checkoutService.checkout(this.items).subscribe( (session: { id: string }) => {
      return this.stripe.redirectToCheckout({ sessionId: session.id });
    });
  }

}
