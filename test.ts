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

// interface ISupplierInfo {
//   SupplierID: number,
//   CompanyName: string,
//   ContactName: string,
//   ContactTitle: string,
//   Address: string,
//   City: string,
//   Region: string | null,
//   PostalCode: string,
//   Country: string,
//   Phone: string,
//   Fax: string |  null,
//   HomePage: string | null,
// }

const SUPPLIER_INFO = [
  ,
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

enum SUPPLIER_RESPONSE_ENUM {
  CompanyName = "Company Name",
  ContactName = "Contact Name",
  ContactTitle = "Contact Title",
  Address = "Address",
  City = "City",
  Region = "Region",
  PostalCode = "Postal Code",
  Country = "Country",
  Phone = "Phone",
  Fax = "Fax",
  HomePage = "Home Page",
}

const getSupplierInfoFiltered = (info) => {
  const filteredFields = [];
  for (const [key, value] of Object.entries(SUPPLIER_RESPONSE_ENUM)) {
    console.log(`${key}: ${value}`);
  }
};
getSupplierInfoFiltered(ddd);
const amountItem = Object.values(ddd).length - 1;
