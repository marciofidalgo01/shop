import React, { useState, useEffect } from "react";
import "../styles/ProductModal.css";
import { useCart } from "../context/CartContext";

function ProductModal({ produto, onClose }) {
  if (!produto) return null;

  const { addToCart } = useCart();
  const [mostrarAlert, setMostrarAlert] = useState(false);

  function AlertCarrinho() {
    return (
      <div className='alertCarrinho'>
        <p>Adicionado com sucesso!</p>
      </div>
    );
  }

  useEffect(() => {
    if (mostrarAlert) {
      const timer = setTimeout(() => {
        setMostrarAlert(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [mostrarAlert]);

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>

        <button className="close-btn" onClick={onClose}>
          &times;
        </button>

        <h2 className="modal-title">{produto.nome}</h2>

        <div className="modal-body">

          {produto.imagens && produto.imagens.length > 0 && (
            <img
              src={produto.imagens[0].url}
              alt={produto.nome}
              className="modal-img"
            />
          )}

          <div className="modal-info">

            {/* 💰 PREÇO */}
            <p className="modal-price">
              {Number(produto.preco).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>

            {/* 📂 CATEGORIA */}
            {produto.categoria && (
              <p>
                <strong>Categoria:</strong> {produto.categoria.nome}
              </p>
            )}

            {/* 📦 ESTOQUE */}
            <p>
              <strong>Disponibilidade:</strong>{" "}
              {produto.estoque > 0 ? "Em estoque" : "Indisponível"}
            </p>

            {/* 📝 DESCRIÇÃO */}
            {produto.descricao && (
              <p className="modal-description">
                {produto.descricao}
              </p>
            )}

          </div>

        </div>

        <div className="modal-actions">

          <button
            className="add-cart-btn"
            onClick={() => {
              addToCart(produto);
              setMostrarAlert(true);
            }}
            disabled={produto.estoque <= 0}
          >
            {produto.estoque > 0 ? "Adicionar ao carrinho" : "Sem estoque"}
          </button>

          {mostrarAlert && <AlertCarrinho />}

        </div>

      </div>
    </div>
  );
}

export default ProductModal;