import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "../theme";

const AllTheProviders: React.ComponentType = ({ children }) => {
  return <ThemeProvider theme={LightTheme}>{children}</ThemeProvider>;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const customRender: any = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "queries">
) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
