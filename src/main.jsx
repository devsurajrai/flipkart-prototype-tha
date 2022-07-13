import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./main.css";
import { BrowserRouter as Router } from "react-router-dom";
import { CartContextProvider } from "./contexts/cartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </Router>
  </React.StrictMode>
);
