import styled from "styled-components";

interface IFooterProps {
  currentPage: string;
  totalPages: string;
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
