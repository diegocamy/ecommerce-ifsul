import { useState, useEffect } from "react";
import { ObtenerProductosPorCategoria } from "../utils/utils";

export const useFetchCategory = (category) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      const productos = ObtenerProductosPorCategoria(category);
      setProducts(productos);
      setLoading(false);
    }, 1000);

    return () => {
      setLoading(true);
      setProducts([]);
      clearTimeout(timeout);
    };
  }, [category]);

  return { products, loading };
};
