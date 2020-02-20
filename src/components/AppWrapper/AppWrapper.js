import React from "react";

import { StyledAppWrapper } from "./AppWrapper.styled";

const AppWrapper = ({ children }) => {
  return <StyledAppWrapper>{children}</StyledAppWrapper>;
};

export default AppWrapper;
