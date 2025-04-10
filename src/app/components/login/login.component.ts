import { Component, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from '../../model/class/account';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private readonly router: Router) {}
  private readonly authLocalStorage = inject(AuthService);
  userDetails = signal<Account[]>([
    { username: 'sammy@adaptit', password: '12345' },
    { username: 'sammy@adaptit', password: '12344' },
  ]);

  loginFormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  login() {
    const loginValue = this.loginFormGroup.value as Account;
    const storedUser = this.userDetails().find((user) => {
      return (
        user.username == loginValue.username &&
        user.password == loginValue.password
      );
    });

    if (storedUser) {
      this.authLocalStorage.logIn(loginValue);
      this.router.navigateByUrl('/client');
    } else {
      console.log('Login failed');
    }
  }
}
