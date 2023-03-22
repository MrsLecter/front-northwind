import React from "react";
import { RouterProvider } from "react-router";
import router from "./component/routes/Routes";
import { ThemeProvider } from "styled-components";
import theme from "./component/styles/theme";
import "./component/styles/index.css";
function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
