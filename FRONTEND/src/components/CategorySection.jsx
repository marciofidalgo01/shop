import React, { useState } from "react";
import "../styles/CategorySection.css";

function CategorySection({ onSearch }) {

  const [openFilter, setOpenFilter] = useState(null);

  const [filters, setFilters] = useState({
    categoria: [],
    preco: []
  });

  function toggleFilter(filter) {
    setOpenFilter(openFilter === filter ? null : filter);
  }

  function toggleOption(filter, value) {

    setFilters(prev => {

      if (filter === "preco") {
        return {
          ...prev,
          preco: [value]
        };
      }

      const exists = prev[filter].includes(value);

      return {
        ...prev,
        [filter]: exists
          ? prev[filter].filter(item => item !== value)
          : [...prev[filter], value]
      };

    });

  }

  function clearFilters() {

    setFilters({
      categoria: [],
      preco: []
    });

    onSearch();
  }

  function buildQuery() {

    const params = new URLSearchParams();

    if (filters.categoria.length > 0) {
      params.append("categoria", filters.categoria.join(","));
    }

    if (filters.preco.length > 0) {
      params.append("preco", filters.preco[0]); // só 1 valor
    }

    return params.toString();
  }

  function buscarProdutos() {
    const query = buildQuery();
    onSearch(query);
  }

  function Option({ filter, value, label }) {

    const selected = filters[filter].includes(value);

    return (
      <div
        className="option"
        onClick={(e) => {
          e.stopPropagation();
          toggleOption(filter, value);
        }}
      >

        <input
          type="checkbox"
          checked={selected}
          readOnly
          className="inputCheckBoxCategory"
        />

        <span>{label || value}</span>

      </div>
    );
  }

  return (

    <section className="categorySection">

      <h2 className="filterTitle">Filtrar Produtos</h2>

      <div className="filtersContainer">

        <div className="filterGroup">
          <div
            className="customSelect"
            onClick={() => toggleFilter("categoria")}
          >
            <span>Categoria</span>

            <div className={`options ${openFilter === "categoria" ? "open" : ""}`}>

              <Option filter="categoria" value="roupas" label="Roupas" />
              <Option filter="categoria" value="calcados" label="Calçados" />
              <Option filter="categoria" value="acessorios" label="Acessórios" />

            </div>
          </div>
        </div>

        {/* 💰 PREÇO */}
        <div className="filterGroup">
          <div
            className="customSelect"
            onClick={() => toggleFilter("preco")}
          >
            <span>Preço</span>

            <div className={`options ${openFilter === "preco" ? "open" : ""}`}>

              <Option filter="preco" value="0-100" label="Até R$100" />
              <Option filter="preco" value="100-300" label="R$100 - R$300" />
              <Option filter="preco" value="300-700" label="R$300 - R$700" />
              <Option filter="preco" value="700-999999" label="R$700+" />

            </div>
          </div>
        </div>

        <br />

        <button
          className="filterButton"
          onClick={buscarProdutos}
        >
          Buscar Produtos
        </button>

        <button
          className="filterButton"
          onClick={clearFilters}
        >
          Limpar filtros
        </button>

      </div>

    </section>

  );

}

export default CategorySection;