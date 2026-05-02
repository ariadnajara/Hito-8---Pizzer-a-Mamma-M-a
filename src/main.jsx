import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider> {/* 👈 nuevo */}
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </UserProvider>
  </React.StrictMode>
);