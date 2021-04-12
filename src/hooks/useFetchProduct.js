import { useEffect, useState } from "react";
import { obtenerProductoPorSlug } from "../utils/utils";

export const useFetchProduct = (slug) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      const producto = obtenerProductoPorSlug(slug)[0];
      setProduct(producto);
      setLoading(false);
    }, 1000);

    return () => {
      setLoading(true);
      setProduct(null);
      clearTimeout(timeout);
    };
  }, [slug]);

  return { product, loading };
};
