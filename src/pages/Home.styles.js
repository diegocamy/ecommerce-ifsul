import styled from "styled-components";

export const MainSection = styled.main`
  img {
    width: 100%;
    margin-bottom: -4px;
  }

  .gray {
    background-color: ${({ theme }) => theme.platinum};
  }
`;

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
