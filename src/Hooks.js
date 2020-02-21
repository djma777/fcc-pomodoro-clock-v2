import { useEffect } from "react";

function useCountdownTimer(play, phase, setTimeLeft) {
  useEffect(() => {
    const timer = setInterval(() => {
      if (play) {
        setTimeLeft(tL => tL - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [play, phase, setTimeLeft]);
}

function useTimeLeft(
  timeLeft,
  setTimeLeft,
  play,
  phase,
  sessionLength,
  breakLength
) {
  useEffect(() => {
    if (!play) {
      setTimeLeft(phase ? sessionLength : breakLength);
    }
  }, [timeLeft, setTimeLeft, play, phase, sessionLength, breakLength]);
}

function usePhaseShifter(
  phase,
  setPhase,
  play,
  setPlay,
  timeLeft,
  setShifting
) {
  if (play && timeLeft === 0) {
    setShifting(true);
    setPlay(false);
    setPhase(!phase);
  }
}

function useAbsoluteZero(shifting, setShifting, setPlay) {
  useEffect(() => {
    let timeoutID;
    if (shifting) {
      timeoutID = setTimeout(() => {
        setPlay(true);
        setShifting(false);
      }, 1000);
    }

    return () => clearTimeout(timeoutID);
  }, [shifting, setShifting, setPlay]);
}

export { useCountdownTimer, useTimeLeft, usePhaseShifter, useAbsoluteZero };
