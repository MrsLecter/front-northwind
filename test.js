const str1 =
  'select "OrderID" from "Orders" order by "Orders"."OrderID" asc limit $1';
const str2 =
  'select SUM("OrderDetails"."UnitPrice" * "OrderDetails"."Quantity") as "TotalProductsPrice", SUM("OrderDetails"."Quantity") as "TotalProductsItems", COUNT("OrderDetails"."OrderID") as "TotalProducts", "Orders"."OrderID", "Orders"."ShippedDate", "Orders"."ShipName", "Orders"."ShipCity", "Orders"."ShipCountry" from "Orders" left join "OrderDetails"  on "Orders"."OrderID" = "OrderDetails"."OrderID" where ("Orders"."OrderID" >= $1 and "Orders"."OrderID" < $2) group by "Orders"."OrderID", "Orders"."ShippedDate", "Orders"."ShipName", "Orders"."ShipCity", "Orders"."ShipCountry" order by "Orders"."OrderID" asc';
const str3 = 'select COUNT (*) as "count" from "Orders"';
const str4 =
  'select SUM("OrderDetails"."UnitPrice" * "OrderDetails"."Quantity") as "TotalProductsPrice", SUM("OrderDetails"."Quantity") as "TotalProductsItems", COUNT("OrderDetails"."OrderID") as "TotalProducts", "Orders"."OrderID", "Orders"."ShippedDate", "Orders"."ShipName", "Orders"."ShipCity", "Orders"."ShipCountry" from "Orders" left join "OrderDetails"  on "Orders"."OrderID" = "OrderDetails"."OrderID" where ("Orders"."OrderID" >= $1 and "Orders"."OrderID" < $2) group by "Orders"."OrderID", "Orders"."ShippedDate", "Orders"."ShipName", "Orders"."ShipCity", "Orders"."ShipCountry" order by "Orders"."OrderID" asc';

const upperCaseWord = [
  "select",
  "from",
  "limit",
  "offset",
  "where",
  "as",
  "on",
  "and",
  "group by",
  "order by",
  "left join",
  "asc",
];

const getFormattedQueryString = (str) => {
  const arr = str.split(" ");
  let formattedStr = [];
  for (let word of arr) {
    if (upperCaseWord.includes(word.toLowerCase())) {
      formattedStr.push(word.toUpperCase());
    } else {
      formattedStr.push(word);
    }
  }
  return formattedStr.join(" ");
};

console.log(getFormattedQueryString(str1));
// console.log(getFormattedQueryString(str2));
// console.log(getFormattedQueryString(str3));
// console.log(getFormattedQueryString(str4));
