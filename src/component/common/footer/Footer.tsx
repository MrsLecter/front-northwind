import styled from "styled-components";

interface IFooterProps {
  currentPage: number;
  totalPages: number;
}

const Footer: React.FC<IFooterProps> = ({ currentPage, totalPages }) => {
  return (
    <StyledFooter>
      <StyledPageNav>
        Page&nbsp;{currentPage}&nbsp;of&nbsp;{totalPages}
      </StyledPageNav>
    </StyledFooter>
  );
};

export const StyledPagination = styled.div`
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    padding: 8px 16px;
    margin: 0px 4px;
    border: 1px solid ${({ theme }) => theme.table.border};
    border-radius: 4px;
  }
`;

export const StyledPageNav = styled.div`
  width: 71.8px;
  height: 24px;
  font-size: 12.8px;
`;

export const StyledFooter = styled.div`
  width: inherit;
  height: 67px;
  padding: 12px 0px;
  border-top: 1px solid ${({ theme }) => theme.table.border};
  background-color: lightgreen;
`;

export default Footer;
