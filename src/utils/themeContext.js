import { createContext } from "react";

export const themes = {
  light: {
    color: "black",
    background: "white",
  },
  dark: {
    color: "white",
    background: "black",
  },
};

export const ThemeContext = createContext({theme: themes.light, setTheme: () => {}});
