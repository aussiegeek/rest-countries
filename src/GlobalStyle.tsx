import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Nunito Sans', sans-serif;
    background: ${(props): string => props.theme.background};
    margin: 0;
  }
`;

export default GlobalStyle;
