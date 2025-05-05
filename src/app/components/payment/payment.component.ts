import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  imports: [FormsModule, ReactiveFormsModule],
})
export class PaymentComponent implements OnInit {
  paymentForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private dialogRef: MatDialogRef<PaymentComponent>
  ) {}

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      paymentDate: [null, Validators.required],
      paymentMode: ['', Validators.required],
      amount: [
        '',
        [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)],
      ],
    });
  }

  onSave() {
    if (this.paymentForm.valid) {
      console.log('Payment Data:', this.paymentForm.value);
      this.dialogRef.close(this.paymentForm.value);
    }
  }

  onReset() {
    this.paymentForm.reset();
  }
}
