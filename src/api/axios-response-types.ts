import {
  ICustomersSearchObject,
  IDetailedOrdersProducts,
  IProductsSearchObject,
  ISQLQuery,
} from "../component/types/commonTypes";

export interface IDataResponse<T> {
  currentPage: string;
  data: T[];
  sqlQueries: ISQLQuery[];
  totalPages: number;
}

export interface IDataInfoResponse<T> {
  data: T[];
  productsInfo?: IDetailedOrdersProducts[];
  sqlQueries: ISQLQuery[];
}

export interface ISearchResult {
  data: IProductsSearchObject[] | ICustomersSearchObject[];
  sqlQueries: ISQLQuery[];
}
