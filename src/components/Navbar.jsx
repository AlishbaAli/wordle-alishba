import "../App.css";
import { useContext } from "react";
import { AppContext } from "../App";

const NavBar = () => {
  const { toggleTheme, isDarkMode } = useContext(AppContext);
  const toggle = () => {
    toggleTheme();
  };
  return (
    <div className={`nav-container ${isDarkMode ? "dark" : "light"}`}>
      <div className="icon-left">?</div>
      <div className="title">WORDLE</div>
      <div className="toggle-switch" onClick={toggle}>
        <div className={`toggle-knob ${isDarkMode ? "dark" : "light"}`}></div>
      </div>
    </div>
  );
};

export default NavBar;
