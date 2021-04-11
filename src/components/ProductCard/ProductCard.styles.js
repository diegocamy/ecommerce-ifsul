import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: fit-content;
  max-width: 290px;
  background-color: ${({ theme }) => theme.white};

  a {
    text-decoration: none;
    color: inherit;
  }

  .bolsa,
  .corazon {
    font-size: 2rem;
    font-weight: 100;
    position: absolute;
    bottom: 5%;
    right: 5%;
    left: auto;
    z-index: 5;
    color: ${({ theme }) => theme.orangeWeb};
    transition: transform 200ms ease-in-out;

    &:hover {
      cursor: pointer;
      transform: scale(1.2);
    }
  }

  .corazon {
    bottom: auto;
    top: 5%;
  }
`;

export const ImageAraea = styled.div`
  position: relative;
  top: 0;
`;

export const ProductImage = styled.img`
  width: 100%;
`;

export const ProductName = styled.p`
  font-size: 1.2rem;
`;

export const ProductPrice = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
`;
export const ProductFee = styled.p`
  font-size: 1.3rem;
`;
