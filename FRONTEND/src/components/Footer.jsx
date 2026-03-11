import React from "react";
import "../styles/global.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>Sobre Nós</h3>
          <p>
            Somos especialistas em venda de veículos e peças automotivas,
            oferecendo qualidade, procedência e segurança para nossos clientes.
          </p>
        </div>

        <div className="footer-section">
          <h3>Links Úteis</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Veículos</a></li>
            <li><a href="#">Contato</a></li>
            <li><a href="#">Sobre</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contato</h3>
          <p>Email: contato@seudominio.com</p>
          <p>Telefone: (11) 99999-9999</p>
          <p>Endereço: Sua cidade - Brasil</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;