import styled from "styled-components";

export const StyledDetailedHeader = styled.div`
  width: 100%;
  height: 48px;
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.table.border};
  border-bottom: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  background-color: ${({ theme }) => theme.background.light};

  .material-symbols-outlined {
    font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 48;
  }
  span {
    margin-right: 8px;
  }
`;

export const StyledDetailedFooter = styled.div`
  width: 100%;
  padding: 24px 24px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.table.border};
  border-top: none;
  background-color: ${({ theme }) => theme.background.light};

  button {
    height: 42px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    padding: 8px 16px;
    color: ${({ theme }) => theme.text.light};
    background-color: ${({ theme }) => theme.button.red};
  }
`;

export const StyledDetailedData = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 24px 24px 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.table.border};

  p {
    width: 100%;
    text-align: left;
  }
`;

export const StyledDetailedContainer = styled.div`
  width: 100%;
  padding: 24px 24px 12px 24px;
  border: 1px solid ${({ theme }) => theme.table.border};
  background-color: ${({ theme }) => theme.background.light};

  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;
export const StyledColumn = styled.div`
  float: left;
  width: 50%;
  height: 100%;
`;
