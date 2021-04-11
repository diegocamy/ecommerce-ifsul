import styled from "styled-components";

export const Section = styled.section`
  text-align: center;
  padding: 20px 0;

  h1 {
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .swiper-slide {
    text-align: center;
    margin: 45px auto;
    width: fit-content;

    &:first-child {
      margin-left: 30px;
    }

    &:last-child {
      margin-right: 30px;
    }
  }

  .swiper-pagination-bullet {
    background-color: ${({ theme }) => theme.orangeWeb};
    height: 10px;
    width: 10px;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 30px auto;
`;
