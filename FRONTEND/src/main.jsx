// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
<<<<<<< HEAD
import { CartProvider } from "./context/CartContext";

=======
>>>>>>> e11da5f8d8d3d7f0dafdf40a8a383c78b352e519

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
        <CartProvider>
    <App />
  </CartProvider>
=======
      <App />
>>>>>>> e11da5f8d8d3d7f0dafdf40a8a383c78b352e519
    </BrowserRouter>
  </React.StrictMode>
);