import { NavLink } from "react-router-dom";
import { AppUrlEnum } from "../../../../coonstants";
import { StyledButtonList, StyledList } from "./ButtonList.styles";

const ButtonList: React.FC = () => {
  return (
    <StyledButtonList>
      <StyledList>
        <p>general</p>
        <li>
          <NavLink to={"/"}>
            <span className="material-symbols-outlined">home</span>Home
          </NavLink>
        </li>
        <li>
          <NavLink to={AppUrlEnum.DASHBOARD}>
            <span className="material-symbols-outlined">display_settings</span>
            Dashboard
          </NavLink>
        </li>
      </StyledList>
      <StyledList>
        <p>backoffice</p>
        <li>
          <NavLink to={AppUrlEnum.SUPPLIERS}>
            <span className="material-symbols-outlined">inventory_2</span>
            Suppliers
          </NavLink>
        </li>
        <li>
          <NavLink to={AppUrlEnum.PRODUCTS}>
            <span className="material-symbols-outlined">
              production_quantity_limits
            </span>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to={AppUrlEnum.ORDERS}>
            <span className="material-symbols-outlined">shopping_cart</span>
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink to={AppUrlEnum.EMPLOYEES}>
            <span className="material-symbols-outlined">badge</span>
            Employees
          </NavLink>
        </li>
        <li>
          <NavLink to={AppUrlEnum.CUSTOMERS}>
            <span className="material-symbols-outlined">group</span>
            Customers
          </NavLink>
        </li>
        <li>
          <NavLink to={AppUrlEnum.SEARCH}>
            <span className="material-symbols-outlined">search</span>
            Search
          </NavLink>
        </li>
      </StyledList>
    </StyledButtonList>
  );
};

export default ButtonList;
