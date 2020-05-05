import React, { ReactElement } from "react";
import ThemeManager from "./ThemeManager";
import Routes from "./routes/Routes";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";

function App(): ReactElement {
  return (
    <div>
      <ThemeManager>
        <Header />
        <GlobalStyle />
        <Routes />
      </ThemeManager>
    </div>
  );
}

export default App;
