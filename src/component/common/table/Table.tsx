import styled, { css } from "styled-components";

export const StyledStandartTable = styled.table<{ hasImg: boolean }>`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid ${({ theme }) => theme.table.border};
  background-color: ${({ theme }) => theme.table.background};

  a,
  a:hover,
  a:visited {
    text-decoration: none;
    color: ${({ theme }) => theme.table.links};
  }

  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  th,
  td {
    height: 40px;
    padding: 8px 12px;
    text-align: left;
  }

  tbody > tr:nth-child(odd) {
    background-color: ${({ theme }) => theme.table.row};
  }

  tbody > tr:hover {
    background-color: ${({ theme }) => theme.table.row_hovered};
  }

  @media (max-width: 1023px) {
    display: block;
    width: 100%;

    img {
      width: 96px;
      height: 96px;
      border-radius: 50%;
      margin: 0 auto;
    }

    tbody > tr:nth-child(odd) {
      background-color: ${({ theme }) => theme.table.background};
    }

    thead {
      display: none;
    }

    tbody,
    tr,
    td {
      display: block;
      width: 100%;
    }

    td,
    th {
      height: 49px;
      font-size: 16px;
      font-weight: 600;
      padding: 14.35px 16px;
    }

    tr {
      border: 1px solid ${({ theme }) => theme.table.border};
    }

    td {
      font-weight: 400;
      border: 1px solid ${({ theme }) => theme.table.border};
      text-align: right;
      padding-left: 50%;
      text-align: right;
      position: relative;
    }

    td::before {
      content: attr(data-label);
      position: absolute;
      left: 0;
      width: 50%;
      font-weight: 600;
      text-align: left;
      padding-left: 15px;
    }

    ${(props) =>
      props.hasImg &&
      css`
        td:first-child {
          padding: 0px;
          border-bottom: none;
          height: 120px;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            margin: 0px;
          }
        }

        td:nth-child(2) {
          border-top: none;
        }
      `}
  }
`;

export const StandartTable: React.FC<{
  img?: boolean;
  children: React.ReactNode;
}> = ({ img = false, children }) => {
  return (
    <StyledStandartTable hasImg={img}>
      {/* <thead>
        {HEADERS_SET.orders.map((item) => (
          <th>{item}</th>
        ))}
      </thead>
      <tbody> */}
      {children}
      {/* <tr>
          <td data-label={HEADERS_SET.orders_small[0]}>0</td>
        </tr> */}
      {/* </tbody> */}
    </StyledStandartTable>
  );
};
