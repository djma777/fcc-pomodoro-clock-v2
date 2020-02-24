import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0.5rem;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 2rem;

  :active {
    transform: translateY(3px);
  }

  :hover {
    font-size: 2.25rem;
  }
`;
