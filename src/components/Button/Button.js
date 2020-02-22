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
  setPhase,
  setTimeLeft,
  pause,
  setPause
}) => {
  const handleClick = e => {
    switch (id) {
      case "break-increment":
        if (breakLength === 3600) return;
        setBreakLength(breakLength + 60);
        break;
      case "break-decrement":
        if (breakLength === 60) return;
        setBreakLength(breakLength - 60);
        break;
      case "session-increment":
        if (sessionLength === 3600) return;
        setSessionLength(sessionLength + 60);
        break;
      case "session-decrement":
        if (sessionLength === 60) return;
        setSessionLength(sessionLength - 60);
        break;
      case "reset":
        setSessionLength(1500);
        setBreakLength(300);
        setTimeLeft(1500);
        setPhase(true);
        setPlay(false);
        setPause(false);
        break;
      case "start_stop":
        if (!play) {
          setPlay(true);
        } else {
          setPause(!pause);
        }

        break;
      case "pause":
        if (!play) return;
        setPause(!pause);
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
