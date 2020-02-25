import React from "react";

import { StyledFooter } from "./Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <h6>
        A{" "}
        <a
          href="https://www.freecodecamp.org"
          alt="link to freecodecamp.org"
          target="_blank"
        >
          freeCodeCamp.org
        </a>{" "}
        project by: <span id="author">Deorabbin Jibe Asuncion</span>
      </h6>
    </StyledFooter>
  );
};

export default Footer;
