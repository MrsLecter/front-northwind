import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Sidebar from "../common/sidebar/Sidebar";
import useWindowDimensions from "../hooks/useWindowDimensions";
import WrapperMain from "../wrappers/WrapperMain/WrapperMain";

const Layout = () => {
  const [isActiveSidebar, toggleSidebar] = useState<boolean>(true);
  const { height, width } = useWindowDimensions();
  useEffect(() => {
    if (width! < 1023 && !!isActiveSidebar) {
      toggleSidebar(false);
    }
    if (width! > 1023 && !!isActiveSidebar === false) {
      toggleSidebar(true);
    }
  }, [width]);

  return (
    <div>
      <Sidebar isActive={isActiveSidebar} />
      <WrapperMain
        isActive={isActiveSidebar}
        toggleSidebar={() => toggleSidebar(!isActiveSidebar)}
      >
        <Outlet />
      </WrapperMain>
    </div>
  );
};

export default Layout;
