import React from "react";
import { Link } from "react-router-dom";
import { BigButton } from "../Button/Button.styles";
import { Card, CardContainer, Image, SubTexto, Texto } from "./BigCard.styles";

const BigCard = ({ img, text, subtext, buttonText, linkTo }) => {
  return (
    <CardContainer>
      <Link to={`/${linkTo}`}>
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
