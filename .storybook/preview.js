import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import GlobalStyle from "../src/GlobalStyle";
import ThemeManager from "../src/ThemeManager";

addDecorator((storyFn) => (
  <ThemeManager>
    <div>
      <GlobalStyle />
      {storyFn()}
    </div>
  </ThemeManager>
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
