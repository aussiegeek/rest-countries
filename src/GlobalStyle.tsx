import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Nunito Sans';
  width: 320px;
  background: ${(props): string => props.theme.background};
  margin: 0 auto;
}
`;

export default GlobalStyle;
