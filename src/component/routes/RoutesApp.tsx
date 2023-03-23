import { Route, Routes } from "react-router-dom";
import { AppUrlEnum } from "../../constants";
import Layout from "../layouts/Layout";
import Customers from "../pages/customers/Customers";
import Dashboard from "../pages/dashboard/Dashboard";
import DetailedData from "../pages/detailedData/DetailedData";
import Employees from "../pages/employees/Employees";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/home/Home";
import Orders from "../pages/orders/Orders";
import Products from "../pages/products/Products";
import Search from "../pages/search/Search";
import Suppliers from "../pages/suppliers/Suppliers";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={AppUrlEnum.DASHBOARD} element={<Dashboard />} />
        <Route path={AppUrlEnum.SUPPLIERS} element={<Suppliers />} />
        <Route path={AppUrlEnum.PRODUCTS} element={<Products />} />
        <Route path={AppUrlEnum.ORDERS} element={<Orders />} />
        <Route path={AppUrlEnum.EMPLOYEES} element={<Employees />} />
        <Route path={AppUrlEnum.CUSTOMERS} element={<Customers />} />
        <Route path={AppUrlEnum.SEARCH} element={<Search />} />
        <Route
          path={AppUrlEnum.CURRENT_SUPPLIER + ":id"}
          element={<DetailedData />}
        />
        <Route
          path={AppUrlEnum.CURRENT_EMPLOYEE + ":id"}
          element={<DetailedData />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default RoutesApp;
