import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { ThemeContext } from "../../utils/themeContext";

function Header(onToggleTheme) {
  const { theme, setTheme } = useContext(ThemeContext);
  const {username} = useSelector((state) => state.login)
  return (
    <div>
      <h1>My contact list</h1>
      {username && <h4>Username: {username}</h4>}
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle theme
      </button>
    </div>
  );
}

export default Header;
