export class Payment {
  paymentDate: Date;
  paymentMode: string;
  amount: string;
  projectId: number

  constructor() {
    this.paymentDate= Date.now() as unknown as Date;
  this.paymentMode= '';
  this.amount= '';
  this.projectId= 0
  }
}
