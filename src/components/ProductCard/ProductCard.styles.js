import styled from "styled-components";

export const Card = styled.div`
  margin: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: fit-content;
  max-width: 290px;
  background-color: ${({ theme }) => theme.white};
  text-align: left;
  padding-bottom: 15px;

  a {
    text-decoration: none;
    color: inherit;
  }

  .bolsa,
  .corazon {
    font-size: 2rem;
    font-weight: 100;
    position: absolute;
    bottom: 1%;
    right: 3%;
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
    top: 1%;
  }

  @media screen and (max-width: 1040px) {
    max-width: 230px;
  }

  @media screen and (max-width: 768px) {
    max-width: 200px;
  }
`;

export const ImageAraea = styled.div`
  position: relative;
  top: 0;
  margin-bottom: 10px;
`;

export const ProductImage = styled.img`
  width: 100%;
`;

export const ProductName = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.2rem;
  margin: 10px;
`;

export const ProductPrice = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  margin-left: 10px;
`;
export const ProductFee = styled.p`
  font-size: 1.3rem;
  margin-left: 10px;
`;
