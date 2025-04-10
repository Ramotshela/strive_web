import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {FormGroup, FormsModule} from "@angular/forms"
import { AuthService } from './services/auth/auth.service';



@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FormsModule,
    RouterLink,
    RouterLinkActive,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'client-strive-app';

  auth = inject(AuthService);
searchGroup=new FormGroup({})

}
