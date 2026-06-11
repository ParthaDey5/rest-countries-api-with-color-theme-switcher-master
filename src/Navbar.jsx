import React from "react";
import { useTheme } from "./ThemeContext.jsx";

function Navbar() {
  const { darkMode, setDarkMode } = useTheme();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // optional: persist preference
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
    
  };

  return (
    <div>
      <nav
        className={`fixed top-0 inset-x-0 !z-50 border-b-[4px] overflow-x-hidden sm:h-[5dvw] h-[15dvw] sm:px-[5dvw] px-[4dvw] shadow flex align-items-center justify-between transition-colors duration-400 ease-linear ${
          darkMode ? "Blue950 border-[#202c36]" : "Grey50 border-gray-100"
        }`}
      >
        <h2 className="nunito-sans-900">Where in the world?</h2>
        <button
          className="cursor-pointer flex items-center justify-center sm:gap-[0.4dvw] gap-[1dvw]"
          onClick={toggleDarkMode}
        >
          <i className="fa-regular fa-moon"></i>
          <h3 className="nunito-sans-700">Dark Mode</h3>
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
