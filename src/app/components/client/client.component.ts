import { Component, OnInit, inject } from '@angular/core';
import { Client } from '../../model/class/client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client/client.service';
import { UpperCasePipe } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-client',
  imports: [FormsModule, UpperCasePipe,RouterModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss',
})
export class ClientComponent implements OnInit {
  ToClientForm() {
    this.route.navigate(['client/client-form']);
  }
  clientService = inject(ClientService);
  route = inject(Router);
  ngOnInit(): void {
    this.loadClients();
  }
  clientObj: Client = new Client();
  clientList: any[] = [];
  loadClients() {
    this.clientService.GetAllClients().subscribe((data) => {
      this.clientList = data;
    });
  }
  OnSaveClient() {
    this.clientService.PostUpdatedClient(this.clientObj).subscribe((data) => {
      if (data) {
        alert('success');
        this.clientObj = new Client();
        this.loadClients();
      } else {
        alert('error');
      }
    });
  }
  OnReset() {
    this.clientObj = new Client();
  }
  OnEdit(id: number) {
    this.clientService.GetClientById(id).subscribe((data) => {
      this.clientObj = data.data;
    });
  }
  OnDelete(id: number) {
    this.clientService.DeleteClientById(id).subscribe((res) => {
      if (res.result) {
        alert('deleted');
        this.loadClients();
        this.clientObj = new Client();
      }
    });
  }
}
