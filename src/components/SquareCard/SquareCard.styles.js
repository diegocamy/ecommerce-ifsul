import styled from "styled-components";

export const CardContainer = styled.div`
  a {
    text-decoration: none;
    color: inherit;
  }
  &:hover {
    text-decoration: underline;
  }
`;

export const Card = styled.div`
  background-color: #fafafa;
  border-radius: 5px;
  height: 180px;
  width: 180px;
  overflow: hidden;
  margin-bottom: 5px;

  img {
    width: 100%;
    border-radius: inherit;
    transition: transform 500ms ease-in-out;
    &:hover {
      transform: scale(1.05);
    }
  }

  @media screen and (max-width: 800px) {
    height: 165px;
    width: 165px;
  }

  @media screen and (max-width: 450px) {
    height: 140px;
    width: 140px;
  }

  @media screen and (max-width: 370px) {
    height: 120px;
    width: 120px;
  }
`;

export const CardText = styled.h2`
  font-weight: normal;
`;
