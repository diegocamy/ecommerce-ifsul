import styled from "styled-components";

export const Section = styled.section`
  text-align: center;
  padding: 20px 0;

  h1 {
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .swiper-wrapper {
    align-items: center;
    justify-content: space-between;
  }

  .swiper-slide {
    margin: 45px auto;
  }

  .swiper-pagination-bullet {
    background-color: ${({ theme }) => theme.orangeWeb};
    height: 10px;
    width: 10px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    display: flex;
    color: ${({ theme }) => theme.orangeWeb};
    background-color: ${({ theme }) => theme.platinum};
    border-radius: 50%;
    padding: 30px;

    &::after {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }

  .swiper-button-next {
    right: -5px;
    @media screen and (max-widt: 1040px) {
      display: none;
    }
  }

  .swiper-button-prev {
    left: -5px;
    @media screen and (max-widt: 1040px) {
      display: none;
    }
  }
`;
