import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./component/styles/theme";
import "./component/styles/index.css";
import RoutesApp from "./component/routes/RoutesApp";

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <RoutesApp />
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
