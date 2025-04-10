import { Injectable } from '@angular/core';
import { Account } from '../../model/class/account';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  logout() {
    localStorage.clear()
  }
  getLogin() {
  return localStorage.getItem('account')
}
  logIn(data: Account) {
    localStorage.setItem('account', JSON.stringify(data));
  }
}
