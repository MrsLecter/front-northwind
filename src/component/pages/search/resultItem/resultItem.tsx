import styled from "styled-components";
import { AppUrlEnum } from "../../../../constants";

interface IResultProductsItemProps {
  id: number;
  count: number;
  header: string;
  quantity: string;
  price: number;
  stock: number;
}

interface IResultCustomersItemProps {
  id: string;
  count: number;
  header: string;
  contact: string;
  title: string;
  phone: string;
}

export const ResultCustomersItem: React.FC<IResultCustomersItemProps> = ({
  id,
  count,
  header,
  contact,
  title,
  phone,
}) => {
  return (
    <StyledResultItem>
      <a href={AppUrlEnum.CURRENT_CUSTOMER + id}>{header}</a>
      <p>
        #{count}, Contact: {contact}, Title: {title}, Phone: {phone}
      </p>
    </StyledResultItem>
  );
};

export const ResultProductsItem: React.FC<IResultProductsItemProps> = ({
  id,
  count,
  header,
  quantity,
  price,
  stock,
}) => {
  return (
    <StyledResultItem>
      <a href={AppUrlEnum.CURRENT_PRODUCT + id}>{header}</a>
      <p>
        #{count}, Quantity Per Unit: {quantity}, Price: {price}, Stock: {stock}
      </p>
    </StyledResultItem>
  );
};

const StyledResultItem = styled.div`
  width: 100%;
  & p {
    font-size: 14px;
    margin-top: 4px;
    color: ${({ theme }) => theme.text.second_light};
  }

  & > a {
    font-size: 16px;
    text-decoration: none;
    color: ${({ theme }) => theme.table.links};
  }
`;
