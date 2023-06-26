import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App";
import Database from "./pages/Database";
import Help from "./pages/Help";
import Sitters from "./pages/Sitters";
import About from "./pages/About";

// <React.StrictMode>
//  <App />
// </React.StrictMode>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/database" element={<Database />} />
      <Route path="/help" element={<Help />} />
      <Route path="/sitters" element={<Sitters />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);
