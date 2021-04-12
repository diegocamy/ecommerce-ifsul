import { useState, useEffect } from "react";
import { obtenerProductosAleatorios } from "../utils/utils";

export const useFetchRandomProducts = (numOfProducts) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const productos = obtenerProductosAleatorios(numOfProducts);
    setProducts(productos);

    return () => setProducts(null);
  }, [numOfProducts]);

  return products;
};
