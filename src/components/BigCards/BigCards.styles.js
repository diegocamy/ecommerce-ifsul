import styled from "styled-components";

export const BigCardsContainer = styled.div`
  margin: 25px auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;
