import styled from "styled-components";

export const StyledWrapperTables = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
`;

export const StyledHeader = styled.div`
  width: 100%;
  height: 48px;
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.table.border};
  border-bottom: none;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.table.background};
`;

export const StyledPagination = styled.div`
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    padding: 8px 16px;
    margin: 0px 4px;
  }
`;
