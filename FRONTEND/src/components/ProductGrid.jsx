import "../styles/ProductGrid.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

         <p>
          {Number(produto.preco).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>

   {produto.categoria && (
          <p>Categoria: {produto.categoria}</p>
        )}

        {produto.marca && (
          <p>Marca: {produto.marca}</p>
        )}

      
       

        <p>{produto.descricao}</p>

        <p>{produto.ano}</p>

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