import { useState, useEffect } from "react";
import { fetchProdutos } from "../api/produtoApi";

export function useProdutos() {
  const [produtos, setProdutos] = useState([]);

  async function buscarProdutos(query = "") {
    try {
      const lista = await fetchProdutos(query);
      setProdutos(lista);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, []);

  return { produtos, buscarProdutos };
}