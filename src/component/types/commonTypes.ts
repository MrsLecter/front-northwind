export interface ISuppliersObject {
  id: number;
  companyName: string;
  name: string;
  title: string;
  city: string;
  country: string;
}

export interface ISupplierInfo {
  SupplierID: number;
  CompanyName: string;
  ContactName: string;
  ContactTitle: string;
  Address: string;
  City: string;
  Region: string | null;
  PostalCode: string;
  Country: string;
  Phone: string;
  Fax: string | null;
  HomePage: string | null;
}

export interface IProductsObject {
  id: number;
  name: string;
  qt: string;
  price: number;
  stock: number;
  orders: number;
}

export interface IProductInfo {
  productName: string;
  supplierId: number;
  supplier: string;
  qtyPerUnit: string;
  unitPrice: number;
  unitsInStock: number;
  unitsInOrder: number;
  reorderLevel: number;
  discontinued: number;
}

export interface IProductInfoCustom {
  id: number;
  productName: string;
  supplier: string;
  qtyPerUnit: string;
  unitPrice: number;
  unitsInStock: number;
  unitsInOrder: number;
  reorderLevel: number;
  discontinued: number;
}

export interface IOrdersObject {
  TotalProductsPrice: number;
  TotalProductsItems: number;
  TotalProducts: string;
  OrderId: number;
  Shipped: string;
  ShipName: string;
  City: string;
  Country: string;
}

export interface IOrderInfo {
  CustomerId: string;
  ShipName: string;
  TotalProductsDiscount: number;
  TotalProductsPrice: number;
  TotalProductsItems: number;
  TotalProducts: string;
  CompanyShipper: string;
  Freight: number;
  OrderDate: string;
  RequiredDate: string;
  ShippedDate: string;
  ShipCity: string;
  ShipRegion: string;
  PostalCode: string;
  ShipCountry: string;
}

export interface IOrderInfoCustom {
  id: string;
  customerId: string;
  shipName: string;
  totalProducts: string;
  totalQuantity: number;
  totalPrice: number;
  totalDiscount: number;
  shipVia: string;
  freight: number;
  orderDate: string;
  requiredDate: string;
  shippedDate: string;
  shipCity: string;
  shipRegion: string;
  shipPostalCode: string;
  shipCountry: string;
}

export interface IDetailedOrdersProducts {
  Discount: number;
  OrderPrice: number;
  ProductId: number;
  ProductName: string;
  Quantity: number;
  TotalPrice: number;
}

export interface IEmployeesObject {
  id: number;
  name: string;
  title: string;
  city: string;
  phone: string;
  country: string;
}

export interface IEmployeeInfo {
  EmployeeID: number;
  LastName: string;
  FirstName: string;
  Title: string;
  TitleOfCourtesy: string;
  BirthDate: string;
  HireDate: string;
  Address: string;
  City: string;
  Region: string;
  PostalCode: string;
  Country: string;
  HomePhone: string;
  Extension: number;
  Notes: string;
  ReportsTo: number;
  reportsName: string;
}

export interface IEmployeeInfoCustom {
  id: number;
  name: string;
  title: string;
  titleOfCourtesy: string;
  birthDate: string;
  hireDate: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  homePhone: string;
  extension: number;
  notes: string;
  reportsTo: string;
}

export interface ICustomersObject {
  id: string;
  company: string;
  name: string;
  title: string;
  city: string;
  country: string;
}

export interface ICustomerInfo {
  CustomerID: string;
  CompanyName: string;
  ContactName: string;
  ContactTitle: string;
  Address: string;
  City: string;
  Region: null;
  PostalCode: string;
  Country: string;
  Phone: string;
  Fax: string;
}

export interface IProductsSearchObject {
  id: number;
  name: string;
  quantPerUnit: string;
  price: number;
  stock: number;
}

export interface ICustomersSearchObject {
  id: string;
  name: string;
  contact: string;
  title: string;
  phone: string;
}

export type TIncomeData =
  | "supplier"
  | "product"
  | "order"
  | "employee"
  | "customer";

export interface ISQLQuery {
  sql: string;
  sqlType: string;
  resultsCount: number;
  timeStart: string;
  timeTaken: number;
}

export interface IDashboardData {
  queryCount: number;
  resultsCount: number;
  selectQuery: number;
  selectWhereQuery: number;
  selectJoinQuery: number;
}

export interface ILogRecord {
  url: string;
  param: number | string;
  queries: ISQLQuery[];
}

export interface IMetricsReponse {
  city: string;
  continentCode: string;
  continentName: string;
  countryCode: string;
  countryName: string;
  ipAddress: string;
  stateProv: string;
}

export interface IServerLocation {
  colo: string;
  country: string;
}
