import React, { FunctionComponent, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "./theme";

const ThemeManager: FunctionComponent = ({ children }) => {
  const [useDarkMode, setUseDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const darkmode = mediaQuery.matches;
    setUseDarkMode(darkmode);

    mediaQuery.addListener((event) => {
      setUseDarkMode(event.matches);
    });
  }, []);

  const theme = useDarkMode ? DarkTheme : LightTheme;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeManager;
