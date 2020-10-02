import { ToastService } from 'angular-toastify';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorService {

  constructor(private toastService: ToastService) { }

  showErrorMessage = (error) => {
    this.toastService.error(error.error.msg || 'Błąd po stronie serwera');
    return throwError(error);
  }
}
