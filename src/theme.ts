export interface ThemeInterface {
  background: string;
  text: string;
  element: {
    background: string;
    shadow: string;
  };
  headerShadow: string;
}
export const LightTheme: ThemeInterface = {
  background: "hsl(0, 0%, 98%)",
  text: "hsl(200, 15%, 8%)",
  element: {
    background: "white",
    shadow: "0 2px 5px 0 hsla(0, 0%, 0%, 0.29)",
  },
  headerShadow: "0 2px 5px 0 hsla(0, 0%, 0%, 0.06)",
};

/* offset-x | offset-y | blur-radius | spread-radius | color */
// box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

export const DarkTheme: ThemeInterface = {
  background: "hsl(207, 26%, 17%)",
  text: "hsl(0, 0%, 100%)",
  element: {
    background: "hsl(209, 23%, 22%)",
    shadow: "0 0 7px 0 hsla(0, 0%, 0%, 0.29)",
  },
  headerShadow: "0 2px 5px 0 hsla(0, 0%, 0%, 0.06)",
};
