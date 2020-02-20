import React from "react";

import { StyledLengthControls } from "./LengthControls.styled";

const LengthControls = ({ children, id }) => {
  return (
    <StyledLengthControls>
      <h3 id={`${id}-label`}>{id}</h3>
      {children}
    </StyledLengthControls>
  );
};

export default LengthControls;
