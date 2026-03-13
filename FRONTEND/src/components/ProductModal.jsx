import React from "react";
import "../styles/ProductModal.css";
import { useCart } from "../context/CartContext";


function ProductModal({ produto, onClose }) {
  if (!produto) return null;
  const { addToCart } = useCart();


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

<p className="modal-price">
              {Number(produto.preco).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>

            <p><strong>Marca:</strong> {produto.marca}</p>

            

            <p><strong>Ano:</strong> {produto.ano}</p>

            <p><strong>Motor:</strong> {produto.motor}</p>

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
          onClick={() => addToCart(produto)}
        >
          Adicionar ao carrinho
        </button>

        </div>

      </div>
    </div>
  );
}

export default ProductModal;