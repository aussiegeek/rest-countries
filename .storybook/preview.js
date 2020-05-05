import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
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

const viewports = {
  mobile: {
    name: "mobile",
    styles: {
      width: "375px",
      height: "963px",
    },
  },
  desktop: {
    name: "desktop",
    styles: {
      width: "1440px",
      height: "900px",
    },
  },
};

addParameters({
  viewport: {
    viewports: viewports,
  },
  chromatic: { viewports: [375, 1440] },
});
