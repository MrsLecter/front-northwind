import styled from "styled-components";
import ButtonMenu from "./buttonMenu/ButtonMenu";
import Clock from "./clock/Clock";
import LinksMenu from "./linksMenu/LinksMenu";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <StyledHeader>
      <ButtonMenu clickHandler={toggleSidebar} />
      <Clock />
      <LinksMenu />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  height: 55px;
  padding: 0px 0px 0px 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.background.light};

  @media (max-width: 1023px) {
    padding: 0px;
  }
`;

export default Header;
