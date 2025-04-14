import { Component } from '@angular/core';
import { ClientProjectComponent } from '../client-project.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-project-form',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './client-project-form.component.html',
  styleUrl: './client-project-form.component.scss',
})
export class ClientProjectFormComponent extends ClientProjectComponent {}
