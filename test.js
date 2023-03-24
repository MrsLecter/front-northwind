const ddd = {
  SupplierID: 1,
  CompanyName: "Exotic Liquids",
  ContactName: "Charlotte Cooper",
  ContactTitle: "Purchasing Manager",
  Address: "49 Gilbert St.",
  City: "London",
  Region: null,
  PostalCode: "EC1 4SD",
  Country: "UK",
  Phone: "(171) 555-2222",
  Fax: null,
  HomePage: null,
};

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
];

const obj = {
};
obj[SUPPLIER_INFO[0]] = ddd.SupplierID;
obj[SUPPLIER_INFO[1]] = ddd.CompanyName;