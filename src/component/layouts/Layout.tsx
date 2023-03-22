import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Sidebar from "../common/sidebar/Sidebar";
import WrapperMain from "../wrappers/WrapperMain/WrapperMain";

const Layout = () => {
  const [isActiveSidebar, toggleSidebar] = useState<boolean>(true);

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
