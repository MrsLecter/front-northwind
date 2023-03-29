import { HEADERS_DETAILED_SET, HEADERS_SET } from "../../constants";
import {
  ICustomerInfo,
  ICustomersObject,
  IDashboardData,
  IEmployeeInfo,
  IEmployeeInfoCustom,
  IEmployeesObject,
  IOrderInfoCustom,
  IOrdersObject,
  IProductInfo,
  IProductInfoCustom,
  IProductsObject,
  ISQLQuery,
  ISupplierInfo,
  TIncomeData,
} from "../types/commonTypes";

export const getFormattedTimeString = (data: Date): string => {
  return data.toTimeString().substring(0, 8);
};

export const getInfoFiltered = ({
  data,
  info,
}: {
  data:
    | ICustomerInfo
    | IEmployeeInfoCustom
    | ISupplierInfo
    | IProductInfoCustom
    | IOrderInfoCustom;
  info: TIncomeData;
}): [string, string | number][][] => {
  const headerInfo = HEADERS_DETAILED_SET[info];
  let fieldCount = 0;
  let filteredFields: [string, string | number][] = [];
  Object.entries(data).forEach(([key, value], index) => {
    if (index !== 0 && value !== undefined && value !== null && value !== " ") {
      fieldCount++;
      filteredFields.push([headerInfo[index], value]);
    }
  });
  console.log(filteredFields);
  const middleOfFilteredFields = Math.ceil(fieldCount / 2);
  return [
    filteredFields.slice(0, middleOfFilteredFields),
    filteredFields.slice(middleOfFilteredFields),
  ];
};

export const getDashboardData = (data: ISQLQuery[]): IDashboardData => {
  const dashboardData: IDashboardData = {
    queryCount: 0,
    resultsCount: 0,
    selectQuery: 0,
    selectWhereQuery: 0,
    selectJoinQuery: 0,
  };

  for (let log of data) {
    dashboardData.resultsCount += log.resultsCount;
    dashboardData.selectQuery += log.sqlType === "select" ? 1 : 0;
    dashboardData.selectWhereQuery += log.sqlType === "select where" ? 1 : 0;
    dashboardData.selectJoinQuery +=
      log.sqlType === "select where left join" ? 1 : 0;
  }

  dashboardData.queryCount = data.length;

  return dashboardData;
};
