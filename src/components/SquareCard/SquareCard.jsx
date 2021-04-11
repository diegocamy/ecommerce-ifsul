import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContainer, CardText } from "./SquareCard.styles";

const SquareCard = ({ img, cardText, link }) => {
  return (
    <CardContainer>
      <Link to={link}>
        <Card>
          <img srcSet={img} alt="modelo" />
        </Card>
        <CardText>{cardText}</CardText>
      </Link>
    </CardContainer>
  );
};

export default SquareCard;
