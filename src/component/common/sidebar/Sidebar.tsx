import React from "react";
import styled, { css } from "styled-components";
import ButtonList from "./buttonList/ButtonList";
import Logo from "./logo/Logo";

interface SidebarProps {
  isActive: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isActive }) => {
  console.log("render sidebar");
  return (
    <StyledSidebar active={!!isActive || false}>
      <Logo />
      <ButtonList />
    </StyledSidebar>
  );
};

const StyledSidebar = styled.nav<{ active: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: ${(props) => (props.active ? "240px" : "0px")};
  height: 100vh; //%
  /* min-height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.background.blue};
  overflow-x: hidden;
  transition: 2ms;
  @media (min-width: 1023px) {
    width: 240px;
    ${(props) =>
      !!props.active
        ? css`
            width: "240px";
          `
        : css`
            width: "0px";
          `};
  }

  @media (max-width: 1023px) {
    width: 0px;
    ${(props) =>
      !!props.active &&
      css`
        width: "240px";
      `};
  }
`;

export default Sidebar;
