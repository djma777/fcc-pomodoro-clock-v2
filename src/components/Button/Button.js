import React from "react";

import { StyledButton } from "./Button.styled";

const Button = ({
  children,
  id,
  setPlay,
  pause,
  setPause,
  play,
  handleReset
}) => {
  const handleClick = e => {
    switch (id) {
      case "break-increment":
        break;
      case "break-decrement":
        break;
      case "session-increment":
        break;
      case "session-decrement":
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
