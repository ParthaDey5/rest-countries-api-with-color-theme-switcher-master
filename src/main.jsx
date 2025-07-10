import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.css";
import { ThemeProvider } from "./ThemeContext.jsx";
import Navbar from "./Navbar.jsx";
import App from "./App.jsx";
import CountryDetails from "./CountryDetails.jsx";



// Vite’s BASE_URL is "/" in dev, "/repo-name/" in production
const rawBase = import.meta.env.BASE_URL;      // e.g. "/" or "/rest-countries-api-with-color-theme-switcher-master/"
const basename = rawBase === "/" 
? "" 
: rawBase.replace(/\/$/, "");               // Strip trailing slash


createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <BrowserRouter  basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="country/:name" element={<CountryDetails />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
