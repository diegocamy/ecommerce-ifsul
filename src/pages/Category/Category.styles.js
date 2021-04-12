import styled from "styled-components";

export const Main = styled.div`
  padding: 30px 0;
`;

export const CategoryContainer = styled.div`
  margin: auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;

  .contenido {
    height: inherit;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin-bottom: 45px;
  }
`;

export const BreadCrumb = styled.div`
  margin-bottom: 30px;
  margin-left: 100px;
  h1 {
    text-transform: capitalize;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  span {
    font-weight: bold;
    text-transform: capitalize;
  }

  @media screen and (max-width: 450px) {
    margin-left: 30px;
  }
`;

export const Filtros = styled.aside`
  align-self: flex-start;
  position: sticky;
  top: 0;
  width: 15%;

  p {
    margin: 5px auto;
  }

  hr {
    border: 1px solid black;
    margin: 10px auto;
  }

  select {
    margin: 5px auto;
    width: 60%;
    font-size: 1.1rem;
  }

  input {
    margin: 5px auto;
    width: 30%;
    font-size: 1.1rem;
    padding: auto 5px;
  }
  @media screen and (max-width: 1110px) {
    display: none;
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 1rem;

  @media screen and (max-width: 930px) {
    grid-template-columns: repeat(2, auto);
  }
  @media screen and (max-width: 620px) {
    grid-template-columns: repeat(1, auto);
  }
`;

export const FiltroSuperior = styled.div`
  margin-right: 3.5%;
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 10px;
  font-size: 1.3rem;

  p {
    margin-right: 10px;
  }
  select {
    margin: auto 10px;
    font-size: 1.3rem;
  }

  @media screen and (max-width: 1024px) {
    margin-right: 5%;
  }

  @media screen and (max-width: 768px) {
    margin-right: 10%;
  }

  @media screen and (max-width: 500px) {
    font-size: 1rem;
    select {
      font-size: 1rem;
      margin: auto 5px;
    }
  }
`;
