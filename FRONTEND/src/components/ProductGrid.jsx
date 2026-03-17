import "../styles/ProductGrid.css";
import React, { useState } from "react";
import ProductModal from "./ProductModal";

function ProductGrid({ produtos }) {
  const [selectedProduto, setSelectedProduto] = useState(null);

  return (
    <>
      <div className="product-grid">
        {(produtos || []).map((produto) => (
          <div
            key={produto.id}
            className="product-card"
            onClick={() => setSelectedProduto(produto)}
          >

            {produto.imagens && produto.imagens.length > 0 && (
              <img
                src={produto.imagens[0].url}
                alt={produto.nome}
                loading="lazy"
              />
            )}

            <h3>{produto.nome}</h3>

            <p className="price">
              {Number(produto.preco).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>

            {produto.categoria && (
              <p className="categoria">
                {produto.categoria.nome}
              </p>
            )}

            <p className={`estoque ${produto.estoque <= 0 ? "out" : ""}`}>
              {produto.estoque > 0 ? "Em estoque" : "Indisponível"}
            </p>

          </div>
        ))}
      </div>

      {selectedProduto && (
        <ProductModal
          produto={selectedProduto}
          onClose={() => setSelectedProduto(null)}
        />
      )}
    </>
  );
}

export default ProductGrid;