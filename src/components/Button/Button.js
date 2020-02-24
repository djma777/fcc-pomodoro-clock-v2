import React from "react";

import { StyledButton } from "./Button.styled";

const Button = ({ children, id, handleClick }) => {
  return (
    <StyledButton id={id} onClick={handleClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
