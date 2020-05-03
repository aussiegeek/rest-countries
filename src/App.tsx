import React, { ReactElement } from "react";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "./theme";
import Routes from "./routes/Routes";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";

function App(): ReactElement {
  return (
    <div>
      <ThemeProvider theme={LightTheme}>
        <Header />
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
