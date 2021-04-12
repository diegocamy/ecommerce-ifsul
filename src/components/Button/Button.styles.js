import styled from "styled-components";

export const IconButton = styled.button`
  border: none;
  background-color: ${({ bgColor, theme }) =>
    bgColor ? bgColor : theme.white};
  color: ${({ color, theme }) => (color ? color : theme.platinum)};
  padding: 5px;
  &:hover {
    cursor: pointer;
  }
`;

export const Button = styled.button`
  background-color: ${({ bgColor, theme }) =>
    bgColor ? bgColor : theme.orangeWeb};
  border: 1px solid
    ${({ bgColor, theme }) => (bgColor ? bgColor : theme.orangeWeb)};
  color: ${({ theme }) => theme.white};
  font-size: 1rem;
  padding: 5px 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const WhiteButton = styled.button`
  border: 1px solid ${({ theme }) => theme.silver};
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.black};
  font-size: 1rem;
  padding: 5px 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const BigButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.orangeWeb};
  color: ${({ theme }) => theme.white};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.4rem;
  padding: 15px 45px;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 767px) {
    padding: 10px 30px;
    font-size: 1rem;
  }
`;
