import { useState } from "react";
import styled from "styled-components";
import Sidebar from "../../common/sidebar/Sidebar";
import WrapperMain from "../WrapperMain/WrapperMain";

interface WrapperPageProps {
  children: React.ReactNode;
}

const WrapperPage: React.FC<WrapperPageProps> = ({ children }) => {
  const [isActiveSidebar, toggleSidebar] = useState<boolean>(true);
  return (
    <StyledWrapperPage>
      <Sidebar isActive={isActiveSidebar} />
      <WrapperMain
        isActive={isActiveSidebar}
        toggleSidebar={() => toggleSidebar(!isActiveSidebar)}
      >
        {children}
      </WrapperMain>
    </StyledWrapperPage>
  );
};

const StyledWrapperPage = styled.div`
  height: 100vh;
  /* min-height: 100%; */
  /* background-color: lightcoral; */
`;

export default WrapperPage;
