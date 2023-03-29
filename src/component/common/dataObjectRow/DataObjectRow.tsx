import { Link } from "react-router-dom";
import styled from "styled-components";

interface IDataObjectRowProps {
  data: [string, string | number];
  isPrice?: boolean;
}

export const DataObjectRow: React.FC<IDataObjectRowProps> = ({
  data,
  isPrice = false,
}) => {
  return (
    <StyledObjectRow>
      <div>{data[0]}</div>
      <div>{isPrice ? "$" + Number(data[1]).toFixed(2) : data[1]}</div>
    </StyledObjectRow>
  );
};

interface IDataObjectLinkProps {
  data: [string, string | number];
  link: string | number;
  handleChange: () => void;
}

export const DataObjectLink: React.FC<IDataObjectLinkProps> = ({
  data,
  link,
  handleChange,
}) => {
  return (
    <StyledObjectRow onClick={handleChange}>
      <div>{data[0]}</div>
      <div>
        <Link to={String(link)}>{data[1]}</Link>
      </div>
    </StyledObjectRow>
  );
};

const StyledObjectRow = styled.div`
  width: 100%;

  margin-bottom: 12px;
  div {
    min-height: 24px;

    a {
      color: ${({ theme }) => theme.text.links};
      text-decoration: none;
    }
  }

  div:first-child {
    font-weight: 700;
    margin-bottom: 8px;
  }
`;
