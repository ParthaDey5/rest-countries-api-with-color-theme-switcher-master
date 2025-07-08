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
        className={`!z-50 border-b-[4px] overflow-x-hidden 2xl:py-[2dvw] sm:py-[1.4dvw] py-[6dvw] sm:px-[5dvw] px-[4dvw] max-w-screen shadow flex justify-between transition-colors duration-400 ease-linear ${
          darkMode ? "Blue950 border-[#202c36]" : "Grey50 border-gray-100"
        }`}
      >
        <h2 className="nunito-sans-900">Where in the world?</h2>
        <button
          className="cursor-pointer flex items-center gap-1"
          onClick={toggleDarkMode}
        >
          <i className="fa-regular fa-moon"></i>
          <h3 className="nunito-sans-700 sm:pt-0 pt-[0.5dvw]">Dark Mode</h3>
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
