import React, { ReactElement } from "react";
import Routes from "./routes/Routes";
import GlobalStyle from "./GlobalStyle";

function App(): ReactElement {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes />
    </div>
  );
}

export default App;
