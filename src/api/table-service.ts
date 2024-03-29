import axios, { AxiosResponse } from "axios";
import {
  IDataInfoResponse,
  IDataResponse,
  ISearchResult,
} from "./axios-response-types";
import { SEARCH_URL } from "@const";

class TableService {
  public async getTableData<T>({
    url,
    page,
  }: {
    url: string;
    page: number;
  }): Promise<AxiosResponse<IDataResponse<T>, any>> {
    try {
      const response = await axios.get<IDataResponse<T>>(
        url + page + "?count=true"
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

  public async getDetailedInfo<T>({
    id,
    url,
  }: {
    id: number | string;
    url: string;
  }): Promise<AxiosResponse<IDataInfoResponse<T>, any>> {
    try {
      const response = await axios.get<IDataInfoResponse<T>>(url + id, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Max-Age": 300,
        },
      });
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

  public async getSearchResult({
    searchString,
    searchTable,
  }: {
    searchString: string;
    searchTable: "products" | "customers";
  }): Promise<AxiosResponse<ISearchResult, any>> {
    try {
      const searchUrl =
        searchTable === "products"
          ? SEARCH_URL.search_products
          : SEARCH_URL.search_customers;
      const response = await axios.get<ISearchResult>(searchUrl + searchString);
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
