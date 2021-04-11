import React from "react";
import {
  Card,
  ImageAraea,
  ProductFee,
  ProductImage,
  ProductName,
  ProductPrice,
} from "./ProductCard.styles";
import { calcularCuota } from "../../utils/utils";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { nombre, precio, foto, slug } = product;

  return (
    <Card>
      <Link to={`/${slug}`}>
        <ImageAraea>
          <ProductImage src={foto} alt={slug} />
        </ImageAraea>
        <ProductName>{nombre}</ProductName>
        <ProductPrice>{precio}</ProductPrice>
        <ProductFee>
          6x $ {calcularCuota(precio)}
          sin recargo
        </ProductFee>
      </Link>
      {/* ICONS */}
      <div className="corazon">
        <i className="far fa-heart"></i>
      </div>
      <div className="bolsa">
        <i className="fas fa-shopping-bag"></i>
      </div>
    </Card>
  );
};

export default ProductCard;
