import React from "react";

import { StyledTimerWrapper } from "./TimerWrapper.styled";

const TimerWrapper = ({ phase, timeLeft }) => {
  const timer = () => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft - minutes * 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return `${minutes}:${seconds}`;
  };

  return (
    <StyledTimerWrapper>
      <span id="timer-label">{phase ? "Session" : "Break"}</span>
      <span id="time-left">{timer()}</span>
      {!phase ? <span>Break has started</span> : null}
    </StyledTimerWrapper>
  );
};

export default TimerWrapper;
