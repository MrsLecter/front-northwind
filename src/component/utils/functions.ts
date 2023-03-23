import { SUPPLIER_INFO } from "../../constants";
import { ISupplierInfo } from "../types/commonTypes";

export const getFormattedTimeString = (data: Date): string => {
  return data.toTimeString().substring(0, 8);
};

export const getSupplierInfoFiltered = (info: ISupplierInfo) => {
  let fieldCount = 0;
  let filteredFields: [string, string][] = [];
  Object.entries(info).forEach(([key, value], index) => {
    if (index !== 0 && !!value) {
      fieldCount++;
      filteredFields.push([SUPPLIER_INFO[index], value]);
    }
  });
  console.log(filteredFields);
  const middleOfFilteredFields = Math.ceil(fieldCount / 2);
  return [
    filteredFields.slice(0, middleOfFilteredFields),
    filteredFields.slice(middleOfFilteredFields),
  ];
};
