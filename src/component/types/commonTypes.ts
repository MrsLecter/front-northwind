export interface ISupplierObject {
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

export interface IEmployeeObject {
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

export interface ICustomerObject {
  id: string;
  company: string;
  name: string;
  title: string;
  city: string;
  country: string;
}
