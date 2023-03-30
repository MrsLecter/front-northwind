import styled from "styled-components";

interface ButtonMenuProps {
  clickHandler: () => void;
}

const ButtonMenu: React.FC<ButtonMenuProps> = ({ clickHandler }) => {
  return (
    <StyledButtonMenu onClick={() => clickHandler()}>
      <span className="material-symbols-outlined">menu</span>
    </StyledButtonMenu>
  );
};

const StyledButtonMenu = styled.button`
  display: none;
  width: 48px;
  height: 55px;
  padding: 0px;
  border: none;
  background-color: ${({ theme }) => theme.background.light};
  cursor: pointer;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1023px) {
    display: block;
  }
`;

export default ButtonMenu;
