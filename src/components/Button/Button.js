import React from "react";

import { StyledButton } from "./Button.styled";

const Button = ({
  children,
  id,
  setPlay,
  pause,
  setPause,
  play,
  handleReset,
  breakLength,
  setBreakLength,
  sessionLength,
  setSessionLength
}) => {
  const handleClick = e => {
    switch (id) {
      case "break-increment":
        if (breakLength === 60 * 60) return;
        setBreakLength(breakLength + 60);
        break;
      case "break-decrement":
        if (breakLength < 120) return;
        setBreakLength(breakLength - 60);
        break;
      case "session-increment":
        if (sessionLength === 60 * 60) return;
        setSessionLength(sessionLength + 60);
        break;
      case "session-decrement":
        if (sessionLength < 120) return;
        setSessionLength(sessionLength - 60);
        break;
      case "reset":
        handleReset();
        break;
      case "start_stop":
        if (!play) {
          setPlay(true);
        } else {
          setPause(!pause);
        }
        break;
      case "pause":
        if (!play || pause) return;
        setPause(true);
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
