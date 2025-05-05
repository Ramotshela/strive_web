import { Payment } from './../../model/class/payment';
import { environment } from "../../../environments/environment.development";

const baseUrl: string = environment.API_URL

export const API_Endpoint_Employees = {

  GetAllEmployees: `${baseUrl}Employee`,
  GetEmployeeById:(id:number)=> `${baseUrl}Employee/${id}`,
  DeleteEmployee: (id: number) => `${baseUrl}Employee/${id}`,

};
export const API_Endpoint_Clients = {
  GetAllClient: `${baseUrl}Client`,
  GetClientById: (id: number) => `${baseUrl}Client?id=${id}`,
  DeleteClient: (id: number) => `${baseUrl}Client?id=${id}`,
};
export const API_Endpoint_Payments = {
CreatePayment:(paymentInfo:Payment)=>`${baseUrl}payment,${paymentInfo}`
}
