import { useState } from "react";
import "../App.css";

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggle = () => {
    setIsDarkMode(!isDarkMode);
    document.body.className = isDarkMode ? "light-mode" : "dark-mode";
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
