import styled from "styled-components";

export const SpinnerElement = styled.div`
  margin: 100px auto;
  width: 300px;
  height: 300px;
  color: ${({ theme }) => theme.orangeWeb};
  font-size: 5rem;
  display: grid;
  place-items: center;
  i {
    -webkit-animation: spin 0.5s linear infinite;
    -moz-animation: spin 0.5s linear infinite;
    animation: spin 0.5s linear infinite;

    @-moz-keyframes spin {
      100% {
        -moz-transform: rotate(360deg);
      }
    }
    @-webkit-keyframes spin {
      100% {
        -webkit-transform: rotate(360deg);
      }
    }
    @keyframes spin {
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  }
`;
