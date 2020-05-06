import React from "react";
import ThemeManager from "./ThemeManager";
import Routes from "./routes/Routes";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";

const App: React.FC = () => (
  <div>
    <ThemeManager>
      <Header />
      <GlobalStyle />
      <Routes />
    </ThemeManager>
  </div>
);

export default App;
