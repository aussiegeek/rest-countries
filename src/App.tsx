import React from "react";
import styled from "styled-components/macro";
import ThemeManager from "./ThemeManager";
import Routes from "./routes/Routes";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";

const Content = styled.div`
  margin: 48px 56px;

  @media (min-width: 700px) {
    margin-top: 80px;
  }
`;

const App: React.FC = () => (
  <div>
    <ThemeManager>
      <Header />
      <GlobalStyle />
      <Content>
        <Routes />
      </Content>
    </ThemeManager>
  </div>
);

export default App;
