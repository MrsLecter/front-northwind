import { HEADERS_DETAILED_SET, HEADERS_SET } from "../../constants";
import {
  ICustomersObject,
  IEmployeesObject,
  ISupplierInfo,
  TIncomeData,
} from "../types/commonTypes";

export const getFormattedTimeString = (data: Date): string => {
  return data.toTimeString().substring(0, 8);
};

export const getInfoFiltered = (
  data: ISupplierInfo | IEmployeesObject | ICustomersObject,
  info: TIncomeData
): [string, string | number][][] => {
  const headerInfo = HEADERS_DETAILED_SET[info];
  let fieldCount = 0;
  let filteredFields: [string, string | number][] = [];
  Object.entries(data).forEach(([key, value], index) => {
    if (index !== 0 && !!value) {
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
