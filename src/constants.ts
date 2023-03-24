export enum AppUrlEnum {
  DASHBOARD = "/dashboard",
  SUPPLIERS = "/suppliers",
  CURRENT_SUPPLIER = "/supplier/",
  PRODUCTS = "/products",
  CURRENT_PRODUCT = "/product/",
  ORDERS = "/orders",
  CURRENT_ORDER = "/order/",
  EMPLOYEES = "/employees",
  CURRENT_EMPLOYEE = "/employee/",
  CUSTOMERS = "/customers",
  CURRENT_CUSTOMER = "/customer",
  SEARCH = "/search",
}

export const CELL_IMG_URL = (name: string) =>
  `https://avatars.dicebear.com/v2/initials/${name}.svg`;

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

const SUPPLIERS_HEADERS = ["Company", "Contact", "Title", "City", "Country"];
const SUPPLIERS_HEADERS_SMALL = [
  "Company",
  "Contact",
  "Title",
  "City",
  "Country",
];
const PRODUCTS_HEADERS = ["Name", "Qt per unit", "Price", "Stock", "Orders"];
const PRODUCTS_HEADERS_SMALL = ["Product", "Qpu", "Price", "Stock", "Orders"];
const ORDERS_HEADERS = [
  "Id",
  "Total Price",
  "Products",
  "Quantity",
  "Shipped",
  "Ship Name",
  "City",
  "Country",
];
const ORDERS_HEADERS_SMALL = [
  "Id",
  "Price",
  "Products",
  "Quantity",
  "Date",
  "Name",
  "City",
  "Country",
];
const EMPLOYEES_HEADERS = ["Name", "Title", "City", "Phone", "Countrty"];
const EMPLOYEES_HEADERS_SMALL = ["Name", "Title", "City", "Phone", "Country"];
const CUSTOMERS_HEADERS = ["Company", "Contact", "Title", "City", "Country"];
const CUSTOMERS_HEADERS_SMALL = [
  "Company",
  "Contact",
  "Title",
  "City",
  "Country",
];

const SUPPLIER_INFO = [
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
const PRODUCT_INFO = [
  "Product Name",
  "Supplier",
  "Quantity Per Unit",
  "Unit Price",
  "Units In Stock",
  "Units In Order",
  "Reorder Level",
  "Discontinued",
];
const ORDER_INFO = [
  "Customer Id",
  "Ship Name",
  "Total Products",
  "Total Quantity",
  "Total Price",
  "Total Discount",
  "Ship Via",
  "Freight",
  "Order Date",
  "Required Date",
  "Shipped Date",
  "Ship City",
  "Ship Region",
  "Ship Postal Code",
  "Ship Country",
];
const EMPLOYEE_INFO = [
  "id",
  "Name",
  "Tile",
  "Title of Courtesy",
  "Birth Date",
  "Hire Date",
  "Address",
  "City",
  "Postal Code",
  "Country",
  "Home Phone",
  "Extension",
  "Notes",
  "Resports To",
];
const CUSTOMER_INFO = [
  "Company Name",
  "Contact Name",
  "Contact Title",
  "Address",
  "City",
  "Postal Code",
  "Region",
  "Country",
  "Phone",
  "Fax",
];

export const HEADERS_SET = {
  suppliers: SUPPLIERS_HEADERS,
  suppliers_small: SUPPLIERS_HEADERS_SMALL,
  products: PRODUCTS_HEADERS,
  products_small: PRODUCTS_HEADERS_SMALL,
  orders: ORDERS_HEADERS,
  orders_small: ORDERS_HEADERS_SMALL,
  employees: EMPLOYEES_HEADERS,
  employees_small: EMPLOYEES_HEADERS_SMALL,
  customers: CUSTOMERS_HEADERS,
  customers_small: CUSTOMERS_HEADERS_SMALL,
};

export const HEADERS_DETAILED_SET = {
  supplier: SUPPLIER_INFO,
  product: PRODUCT_INFO,
  order: ORDER_INFO,
  employee: EMPLOYEE_INFO,
  customer: CUSTOMER_INFO,
};
