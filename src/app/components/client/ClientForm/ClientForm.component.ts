import { Component, OnInit } from '@angular/core';
import { ClientComponent } from '../client.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ClientForm',
  imports:[FormsModule],
  templateUrl: './ClientForm.component.html',
  styleUrls: ['./ClientForm.component.css']
})
export class ClientFormComponent extends ClientComponent implements OnInit {

  constructor() {
    super();
  }

  override ngOnInit() {
  }

}
