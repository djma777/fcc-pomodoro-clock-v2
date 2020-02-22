import { useState, useEffect } from "react";

let timerID;

export const useCountdownTimer = (play, setTimeLeft) => {
  useEffect(() => {
    if (play) {
      startCountdown(setTimeLeft);
    }

    return () => clearInterval(timerID);
  });
};

export const useTimeLeftShifter = (
  play,
  phase,
  setTimeLeft,
  sessionLength,
  breakLength
) => {
  useEffect(() => {
    if (!play) {
      setTimeLeft(phase ? sessionLength : breakLength);
    }
  });
};

export const useShifter = (play, timeLeft, setShifting) => {
  useEffect(() => {
    if (play) {
      if (timeLeft === 0) {
        setShifting(true);
      }
    }

    return;
  });
};

export const useAbsoluteZero = (
  shifting,
  setShifting,
  setPhase,
  phase,
  setTimeLeft,
  sessionLength,
  breakLength,
  play,
  isSession
) => {
  useEffect(() => {
    let timeoutID;
    if (play && shifting) {
      clearInterval(timerID);

      timeoutID = setTimeout(() => {
        setTimeLeft(isSession ? sessionLength : breakLength);
        setPhase(!phase);
        setShifting(false);

        startCountdown(setTimeLeft);
      }, 1000);
    }

    return () => clearTimeout(timeoutID);
  });
};

export const usePhaseToggler = (play, phase, shifting) => {
  const [session, setSession] = useState(true);
  useEffect(() => {
    if (play && shifting) {
      setSession(!phase);
    }
  }, [play, shifting, phase]);

  return session;
};

export const usePause = pause => {
  useEffect(() => {
    if (pause) {
      clearTimeout(timerID);
    }
  });
};

//HELPER FUNCTIONS
function startCountdown(setTimeLeft) {
  timerID = setInterval(() => setTimeLeft(tL => tL - 1), 1000);
}
