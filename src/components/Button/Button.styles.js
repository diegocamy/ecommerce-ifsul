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
