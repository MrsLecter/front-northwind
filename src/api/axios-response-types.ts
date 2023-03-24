import {
  ICustomersSearchObject,
  IProductsSearchObject,
} from "../component/types/commonTypes";

export interface ISQLQuery {
  sql: string;
  sqlType: string;
  resultsCount: number;
  timeStart: string;
  timeTaken: number;
}

export interface IDataResponse<T> {
  currentPage: string;
  data: T[];
  sqlQueries: ISQLQuery[];
  totalPages: number;
}

export interface IDataInfoResponse<T> {
  data: T[];
  sqlQueries: ISQLQuery[];
}

export interface ISearchResult {
  data: IProductsSearchObject[] | ICustomersSearchObject[];
  sqlQueries: ISQLQuery[];
}
