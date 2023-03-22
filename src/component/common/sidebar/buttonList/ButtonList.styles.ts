import styled from "styled-components";

export const StyledButtonList = styled.div`
  width: 240px;
  height: calc(100% - 56px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const StyledList = styled.ul`
  position: relative;
  width: 240px;
  list-style-type: none;
  margin: 0px;
  font-size: 12px;
  padding: 12px 0px 0px 0px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text.second_light};

  .material-symbols-outlined {
    font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 48;
  }
  & li:nth-child(1) {
    margin-top: 12px;
  }

  & li:nth-child(2) {
    .material-symbols-outlined {
      font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
    }
  }

  & li {
    width: 100%;
    height: 40px;
    padding: 8px 12px;
    font-size: 16px;
    text-transform: none;
  }

  & li:hover {
    background-color: ${({ theme }) => theme.button.hovered};
  }

  & li span {
    width: 36px;
    font-size: 24px;
  }

  & li a,
  & li a:hover,
  & li a:visited {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.text.sidebar};
  }
`;
export const StyledTitle = styled.div`
  width: 240px;
  height: 40px;
  padding: 12px;
`;
