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
      letter-spacing: 3px;
    }

    p {
      font-size: 0.8rem;
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
        color: inherit;
      }

      a.active {
        border-bottom: 2px solid white;
      }
    }
  }
`;

export const RightSideIcons = styled.div`
  display: flex;
  button {
    font-size: 2rem;
    margin-left: 5px;
    margin-bottom: 20%;
  }
`;
