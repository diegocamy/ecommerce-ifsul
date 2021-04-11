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
