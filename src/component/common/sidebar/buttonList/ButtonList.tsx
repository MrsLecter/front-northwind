import { Link } from "react-router-dom";
import { AppUrlEnum } from "../../../../coonstants";
import { StyledButtonList, StyledList } from "./ButtonList.styles";

const ButtonList: React.FC = () => {
  return (
    <StyledButtonList>
      <StyledList>
        <p>general</p>
        <li>
          <Link to={"/"}>
            <span className="material-symbols-outlined">home</span>Home
          </Link>
        </li>
        <li>
          <Link to={AppUrlEnum.DASHBOARD}>
            <span className="material-symbols-outlined">display_settings</span>
            Dashboard
          </Link>
        </li>
      </StyledList>
      <StyledList>
        <p>backoffice</p>
        <li>
          <Link to={AppUrlEnum.SUPPLIERS}>
            <span className="material-symbols-outlined">inventory_2</span>
            Suppliers
          </Link>
        </li>
        <li>
          <Link to={AppUrlEnum.PRODUCTS}>
            <span className="material-symbols-outlined">
              production_quantity_limits
            </span>
            Products
          </Link>
        </li>
        <li>
          <Link to={AppUrlEnum.ORDERS}>
            <span className="material-symbols-outlined">shopping_cart</span>
            Orders
          </Link>
        </li>
        <li>
          <Link to={AppUrlEnum.EMPLOYEES}>
            <span className="material-symbols-outlined">badge</span>
            Employees
          </Link>
        </li>
        <li>
          <Link to={AppUrlEnum.CUSTOMERS}>
            <span className="material-symbols-outlined">group</span>
            Customers
          </Link>
        </li>
        <li>
          <Link to={AppUrlEnum.SEARCH}>
            <span className="material-symbols-outlined">search</span>
            Search
          </Link>
        </li>
      </StyledList>
    </StyledButtonList>
  );
};

export default ButtonList;
