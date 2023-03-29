import { useState } from "react";
import styled from "styled-components";
import tableService from "../../../api/table-service";
import {
  ICustomersSearchObject,
  IProductsSearchObject,
} from "../../types/commonTypes";
import WrapperSearch from "../../wrappers/wrapperSearch/WrapperSearch";
import {
  ResultCustomersItem,
  ResultProductsItem,
} from "./resultItem/resultItem";

const Search: React.FC = () => {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [productTable, checkProductTable] = useState<boolean>(true);
  const [customersTable, checkCustomersTable] = useState<boolean>(false);
  const [searchProductsResults, setSearchProductsResuts] = useState<
    IProductsSearchObject[]
  >([]);
  const [searchCustomersResults, setSearchCustomersResuts] = useState<
    ICustomersSearchObject[]
  >([]);

  const toggleRadio = () => {
    checkCustomersTable(!customersTable);
    checkProductTable(!productTable);
  };

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log("search", e.currentTarget.value);
      setLoading(true);
      const searchResponse = await tableService.getSearchResult({
        searchString: e.currentTarget.value,
        searchTable: productTable ? "products" : "customers",
      });
      console.log("search", searchResponse);
      if (searchResponse.status === 200) {
        if (productTable)
          setSearchProductsResuts(
            searchResponse.data.data as IProductsSearchObject[]
          );
        if (customersTable)
          setSearchCustomersResuts(
            searchResponse.data.data as ICustomersSearchObject[]
          );
        setLoading(false);
      } else {
        setError(true);
      }
    }
  };

  return (
    <WrapperSearch>
      <StyledSearchHeader>Search Database</StyledSearchHeader>
      <StyledSearchPanel>
        <span className="material-symbols-outlined">search</span>
        <StyledSearchInput
          onKeyDown={(e) => handleSearch(e)}
          type="text"
          placeholder="Enter keyword..."
        />
      </StyledSearchPanel>
      <StyledSearchHeader>Tables</StyledSearchHeader>
      <StyledRadioPanel>
        <label>
          Products
          <input
            type="radio"
            checked={productTable}
            onChange={() => toggleRadio()}
          />
          <span></span>
        </label>
        <label>
          Customers
          <input
            type="radio"
            checked={customersTable}
            onChange={() => toggleRadio()}
          />
          <span></span>
        </label>
      </StyledRadioPanel>
      <StyledResultsHeader>Search Results</StyledResultsHeader>
      <SearchReultsOutput>
        {(!searchProductsResults || !searchCustomersResults) && (
          <p>No results</p>
        )}
        {productTable &&
          searchProductsResults.map((item, index) => {
            return (
              <ResultProductsItem
                id={item.id}
                count={index + 1}
                header={item.name}
                quantity={item.quantPerUnit}
                price={item.price}
                stock={item.stock}
              />
            );
          })}
        {customersTable &&
          searchCustomersResults.map((item, index) => {
            return (
              <ResultCustomersItem
                id={item.id}
                contact={item.contact}
                count={index + 1}
                header={item.name}
                title={item.title}
                phone={item.phone}
              />
            );
          })}
      </SearchReultsOutput>
    </WrapperSearch>
  );
};
const StyledSearchHeader = styled.p`
  font-weight: 700;
  font-size: 16px;
  margin-top: 0px;
  margin-bottom: 8px;
`;

const StyledSearchInput = styled.input`
  float: left;
  width: 50%;
  padding: 8px 12px 8px 40px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.input.border_hovered};
  border-radius: 4px;

  &:focus {
    border: 2px solid ${({ theme }) => theme.input.focus};
    outline: 2px solid ${({ theme }) => theme.input.focus};
  }
`;

const StyledSearchPanel = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  margin-top: 12px;
  margin-bottom: 12px;

  span {
    position: absolute;
    top: 8px;
    left: 8px;
  }
`;

const StyledRadioPanel = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 14px;

  label:nth-child(1) {
    margin-right: 12px;
  }

  label {
    display: block;
    padding-left: 28px;
    margin-bottom: 10px;
    cursor: pointer;
    font-size: 16px;
    user-select: none;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border: 1px solid ${({ theme }) => theme.input.border};
    /* background-color: red; */
    border-radius: 50%;
  }

  label:nth-child(2) span {
    left: 106px;
  }

  label:hover input ~ span {
    border: 1px solid ${({ theme }) => theme.input.border_hovered};
  }

  label input:checked ~ span {
    background-color: ${({ theme }) => theme.input.checkmark};
  }

  span:after {
    content: " ";
    position: absolute;
    /* display: none; */
    top: 4px;
    left: 4px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({ theme }) => theme.background.light};
  }

  input:checked ~ .span:after {
    display: block;
  }
`;

const StyledResultsHeader = styled.div`
  font-weight: 700;
  font-size: 18px;
  margin-top: 12px;
  margin-bottom: 24px;
`;

const SearchReultsOutput = styled.div`
  margin-top: -7px;
  p {
    font-size: 16px;
    font-weight: 400;
  }
`;

export default Search;
