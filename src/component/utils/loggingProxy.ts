import tableService from "../../api/table-service";
import { logsSlice } from "../store/reducers/logsSlice";
import { appstore } from "../store";
import { AxiosResponse } from "axios";
import {
  IDataInfoResponse,
  IDataResponse,
  ISearchResult,
} from "../../api/axios-response-types";
import { SEARCH_URL } from "@const";

class ApiHandler {
  public async getTableData<T>({
    pageUrl,
    pageNumber,
  }: {
    pageUrl: string;
    pageNumber: number;
  }): Promise<AxiosResponse<IDataResponse<T>, any>> {
    const currentResponse = await tableService.getTableData<T>({
      url: pageUrl,
      page: pageNumber,
    });

    if (currentResponse.status === 200) {
      appstore.dispatch(
        logsSlice.actions.setLogList({
          url: pageUrl,
          param: pageNumber,
          sqlQueries: currentResponse.data.sqlQueries,
        })
      );
      return currentResponse;
    } else {
      return currentResponse;
    }
  }

  public async getDetailData<T>({
    pageUrl,
    idParam,
  }: {
    pageUrl: string;
    idParam: number | string;
  }): Promise<AxiosResponse<IDataInfoResponse<T>, any>> {
    const currentResponse = await tableService.getDetailedInfo<T>({
      url: pageUrl,
      id: idParam,
    });

    if (currentResponse.status === 200) {
      appstore.dispatch(
        logsSlice.actions.setLogList({
          url: pageUrl,
          param: idParam,
          sqlQueries: currentResponse.data.sqlQueries,
        })
      );
      return currentResponse;
    } else {
      return currentResponse;
    }
  }

  public async getSearchData<T>({
    seachParam,
    searchTable,
  }: {
    seachParam: string;
    searchTable: "products" | "customers";
  }): Promise<AxiosResponse<ISearchResult, any>> {
    const currentResponse = await tableService.getSearchResult({
      searchString: seachParam,
      searchTable,
    });

    if (currentResponse.status === 200) {
      appstore.dispatch(
        logsSlice.actions.setLogList({
          url:
            searchTable === "products"
              ? SEARCH_URL.search_products
              : SEARCH_URL.search_customers,
          param: seachParam,
          sqlQueries: currentResponse.data.sqlQueries,
        })
      );
      return currentResponse;
    } else {
      return currentResponse;
    }
  }
}

const apiHandler = new ApiHandler();
export default apiHandler;
