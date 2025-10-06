import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.css";
import { ThemeProvider } from "./ThemeContext.jsx";
import Navbar from "./Navbar.jsx";
import App from "./App.jsx";
import CountryDetails from "./CountryDetails.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="country/:name" element={<CountryDetails />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
