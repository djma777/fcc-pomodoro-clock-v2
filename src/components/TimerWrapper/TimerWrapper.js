import React from "react";

import { StyledTimerWrapper } from "./TimerWrapper.styled";

const TimerWrapper = ({
  play,
  setPlay,
  phase,
  setPhase,
  sessionLength,
  breakLength
}) => {
  const timer = phase => {
    let minutes = Math.floor(
      phase === "Session" ? sessionLength / 60 : breakLength / 60
    );
    let seconds =
      phase === "Session"
        ? sessionLength - minutes * 60
        : breakLength - minutes * 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return `${minutes}:${seconds}`;
  };

  return (
    <StyledTimerWrapper>
      <span id="timer-label">{phase === "Session" ? "Session" : "Break"}</span>
      <span id="time-left">{timer(phase)}</span>
    </StyledTimerWrapper>
  );
};

export default TimerWrapper;
