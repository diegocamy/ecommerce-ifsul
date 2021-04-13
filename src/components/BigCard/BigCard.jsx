import React from "react";
import { Link } from "react-router-dom";
import { BigButton } from "../Button/Button.styles";
import { Card, CardContainer, Image, SubTexto, Texto } from "./BigCard.styles";

const BigCard = ({ img, text, subtext, buttonText, categoria }) => {
  return (
    <CardContainer>
      <Link to={`/categories/${categoria}`}>
        <Card>
          <Image src={img} alt="modelo" />
          <Texto>{text}</Texto>
          <SubTexto>{subtext}</SubTexto>
        </Card>
        <BigButton>{buttonText}</BigButton>
      </Link>
    </CardContainer>
  );
};

export default BigCard;
