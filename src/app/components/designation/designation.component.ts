import { Component, inject, OnInit } from '@angular/core';
import { IDesignation } from '../../model/Interface/designation';
import { MasterService } from '../../services/master/master.service';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.scss',
})
export class DesignationComponent implements OnInit {
  isLoader = true;
  ngOnInit(): void {
    this.GetDesignation();
  }
  designation: any[] = [];
  private readonly masterService = inject(MasterService);

  GetDesignation() {
    this.masterService.GetAllDesignation().subscribe(
      (res: IDesignation) => {
        this.designation = res.data;
        this.isLoader=false
        console.log('test', this.designation);
      },
      (error) => {
        alert('API error');
        this.isLoader=false
      }
    );
  }
}
