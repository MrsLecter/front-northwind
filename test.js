// let logs = [
//   {
//     sql: 'select "CustomerID", "CompanyName", "ContactName", "ContactTitle", "City", "Country" from "Customers" order by "Customers"."CustomerID" limit $1',
//     sqlType: "select",
//     resultsCount: 20,
//     timeStart: "2023-03-27T17:56:17.435Z",
//     timeTaken: 1139,
//   },
//   {
//     sql: 'select COUNT (*) as "count" from "Customers"',
//     sqlType: "select",
//     resultsCount: 1,
//     timeStart: "2023-03-27T17:56:18.574Z",
//     timeTaken: 169,
//   },
//   {
//     sql: 'select "EmployeeID", CONCAT("FirstName", \' \' , "LastName") as "name", "Title", "City", "HomePhone", "Country" from "Employees" order by "Employees"."EmployeeID" limit $1',
//     sqlType: "select",
//     resultsCount: 9,
//     timeStart: "2023-03-27T18:15:20.844Z",
//     timeTaken: 1265,
//   },
//   {
//     sql: 'select COUNT (*) as "count" from "Employees"',
//     sqlType: "select",
//     resultsCount: 1,
//     timeStart: "2023-03-27T18:15:22.109Z",
//     timeTaken: 197,
//   },
//   {
//     sql: 'select SUM("OrderDetails"."UnitPrice" * "OrderDetails"."Quantity") as "TotalProductsPrice", SUM("OrderDetails"."Quantity") as "TotalProductsItems", COUNT("OrderDetails"."OrderID") as "TotalProducts", "Orders"."OrderID", "Orders"."ShippedDate", "Orders"."ShipName", "Orders"."ShipCity", "Orders"."ShipCountry" from "Orders" left join "OrderDetails"  on "Orders"."OrderID" = "OrderDetails"."OrderID" where ("Orders"."OrderID" >= $1 and "Orders"."OrderID" < $2) group by "Orders"."OrderID", "Orders"."ShippedDate", "Orders"."ShipName", "Orders"."ShipCity", "Orders"."ShipCountry" order by "Orders"."OrderID" asc',
//     sqlType: "select where left join",
//     resultsCount: 20,
//     timeStart: "2023-03-27T18:15:43.052Z",
//     timeTaken: 166,
//   },
//   {
//     sql: 'select "OrderID" from "Orders" order by "Orders"."OrderID" asc limit $1',
//     sqlType: "select",
//     resultsCount: 1,
//     timeStart: "2023-03-27T18:15:41.835Z",
//     timeTaken: 1217,
//   },
//   {
//     sql: 'select COUNT (*) as "count" from "Orders"',
//     sqlType: "select",
//     resultsCount: 1,
//     timeStart: "2023-03-27T18:15:43.218Z",
//     timeTaken: 160,
//   },
//   {
//     sql: 'select "ProductID", "ProductName", "QuantityPerUnit", "UnitPrice", "UnitsInStock", "UnitsOnOrder" from "Products" order by "Products"."ProductID" limit $1',
//     sqlType: "select",
//     resultsCount: 20,
//     timeStart: "2023-03-27T18:16:04.468Z",
//     timeTaken: 1012,
//   },
//   {
//     sql: 'select COUNT (*) as "count" from "Products"',
//     sqlType: "select",
//     resultsCount: 1,
//     timeStart: "2023-03-27T18:16:05.480Z",
//     timeTaken: 159,
//   },
//   {
//     sql: 'select "SupplierID", "CompanyName", "ContactName", "ContactTitle", "City", "Country" from "Supplies" order by "Supplies"."SupplierID" limit $1',
//     sqlType: "select",
//     resultsCount: 20,
//     timeStart: "2023-03-27T18:16:20.567Z",
//     timeTaken: 1044,
//   },
//   {
//     sql: 'select COUNT (*) as "count" from "Supplies"',
//     sqlType: "select",
//     resultsCount: 1,
//     timeStart: "2023-03-27T18:16:21.611Z",
//     timeTaken: 159,
//   },
// ];

// let obj = {
//   queryCount: 0,
//   resultsCount: 0,
//   selectQuery: 0,
//   selectWhereQuery: 0,
//   selectJoinQuery: 0,
//   logList: [],
// };

// for (let log of logs) {
//   obj.queryCount++;
//   obj.resultsCount += log.resultsCount;
//   obj.selectQuery += log.sqlType === "select" ? 1 : 0;
//   obj.selectWhereQuery += log.sqlType === "select where" ? 1 : 0;
//   obj.selectJoinQuery += log.sqlType === "select where left join" ? 1 : 0;
//   obj.logList.push(log);
// }

// console.log(obj);


let obj = {
    log: [1,2,4]
}

