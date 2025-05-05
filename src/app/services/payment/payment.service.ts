import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Payment } from '../../model/class/payment';
import { API_Endpoint_Payments } from '../../Shared/Constants/Constants';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor() { }
  http = inject(HttpClient);

  CreatePayment(payment:Payment) {
    return this.http.post<Payment>(API_Endpoint_Payments.CreatePayment(payment))
  }
}
