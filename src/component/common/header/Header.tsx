import React from "react";
import styled from "styled-components";
import WrapperModal from "../../wrappers/wrapperModal/WrapperModal";
import ButtonMenu from "./buttonMenu/ButtonMenu";
import Clock from "./clock/Clock";
import LinksMenu from "./linksMenu/LinksMenu";

interface HeaderProps {
  toggleSidebar: () => void;
  isActive: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, isActive }) => {
  console.log("render header");
  return (
    <StyledHeader active={isActive}>
      <ButtonMenu clickHandler={toggleSidebar} />
      <Clock />
      <LinksMenu />
    </StyledHeader>
  );
};

const StyledHeader = styled.header<{ active: boolean }>`
  position: fixed;
  width: inherit;
  /* width: ${(props) => (props.active ? "calc(100% - 240px)" : "100%")}; */
  height: 55px;
  padding: 1px 12px 0px 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.background.light};
  box-shadow: 0px 0.5px 2px ${({ theme }) => theme.table.border};

  @media (max-width: 1023px) {
    padding: 0px;
  }
`;

export default Header;
