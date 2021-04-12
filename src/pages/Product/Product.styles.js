import styled from "styled-components";

export const Container = styled.div`
  max-width: ${({ width }) => (width ? width : "1200px")};
  margin: auto;
`;

export const SilverBox = styled.div`
  background-color: ${({ theme }) => theme.platinum};
`;

export const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 45px auto;
  height: fit-content;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  height: fit-content;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: space-around;
  height: fit-content;
  padding: 15px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
  background: url(${({ foto }) => foto});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;

export const TinyImages = styled.div`
  display: flex;
  height: 120px;
`;

export const TinyImage = styled.div`
  width: calc(100% / 4);
  height: 100px;
  overflow: hidden;
  margin: 5px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 200ms ease-in-out;

    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const BackToCategorie = styled.div`
  a {
    text-decoration: none;
    color: inherit;

    span {
      font-weight: bold;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  margin-bottom: 15px;
`;

export const ProductInfo = styled.div`
  h2 {
    margin-bottom: 5px;
  }

  span {
    i {
      color: yellow;
    }
    margin-bottom: 20px;
  }

  .price {
    font-size: 2.3rem;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 10px;
  }

  .talle {
    .cajas {
      display: flex;
      .caja {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        text-align: center;
        margin-right: 5px;
        width: 45px;
        border: 1px solid black;
        font-size: 1.4rem;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  .color {
    margin: 15px;
    margin-left: 0;
    select {
      font-size: 1.3rem;
      padding-right: 25px;
    }
  }

  .buttons {
    button {
      i {
        margin-right: 10px;
      }
      width: 45%;
      margin-right: 10px;
      font-size: 1.2rem;
      padding: 10px 0 !important;

      @media screen and (max-width: 600px) {
        margin: 2px;
        font-size: 1rem;
      }
    }
    @media screen and (max-width: 600px) {
      text-align: center;
    }
  }
`;
