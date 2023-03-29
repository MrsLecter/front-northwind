import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 5;
  background: transparent;
`;

export const ModalDiv = styled.div<{
  width: number;
  height: number;
  top: number;
}>`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: ${(props) => props.top + "px"};
  right: 0px;
  width: ${(props) => props.width + "px"};
  height: ${(props) => props.height + "px"};
  z-index: 6;
  overflow: hidden;
  background-color: transparent;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
`;
