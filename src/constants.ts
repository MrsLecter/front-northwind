export enum AppUrlEnum {
  DASHBOARD = "/dashboard",
  SUPPLIERS = "/suppliers",
  CURRENT_SUPPLIER = "/supplier/",
  PRODUCTS = "/products",
  ORDERS = "/orders",
  EMPLOYEES = "/employees",
  CURRENT_EMPLOYEE = "/employee/",
  CUSTOMERS = "/customers",
  SEARCH = "/search",
}

export const CELL_IMG_URL = (name: string) =>
  `https://avatars.dicebear.com/v2/initials/${name}.svg`;

export const SUPPLIERS_HEADERS = [
  "Company",
  "Contact",
  "Title",
  "City",
  "Country",
];

export const EMPLOYEES_HEADERS = ["Name", "Title", "City", "Phone", "Countrty"];

const BASE_URL = "https://northwind-yulia.onrender.com";

export const PAGE_URLS = {
  suppliers: `${BASE_URL}/pages/suppliers/`,
  products: `${BASE_URL}/pages/products/`,
  orders: `${BASE_URL}/pages/orders/`,
  employees: `${BASE_URL}/pages/employees/`,
  customers: `${BASE_URL}/pages/customers/`,
};

export const DETAIL_URLS = {
  supplier: `${BASE_URL}/item/supplier/`,
  product: `${BASE_URL}/item/product/`,
  order: `${BASE_URL}/item/order/`,
  employee: `${BASE_URL}/item/employee/`,
  customer: `${BASE_URL}/item/customer/`,
};

export const SEARCH_URL = {
  search_products: `${BASE_URL}/search/products/`,
  search_customers: `${BASE_URL}/search/customers/`,
};

export const SUPPLIER_INFO = [
  "id",
  "Company Name",
  "Contact Name",
  "Contact Title",
  "Address",
  "City",
  "Region",
  "Postal Code",
  "Country",
  "Phone",
  "Fax",
  "Home Page",
];
