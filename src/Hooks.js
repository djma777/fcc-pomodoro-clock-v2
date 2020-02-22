import { useEffect } from "react";

let timerID;

function useCountdownTimer(play, phase, setTimeLeft, pause) {
  useEffect(() => {
    timerID = setInterval(() => {
      if (play && !pause) {
        setTimeLeft(tL => tL - 1);
      }
    }, 1000);

    return () => clearInterval(timerID);
  }, [play, phase, setTimeLeft]);
}

function usePhaseShifter(play, setPlay, timeLeft, setShifting) {
  useEffect(() => {
    if (play && timeLeft === 0) {
      setShifting(true);
      clearInterval(timerID);
    }
  }, [play, setPlay, timeLeft, setShifting]);
}

function useTimeLeft(
  timeLeft,
  setTimeLeft,
  play,
  phase,
  sessionLength,
  breakLength,
  shifting
) {
  useEffect(() => {
    if ((!play && shifting) || (!play && !shifting)) {
      setTimeLeft(phase ? sessionLength : breakLength);
    }
  }, [
    timeLeft,
    setTimeLeft,
    play,
    phase,
    sessionLength,
    breakLength,
    shifting
  ]);
}

function useAbsoluteZero(shifting, setShifting, setPlay, setPhase, phase) {
  useEffect(() => {
    let timeoutID;
    if (shifting) {
      timeoutID = setTimeout(() => {
        setPhase(!phase);
        setPlay(true);
        setShifting(false);
      }, 1000);
    }

    return () => clearTimeout(timeoutID);
  }, [shifting, setShifting, setPlay, setPhase, phase]);
}

export { useCountdownTimer, useTimeLeft, usePhaseShifter, useAbsoluteZero };
