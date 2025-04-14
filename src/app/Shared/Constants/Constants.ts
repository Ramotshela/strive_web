import { environment } from "../../../environments/environment.development";

const baseUrl:string=environment.API_URL
export const API_Endpoint_Employees = {
  GetAllEmployees: `${baseUrl}Employee`,
};
export const API_Endpoint_Clients = {
  GetAllClient: `${baseUrl}Client`,
};
