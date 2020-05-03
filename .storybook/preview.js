import React from "react";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../src/GlobalStyle";
import { LightTheme } from "../src/theme";

addDecorator((storyFn) => (
  <ThemeProvider theme={LightTheme}>
    <div>
      <GlobalStyle />
      {storyFn()}
    </div>
  </ThemeProvider>
));
