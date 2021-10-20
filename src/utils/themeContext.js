import { createContext, useState, useEffect } from "react";

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

const defaultTheme = localStorage.getItem('theme') || 'dark'
export const ThemeContext = createContext({theme: defaultTheme, setTheme: () => {}});

export const ThemeAppContext = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme)

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
