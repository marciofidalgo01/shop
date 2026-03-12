import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {

  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <nav className="navbar">

      <Link to="/">
        <img src="./logo.png" alt="Logo" className="logo" />
      </Link>

      <Link to="Carrinho">
        <img src="./carrinho.png" alt="Carrinho" className="carrinho" />
      </Link>

      

 <label className="switch">
  <input
    type="checkbox"
    checked={dark}
    onChange={() => setDark(!dark)}
  />
  <span className="slider">
    <span className="icon">
      {dark ? "🌙" : "☀️"}
    </span>
  </span>
</label>

      <div className="filtro">
        <img src="./lupa2.png" alt="Lupa" className="lupa" />
        <input
          type="text"
          placeholder="Pesquisar..."
          id="inputPesquisar"
        />
      </div>
      <a href="https://wa.me/5521992215332?text=Ol%C3%A1%21%20Estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20site." class="botao-contato" target="_blank">
        <div className="zapzap">
          <img src="./zapzap.png" alt="Zapzap" id="zapImg" />
          Falar no WhatsApp
        </div>
      </a>
      

    </nav>
  );
}

export default Navbar;