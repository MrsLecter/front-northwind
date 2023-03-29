import styled from "styled-components";
import Pagination from "rc-pagination";
import "./pagination.styles.css";

interface IFooterProps {
  currentPage: number;
  totalPages: number;
  handleChangePage: (page: number) => void;
}

const Footer: React.FC<IFooterProps> = ({
  currentPage,
  totalPages,
  handleChangePage,
}) => {
  console.log("Footer: totalPages", totalPages, "currentPage", currentPage);
  return (
    <StyledFooter>
      <Pagination
        defaultCurrent={1}
        onChange={(page) => handleChangePage(page)}
        current={currentPage}
        total={totalPages * 10}
        hideOnSinglePage={true}
      />
      <StyledPageNav>
        Page&nbsp;{currentPage}&nbsp;of&nbsp;{totalPages}
      </StyledPageNav>
    </StyledFooter>
  );
};

export const StyledPageNav = styled.div`
  margin-top: 6px;
  margin-right: -8px;
  width: 71.8px;
  height: 24px;
  font-size: 12.8px;
`;

export const StyledFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: inherit;
  height: 67px;
  padding: 12px 26px;
  border-top: 1px solid ${({ theme }) => theme.table.border};
  background-color: ${({ theme }) => theme.table.background};
  border: 1px solid ${({ theme }) => theme.table.border};
`;

export default Footer;
