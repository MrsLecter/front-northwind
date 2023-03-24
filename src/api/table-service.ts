import axios, { AxiosResponse } from "axios";
import {
  IDataInfoResponse,
  IDataResponse,
  ISearchResult,
} from "./axios-response-types";
import { SEARCH_URL } from "../constants";

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
      console.log("table info" + url, response);
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
    id: number;
    url: string;
  }): Promise<AxiosResponse<IDataInfoResponse<T>, any>> {
    try {
      const response = await axios.get<IDataInfoResponse<T>>(url + id);
      console.log("detailed info" + url, response);
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
      console.log("search info" + searchUrl, searchString);
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
