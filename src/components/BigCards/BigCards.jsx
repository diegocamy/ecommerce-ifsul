import React from "react";
import { obtenerProductosAleatoriosBigCards } from "../../utils/utils";
import BigCard from "../BigCard/BigCard";
import { BigCardsContainer } from "./BigCards.styles";

const BigCards = ({ numOfCards }) => {
  const products = obtenerProductosAleatoriosBigCards(numOfCards);
  return (
    <BigCardsContainer>
      {products.map((p) => (
        <BigCard
          key={p.id}
          img={p.foto}
          text={p.text}
          subtext={p.subText}
          buttonText={p.buttonText}
        />
      ))}
    </BigCardsContainer>
  );
};

export default BigCards;
