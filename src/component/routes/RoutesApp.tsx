import { Route, Routes } from "react-router-dom";
import { AppUrlEnum, PAGE_URLS } from "../../constants";
import Layout from "../layouts/Layout";
import CustomerDetailed from "../pages/customers/CustomerDetailed";
import Customers from "../pages/customers/Customers";
import Dashboard from "../pages/dashboard/Dashboard";
import EmployeeDetailed from "../pages/employees/EmployeeDetailed";
import Employees from "../pages/employees/Employees";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/home/Home";
import OrderDetailed from "../pages/orders/OrderDetailed";
import Orders from "../pages/orders/Orders";
import Products from "../pages/products/Products";
import ProductDetailed from "../pages/products/ProductsDetailed";
import Search from "../pages/search/Search";
import SupplierDetailed from "../pages/suppliers/SupplierDetailed";
import Suppliers from "../pages/suppliers/Suppliers";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} errorElement={<ErrorPage />} />
        <Route
          path={AppUrlEnum.DASHBOARD}
          element={<Dashboard />}
          errorElement={<ErrorPage />}
        />
        <Route
          path={AppUrlEnum.SUPPLIERS}
          element={<Suppliers />}
          errorElement={<ErrorPage />}
        />
        <Route
          path={AppUrlEnum.PRODUCTS}
          element={<Products />}
          errorElement={<ErrorPage />}
        />
        <Route
          path={AppUrlEnum.ORDERS}
          element={<Orders />}
          errorElement={<ErrorPage />}
        />
        <Route
          path={AppUrlEnum.EMPLOYEES}
          element={<Employees />}
          errorElement={<ErrorPage />}
        />
        <Route
          path={AppUrlEnum.CUSTOMERS}
          element={<Customers />}
          errorElement={<ErrorPage />}
        />
        <Route
          path={AppUrlEnum.SEARCH}
          element={<Search />}
          errorElement={<ErrorPage />}
        />
        <Route
          path={AppUrlEnum.CURRENT_SUPPLIER + ":id"}
          element={<SupplierDetailed />}
          errorElement={<ErrorPage />}
        />
        <Route
          path={AppUrlEnum.CURRENT_PRODUCT + ":id"}
          element={<ProductDetailed />}
          errorElement={<ErrorPage />}
        />
        <Route
          path={AppUrlEnum.CURRENT_ORDER + ":id"}
          element={<OrderDetailed />}
        />
        <Route
          path={AppUrlEnum.CURRENT_EMPLOYEE + ":id"}
          element={<EmployeeDetailed />}
        />
        <Route
          path={AppUrlEnum.CURRENT_CUSTOMER + ":id"}
          element={<CustomerDetailed />}
          errorElement={<ErrorPage />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default RoutesApp;
