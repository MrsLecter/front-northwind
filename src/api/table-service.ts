import axios, { AxiosResponse } from "axios";
import { PAGE_URLS, DETAIL_URLS } from "../constants";
import {
  IEmployeeInfoResponse,
  IEmployeesResponse,
  ISupplierInfoResponse,
  ISuppliersResponse,
} from "./axios-response-types";

class TableService {
  public async getSuppliers({
    page,
  }: {
    page: number;
  }): Promise<AxiosResponse<ISuppliersResponse, any>> {
    try {
      const response = await axios.get<ISuppliersResponse>(
        PAGE_URLS.suppliers + page + "?count=true"
      );
      return response;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error message: ", error.message);
      } else {
        console.error("Unexpected error: ", error);
      }
      return error;
    }
  }

  public async getSupplierInfo({
    id,
  }: {
    id: number;
  }): Promise<AxiosResponse<ISupplierInfoResponse, any>> {
    try {
      const response = await axios.get<ISupplierInfoResponse>(
        DETAIL_URLS.supplier + id
      );
      return response;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error message: ", error.message);
      } else {
        console.error("Unexpected error: ", error);
      }
      return error;
    }
  }

  public async getEmployees({
    page,
  }: {
    page: number;
  }): Promise<AxiosResponse<IEmployeesResponse, any>> {
    try {
      const response = await axios.get<IEmployeesResponse>(
        PAGE_URLS.employees + page + "?count=true"
      );
      return response;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error message: ", error.message);
      } else {
        console.error("Unexpected error: ", error);
      }
      return error;
    }
  }

  public async getEmployeeInfo({
    id,
  }: {
    id: number;
  }): Promise<AxiosResponse<IEmployeeInfoResponse, any>> {
    try {
      const response = await axios.get<IEmployeeInfoResponse>(
        DETAIL_URLS.employee + id
      );
      return response;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error message: ", error.message);
      } else {
        console.error("Unexpected error: ", error);
      }
      return error;
    }
  }
}

const tableService = new TableService();
export default tableService;
