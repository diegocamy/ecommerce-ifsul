import styled from "styled-components";

export const FooterSection = styled.footer`
  background-color: ${({ theme }) => theme.oxfordBlue};
  color: ${({ theme }) => theme.platinum};
  padding: 20px;
`;

export const FooterContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;

  .left {
    text-align: left;
    max-width: 25%;

    p {
      margin-bottom: 10px;
    }

    i {
      font-size: 2.5rem;
      margin: 10px 0;
      margin-right: 10px;
    }
  }

  .links {
    margin-top: 15px;
    flex-grow: 1;
    display: flex;
    justify-content: space-around;

    p {
      margin: 10px auto;
    }
  }

  .right {
    align-self: center;
    max-width: 30%;
    h3 {
      margin-bottom: 10px;
      font-weight: normal;
    }
    .input {
      margin-bottom: 10px;
      input {
        font-size: 1rem;
        padding: 5px;
        width: 170px;
        border: none;
      }
    }

    .inferior {
      text-align: center;
      max-width: 270px;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    .links {
      display: none;
    }

    .left,
    .right {
      text-align: center;
      max-width: 100%;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  a {
    text-decoration: none;
    color: inherit;
    text-align: center;

    h1 {
      font-size: 2rem;
      font-weight: bold;
      text-transform: uppercase;
      line-height: 0.8;
    }

    p {
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 800px) {
    a {
      h1 {
        font-size: 1.7rem;
      }
    }
  }

  @media screen and (max-width: 450px) {
    a {
      h1 {
        font-size: 1.3rem;
      }
    }
  }
`;
