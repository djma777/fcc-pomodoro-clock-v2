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
  setPlay,
  setPhase
}) => {
  const handleClick = e => {
    switch (id) {
      case "break-increment":
        if (play || breakLength === 3600) return;
        setBreakLength(breakLength + 60);
        break;
      case "break-decrement":
        if (play) return;
        if (breakLength === 60) return;
        setBreakLength(breakLength - 60);
        break;
      case "session-increment":
        if (play || sessionLength === 3600) return;
        setSessionLength(sessionLength + 60);
        break;
      case "session-decrement":
        if (play) return;
        if (sessionLength === 60) return;
        setSessionLength(sessionLength - 60);
        break;
      case "reset":
        setSessionLength(1500);
        setBreakLength(300);
        setPhase(true);
        setPlay(false);
        break;
      case "start_stop":
        setPlay(!play);
        break;
      case "pause":
        if (!play) return;
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
