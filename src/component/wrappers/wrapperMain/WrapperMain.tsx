import styled from "styled-components";
import Header from "../../common/header/Header";

interface WrapperMainProps {
  children: React.ReactNode;
  isActive: boolean;
  toggleSidebar: () => void;
}

const WrapperMain: React.FC<WrapperMainProps> = ({
  children,
  isActive = false,
  toggleSidebar,
}) => {
  return (
    <StyledWrapperMain isActive={isActive}>
      <Header isActive={isActive} toggleSidebar={toggleSidebar} />
      <StyledContainer active={isActive}>{children}</StyledContainer>
    </StyledWrapperMain>
  );
};

const StyledWrapperMain = styled.section<{ isActive: boolean }>`
  position: fixed;
  width: ${(props) => (props.isActive ? "calc(100% - 240px)" : "100%")};
  height: 100%;
  margin-left: 240px;
  background-color: ${({ theme }) => theme.background.grey};

  @media (max-width: 1023px) {
    width: ${(props) => (!!props.isActive ? "100%" : "100%")};
    margin-left: ${(props) => (!!props.isActive ? "240px" : "0px")};
  }
`;

const StyledContainer = styled.div<{ active: boolean }>`
  position: relative;
  width: 100%;
  margin-top: 60px;
  height: calc(100% - 55px);
  overflow: auto;
`;

export default WrapperMain;
