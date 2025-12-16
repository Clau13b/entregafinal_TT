import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from 'react-router-dom';
import { CarritoProvider } from "./context/CarritoContext";
import { ProductsProvider } from "./context/ProductsContext"; 
import { AuthProvider } from "./context/AuthContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
    <AuthProvider>
      <CarritoProvider>
        
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </CarritoProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);