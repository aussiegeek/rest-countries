export interface ThemeInterface {
  background: string;
  element: {
    background: string;
  };
}
export const LightTheme: ThemeInterface = {
  background: "hsl(0, 0%, 98%)",
  element: {
    background: "white",
  },
};
