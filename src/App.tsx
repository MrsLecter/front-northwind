import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./component/styles/theme";
import "./component/styles/index.css";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Dashboard from "./component/pages/dashboard/Dashboard";
import Home from "./component/pages/home/Home";
import Error from "./component/pages/ErrorPage/ErrorPage";
import Layout from "./component/layouts/Layout";
import RoutesApp from "./component/routes/RoutesApp";

function App() {
  const [isActiveSidebar, toggleSidebar] = useState<boolean>(true);
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <RoutesApp />
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
