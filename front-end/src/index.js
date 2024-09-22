import App from "./App";
import "./style.css";
import "./all.min.css";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import UserProvider from "./Pages/Website/Context/UserContext";
import ThemeProvider from "./Pages/Website/Context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </ThemeProvider>
  </BrowserRouter>
);
