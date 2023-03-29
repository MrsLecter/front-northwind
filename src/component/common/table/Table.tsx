import styled, { css } from "styled-components";
import { StyledStandartTable } from "./Table.styles";

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
