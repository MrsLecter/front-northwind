import styled from "styled-components";

const Logo: React.FC = () => {
  return (
    <StyledLogo>
      <span>Northwind</span>&nbsp;Traders
    </StyledLogo>
  );
};

const StyledLogo = styled.header`
  width: 100%;
  height: 56px;
  padding: 0px 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: normal;
  font-size: 16px;
  color: ${({ theme }) => theme.text.light};
  background-color: ${({ theme }) => theme.background.darkblue};

  span {
    font-weight: 900;
  }
`;

export default Logo;
