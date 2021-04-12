import { useState, useEffect } from "react";
import { ObtenerProductosPorCategoria } from "../utils/utils";

export const useFetchCategory = (category) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productCategory, setProductCategory] = useState(null);

  const sortResults = (sortby) => {
    switch (sortby) {
      case "por defecto":
        const productos = ObtenerProductosPorCategoria(category);
        return setProducts(productos);
      case "mayor precio":
        const productosMayorPrecio = [...products].sort((a, b) => {
          return (
            +b.precio.substring(1).replace(",00", "").replace(".", "") -
            +a.precio.substring(1).replace(",00", "").replace(".", "")
          );
        });
        return setProducts(productosMayorPrecio);
      case "menor precio":
        const productosMenorPrecio = [...products].sort((a, b) => {
          return (
            +a.precio.substring(1).replace(",00", "").replace(".", "") -
            +b.precio.substring(1).replace(",00", "").replace(".", "")
          );
        });
        return setProducts(productosMenorPrecio);
      case "nombre ascendente":
        const productosNombreAscendente = [...products].sort((a, b) => {
          return a.nombre.localeCompare(b.nombre);
        });
        return setProducts(productosNombreAscendente);
      case "nombre descendente":
        const productosNombreDescendente = [...products]
          .sort((a, b) => {
            return a.nombre.localeCompare(b.nombre);
          })
          .reverse();
        return setProducts(productosNombreDescendente);
      default:
        break;
    }
  };

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      const productos = ObtenerProductosPorCategoria(category);
      setProductCategory(category);
      setProducts(productos);
      setLoading(false);
    }, 1000);

    return () => {
      setLoading(true);
      setProductCategory(null);
      setProducts([]);
      clearTimeout(timeout);
    };
  }, [category]);

  return { products, productCategory, loading, sortResults };
};
