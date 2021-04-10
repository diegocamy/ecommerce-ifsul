import styled from "styled-components";

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.orangeWeb};
  color: ${({ theme }) => theme.white};
`;

export const Container = styled.div`
  margin: auto;
  height: 100px;
  padding: 0 10px;
  max-width: 1024px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    height: 60px;
    justify-content: space-between;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const MiddleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
`;

export const SearchSection = styled.div`
  display: flex;
  margin: auto;
  width: 80%;

  button {
    font-size: 1.4rem;
  }

  input {
    font-size: 1.4rem;
    border: white;
    padding-left: 5px;
    flex-grow: 1;
  }

  @media screen and (max-width: 800px) {
    input {
      width: 100%;
    }
  }

  @media screen and (max-width: 450px) {
    width: 90%;
    button {
      font-size: 1rem;
    }
    input {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 320px) {
    button {
      font-size: 0.9rem;
    }

    input {
      font-size: 0.9rem;
    }
  }
`;

export const Links = styled.div`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  ul {
    display: flex;
    li {
      display: flex;
      list-style: none;

      a {
        text-decoration: none;
        margin: 5px;
        height: fit-content;
        color: inherit;
      }

      a.active {
        margin-bottom: 3px;
        border-bottom: 2px solid white;
      }
    }
  }

  @media screen and (max-width: 800px) {
    transform: ${({ showMenu }) =>
      showMenu ? "translateX(0)" : "translateX(-100vw)"};
    transition: transform 100ms ease-in-out;
    position: absolute;
    left: 0;
    top: 59px;
    background-color: ${({ theme }) => theme.orangeWeb};
    z-index: 50;
    width: 100%;
    max-width: 100vw;
    height: calc(100% - 59px);

    ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      li {
        position: relative;
        list-style: none;
        font-size: 1.5rem;
        text-align: center;
        width: 100%;

        a {
          padding: 30px;
          width: 100%;
          text-decoration: none;
          color: inherit;
          margin: auto;
        }

        a.active {
          border-bottom: 2px solid white;
          background-color: rgba(255, 255, 255, 0.2);
        }
      }
    }
  }
`;

export const RightSideIcons = styled.div`
  display: flex;
  i {
    color: inherit;
    font-size: 2rem;
    margin: auto 5px;
    margin-bottom: 20%;

    &:hover {
      cursor: pointer;
    }
  }

  .hamburguer {
    display: none;

    &:hover {
      cursor: pointer;
    }
  }

  @media screen and (max-width: 800px) {
    .icons {
      display: none;
    }

    .hamburguer {
      display: flex;
      font-size: 1.7rem;
      margin: 5px;
      text-align: center;

      i {
        margin: auto;
        width: 30px;
      }
    }
  }
`;
