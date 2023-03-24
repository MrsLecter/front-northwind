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

export interface IEmployeesObject {
  id: number;
  name: string;
  title: string;
  city: string;
  phone: string;
  country: string;
}

export interface ICustomersObject {
  id: string;
  company: string;
  name: string;
  title: string;
  city: string;
  country: string;
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
