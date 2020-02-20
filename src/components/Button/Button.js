import React from "react";

import { StyledButton } from "./Button.styled";

const Button = ({
  children,
  id,
  setBreakLength,
  breakLength,
  sessionLength,
  setSessionLength,
  play,
  setPlay
}) => {
  const handleClick = e => {
    switch (id) {
      case "break-increment":
        if (play) return;
        setBreakLength(breakLength + 60);
        break;
      case "break-decrement":
        if (play) return;
        if (breakLength === 60) return;
        setBreakLength(breakLength - 60);
        break;
      case "session-increment":
        if (play) return;
        setSessionLength(sessionLength + 60);
        break;
      case "session-decrement":
        if (play) return;
        if (sessionLength === 60) return;
        setSessionLength(sessionLength - 60);
        break;
      case "reset":
        setSessionLength((sessionLength = 1500));
        setBreakLength((breakLength = 300));
        setPlay((play = false));
        break;
      case "start_stop":
        setPlay(!play);
        break;
      case "pause":
        setPlay((play = false));
        break;
      default:
        return;
    }
  };

  return (
    <StyledButton id={id} onClick={handleClick}>
      <span>{children}</span>
    </StyledButton>
  );
};

export default Button;
