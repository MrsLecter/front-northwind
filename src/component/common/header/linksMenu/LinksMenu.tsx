import { useState } from "react";
import styled from "styled-components";
import WrapperModal from "../../../wrappers/wrapperModal/WrapperModal";

const LinksMenu: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <StyledLinksMenu>
      <StyledButton active={isActive} onClick={() => setIsActive(!isActive)}>
        <span className="material-symbols-outlined">menu</span>
        &nbsp;SQLite&nbsp;Links&nbsp;
        <span className="material-symbols-outlined">keyboard_arrow_down</span>
      </StyledButton>
      <StyledButtonMin active={isActive} onClick={() => setIsActive(!isActive)}>
        <span className="material-symbols-outlined">more_vert</span>
      </StyledButtonMin>
      {isActive && (
        <WrapperModal
          top={58}
          width={192}
          height={122}
          backClickHandler={() => setIsActive(false)}
        >
          <StyledContent>
            <a
              href="https://blog.cloudflare.com/introducing-d1/"
              target="_blank"
            >
              <span className="material-symbols-outlined">link</span>Introducing
              D1
            </a>
            <a href="https://www.sqlite.org/lang.html" target="_blank">
              <span className="material-symbols-outlined">link</span>SQLite SQL
              Flavour
            </a>
            <a
              href="https://developers.cloudflare.com/workers/learning/using-durable-objects/"
              target="_blank"
            >
              <span className="material-symbols-outlined">link</span>Durable
              Objects
            </a>
          </StyledContent>
        </WrapperModal>
      )}
    </StyledLinksMenu>
  );
};

const StyledLinksMenu = styled.div`
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const StyledButton = styled.button<{ active: boolean }>`
  display: block;
  width: 169.25px;
  height: 40px;
  padding: 8px 12px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border: none;
  color: ${({ theme, active }) =>
    active ? theme.text.lighted : theme.text.main};
  background-color: ${({ theme }) => theme.background.light};

  &:hover {
    cursor: pointer;
  }

  span {
    color: ${({ theme, active }) =>
      active ? theme.text.lighted : theme.text.main};
  }

  @media (max-width: 1023px) {
    display: none;
  }
`;

const StyledButtonMin = styled.button<{ active: boolean }>`
  display: none;
  width: 48px;
  height: 56px;
  padding: 8px 12px;
  border: none;
  background-color: ${({ theme }) => theme.background.light};

  &:hover {
    cursor: pointer;
  }

  span {
    color: ${({ theme, active }) =>
      active ? theme.text.lighted : theme.text.main};
  }

  @media (max-width: 1023px) {
    display: block;
  }
`;

const StyledContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.background.light};
  box-shadow: 0px 3px 5px grey;

  a,
  a:hover,
  a:visited {
    text-decoration: none;
    color: ${({ theme }) => theme.text.main};
    cursor: pointer;
  }

  a {
    display: block;
    width: 193.25px;
    height: 40px;
    padding: 8px 12px;
    font-size: 14px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  a > span {
    margin-right: 8px;
  }
`;

export default LinksMenu;
