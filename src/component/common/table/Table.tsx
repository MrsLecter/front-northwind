import styled from "styled-components";
import { CELL_IMG_URL } from "../../../constants";
import { Link } from "react-router-dom";

interface ITableProps<T = any> {
  headers: string[];
  data: T[];
  way: string;
}

export const TableWithIcon: React.FC<ITableProps> = ({
  headers,
  data,
  way,
}) => {
  return (
    <>
      <StyledTableLarge>
        <thead>
          <tr>
            <th></th>
            {headers &&
              headers.map((item) => {
                return <th>{item}</th>;
              })}
          </tr>
        </thead>
        <tbody>
          {data.map((object) => {
            return (
              <tr>
                {Object.values(object).map((value, index) => {
                  if (index === 0) {
                    return (
                      <td>
                        <img
                          src={CELL_IMG_URL(object.name.replace(" ", "-"))}
                          alt="imageCell.svg"
                        />
                      </td>
                    );
                  } else if (index === 1) {
                    return (
                      <td>
                        <Link to={way + object.id}>{value as string}</Link>
                      </td>
                    );
                  } else {
                    return <td>{value as any}</td>;
                  }
                })}
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </StyledTableLarge>
      <StyledTableSmall>
        <tbody>
          {data.map((object) => {
            return (
              <>
                {Object.values(object).map((value, index) => {
                  if (index === 0) {
                    return (
                      <tr style={{ borderBottom: "none", borderTop: "none" }}>
                        <th colSpan={2} style={{ textAlign: "center" }}>
                          <img
                            src={CELL_IMG_URL(object.name.replace(" ", "-"))}
                            alt="imageCell.svg"
                          />
                        </th>
                      </tr>
                    );
                  } else if (index === 1) {
                    return (
                      <tr style={{ borderTop: "none" }}>
                        <th>{headers[index - 1]}</th>
                        <td>
                          <Link to={way + object.id}>{value as string}</Link>
                        </td>
                      </tr>
                    );
                  } else if (index === headers.length) {
                    return (
                      <tr
                        style={{
                          borderBottomWidth: "4px",
                        }}
                      >
                        <th>{headers[index - 1]}</th>
                        <td>{value as any}</td>
                      </tr>
                    );
                  } else {
                    return (
                      <tr>
                        <th>{headers[index - 1]}</th>
                        <td>{value as any}</td>
                      </tr>
                    );
                  }
                })}
              </>
            );
          })}
        </tbody>
      </StyledTableSmall>
    </>
  );
};

export const Table: React.FC<ITableProps> = ({ headers, data, way }) => {
  return (
    <>
      <StyledTableLarge>
        <thead>
          <tr>
            <th></th>
            {headers &&
              headers.map((item) => {
                return <th>{item}</th>;
              })}
          </tr>
        </thead>
        <tbody>
          {data.map((object) => {
            return (
              <tr>
                {Object.values(object).map((value, index) => {
                  if (index === 0) {
                    return (
                      <td>
                        <img
                          src={CELL_IMG_URL(object.name.replace(" ", "-"))}
                          alt="imageCell.svg"
                        />
                      </td>
                    );
                  } else if (index === 1) {
                    return (
                      <td>
                        <Link to={way + object.id}>{value as string}</Link>
                      </td>
                    );
                  } else {
                    return <td>{value as any}</td>;
                  }
                })}
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </StyledTableLarge>
    </>
  );
};

const StyledTable = styled.table`
  width: inherit;
  border-collapse: collapse;
  border: 1px solid ${({ theme }) => theme.table.border};
  overflow: hidden;
  background-color: ${({ theme }) => theme.table.background};
  th {
    display: table-cell;
    text-align: left;
    font-weight: bold;
    padding: 8px 12px;
    vertical-align: middle;
  }

  td {
    display: table-cell;
    padding: 8px 12px;
    text-align: left;
    vertical-align: middle;

    a,
    a:hover,
    a:visited {
      text-decoration: none;
      color: ${({ theme }) => theme.table.links};
    }
  }

  tr {
    font-size: 16px;
    width: inherit;
    height: 40px;
    padding: 8px 12px;
  }

  tbody > tr:hover {
    background-color: ${({ theme }) => theme.table.row_hovered};
  }
`;

const StyledTableLarge = styled(StyledTable)`
  display: block;
  /* width: inherit;
  border-collapse: collapse;
  border: 1px solid ${({ theme }) => theme.table.border};
  overflow: hidden;
  background-color: ${({ theme }) => theme.table.background}; */

  tbody > tr:nth-child(odd) {
    background-color: ${({ theme }) => theme.table.row};
  }

  /* th {
    display: table-cell;
    text-align: left;
    font-weight: bold;
    padding: 8px 12px;
    vertical-align: middle;
  } */

  td {
    /* display: table-cell;
    padding: 8px 12px;
    text-align: left;
    vertical-align: middle; */

    img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
    }

    /* a,
    a:hover,
    a:visited {
      text-decoration: none;
      color: ${({ theme }) => theme.table.links};
    } */
  }

  thead > tr:nth-child(1),
  thead > tr:last-child {
    th:nth-child(1) {
      width: 48px;
      height: 40px;
    }
  }

  /* tr {
    font-size: 16px;
    width: inherit;
    height: 40px;
    padding: 8px 12px;
  } */

  /* tbody > tr:hover {
    background-color: ${({ theme }) => theme.table.row_hovered};
  } */

  tbody > tr td:last-child {
    width: 2.97%;
    height: 40px;
    background-color: ${({ theme }) => theme.table.background};
  }

  @media (max-width: 1023px) {
    display: none;
  }
`;

const StyledTableSmall = styled(StyledTable)`
  border-collapse: collapse;
  border-left: none;
  border-right: none;
  display: none;
  padding: 0px;
  tr {
    border: 1px solid ${({ theme }) => theme.table.border};
  }

  img {
    width: 96px;
    height: 96px;
    border-radius: 50%;
  }
  th {
    padding: 12px 16px;
    width: 100%;
  }
  td {
    /* width: 50%; */
    padding: 12px 16px;
    text-align: right;
    /* display: table-cell;
    padding: 8px 12px;
    text-align: left;
    vertical-align: middle; */
  }

  @media (max-width: 1023px) {
    display: block;
  }
`;
