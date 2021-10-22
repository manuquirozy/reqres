import React, { useContext } from "react";
import { ThemeContext, themes } from "../../utils/themeContext";

function Header(onToggleTheme) {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <h1>My contact list</h1>
      <button
        onClick={() => setTheme(
          theme === 'light' ? 'dark' : 'light'
        )}
      >
        Toggle theme {JSON.stringify(theme)}
      </button>
    </div>
  );
}

export default Header;
