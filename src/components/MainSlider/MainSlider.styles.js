import styled from "styled-components";

export const Slider = styled.main`
  background-color: #fafafa;
  max-height: 500px;

  .swiper-container {
    height: fit-content;
  }

  .swiper-pagination-bullet {
    background-color: ${({ theme }) => theme.orangeWeb};
    height: 10px;
    width: 10px;
  }

  .swiper-button-next {
    color: ${({ theme }) => theme.orangeWeb};
    font-weight: bold;
  }

  .swiper-button-prev {
    color: ${({ theme }) => theme.orangeWeb};
    font-weight: bold;
  }
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 100%;

  img {
    width: 100%;
  }
`;
