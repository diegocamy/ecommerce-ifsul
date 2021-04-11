import styled from "styled-components";

export const CardContainer = styled.div`
  text-align: center;
  margin: 10px;
  a {
    color: inherit;
    text-decoration: none;
  }

  @media screen and (max-width: 1074px) {
    margin: 0px;
  }
`;

export const Card = styled.div`
  width: 500px;
  text-transform: uppercase;
  margin: 20px 10px;
  padding: 30px;
  border: 4px solid ${({ theme }) => theme.platinum};

  @media screen and (max-width: 1024px) {
    width: 480px;
  }

  @media screen and (max-width: 1023px) {
    width: 350px;
    padding: 20px;
  }

  @media screen and (max-width: 767px) {
    width: 90%;
    margin: 20px auto;
  }
`;

export const Image = styled.img`
  width: 100%;
  margin-bottom: 25px !important;
`;

export const Texto = styled.h2`
  font-weight: bold;
  letter-spacing: 1px;
  @media screen and (max-width: 767px) {
    font-size: 1rem;
  }
`;

export const SubTexto = styled.h2`
  font-weight: normal;
  letter-spacing: 1px;
  @media screen and (max-width: 767px) {
    font-size: 1rem;
  }
`;
