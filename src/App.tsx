import React from "react";
import styled from "styled-components/macro";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import ThemeManager from "./ThemeManager";
import Routes from "./routes/Routes";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";

const client = new ApolloClient({
  uri: "https://graphqlcountries.com",
  cache: new InMemoryCache(),
});

const Content = styled.div`
  margin: 48px 56px;

  @media (min-width: 700px) {
    margin-top: 80px;
  }
`;

const App: React.FC = () => (
  <div>
    <ApolloProvider client={client}>
      <ThemeManager>
        <Header />
        <GlobalStyle />
        <Content>
          <Routes />
        </Content>
      </ThemeManager>
    </ApolloProvider>
  </div>
);

export default App;
