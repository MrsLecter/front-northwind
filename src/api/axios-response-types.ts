import {
  ICustomerObject,
  IEmployeeObject,
  ISupplierObject,
  ISupplierInfo,
} from "../component/types/commonTypes";

export interface ISQLQuery {
  sql: string;
  sqlType: string;
  resultsCount: number;
  timeStart: string;
  timeTaken: number;
}

export interface ISuppliersResponse {
  currentPage: string;
  data: ISupplierObject[];
  sqlQueries: ISQLQuery[];
  totalPages: number;
}

export interface ISupplierInfoResponse {
  data: ISupplierInfo[];
  sqlQueries: ISQLQuery[];
}

export interface IEmployeesResponse {
  data: IEmployeeObject[];
  sqlQueries: ISQLQuery[];
  currentPage: string;
  totalPages: number;
}

export interface IEmployeeInfoResponse {
  data: IEmployeeObject[];
  sqlQueries: ISQLQuery[];
}

export interface ICustomersResponse {
  data: ICustomerObject[];
  totalPages: 5;
  currentPage: "1";
  sqlQueries: ISQLQuery[];
}
