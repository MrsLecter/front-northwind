import { HEADERS_DETAILED_SET, UPPERCASE_WORDS } from "@const";
import {
  ICustomerInfo,
  IDashboardData,
  IEmployeeInfoCustom,
  ILogRecord,
  IOrderInfoCustom,
  IProductInfoCustom,
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
  const middleOfFilteredFields = Math.ceil(fieldCount / 2);
  return [
    filteredFields.slice(0, middleOfFilteredFields),
    filteredFields.slice(middleOfFilteredFields),
  ];
};

const getLogListWithoutDuplicates = (logs: ILogRecord[]): ILogRecord[] => {
  let logList = logs.slice(0);
  let pointerOne = 0;
  let pointerTwo = 1;

  for (let i = 0; i <= logList.length - 1; i++) {
    console.log(logList.length);
    if (
      logList[pointerOne].hasOwnProperty("url") &&
      logList[pointerTwo].hasOwnProperty("url") &&
      logList[pointerOne].hasOwnProperty("param") &&
      logList[pointerTwo].hasOwnProperty("param") &&
      logList[pointerOne].url === logList[pointerTwo].url &&
      logList[pointerOne].param === logList[pointerTwo].param
    ) {
      logList.splice(pointerOne, 1);
    } else {
      pointerOne++;
      pointerTwo++;
    }
  }
  return logList;
};

export const getDashboardData = (
  data: ILogRecord[]
): { metrics: IDashboardData; logs: ISQLQuery[] } => {
  const logList = getLogListWithoutDuplicates(data);
  const pureLogs = [];
  const dashboardData: IDashboardData = {
    queryCount: 0,
    resultsCount: 0,
    selectQuery: 0,
    selectWhereQuery: 0,
    selectJoinQuery: 0,
  };

  for (let record of logList) {
    for (let log of record.queries) {
      pureLogs.push(log);
      dashboardData.queryCount++;
      dashboardData.resultsCount += log.resultsCount;
      dashboardData.selectQuery += log.sqlType === "select" ? 1 : 0;
      dashboardData.selectWhereQuery += log.sqlType === "select where" ? 1 : 0;
      dashboardData.selectJoinQuery +=
        log.sqlType === "select where left join" ? 1 : 0;
    }
  }
  return { metrics: dashboardData, logs: pureLogs };
};

export const getFormattedQueryString = (str: string): string => {
  const arr = str.split(" ");
  let formattedStr = [];
  for (let word of arr) {
    if (UPPERCASE_WORDS.includes(word.toLowerCase())) {
      formattedStr.push(word.toUpperCase().replaceAll('"', ""));
    } else {
      formattedStr.push(word.replaceAll('"', ""));
    }
  }
  return formattedStr.join(" ");
};
