import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Carrinho from "./pages/Carrinho";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";


import "./styles/global.css";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto/:id" element={<ProductDetails />} />
        <Route path="Carrinho" element={<Carrinho />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;