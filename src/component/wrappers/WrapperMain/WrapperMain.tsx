import styled from "styled-components";
import Header from "../../common/header/Header";

interface WrapperMainProps {
  children: React.ReactNode;
  isActive: boolean;
  toggleSidebar: () => void;
}

const WrapperMain: React.FC<WrapperMainProps> = ({
  children,
  isActive,
  toggleSidebar,
}) => {
  return (
    <StyledWrapperMain isActive={isActive}>
      <Header toggleSidebar={toggleSidebar} />
      {children}
    </StyledWrapperMain>
  );
};

const StyledWrapperMain = styled.section<{ isActive: boolean }>`
  position: fixed;
  width: calc(100% - 240px);
  height: 100%;
  margin-left: 240px;
  background-color: ${({ theme }) => theme.background.grey};

  @media (max-width: 1023px) {
    width: ${(props) => (!!props.isActive ? "calc(100% - 240px)" : "100%")};
    margin-left: ${(props) => (!!props.isActive ? "240px" : "0px")};
  }
`;

export default WrapperMain;
