import React, { useState } from "react";

import {
  useCountdownTimer,
  useTimeLeft,
  usePhaseShifter,
  useAbsoluteZero
} from "./Hooks";

import { GlobalStyles } from "./GlobalStyles";
import {
  AppWrapper,
  Title,
  LengthControlsWrapper,
  LengthControls,
  TimerWrapper,
  BottomControlsWrapper,
  Button,
  Footer
} from "./components";

function App() {
  const [phase, setPhase] = useState(true);

  const [sessionLength, setSessionLength] = useState(1500);

  const [breakLength, setBreakLength] = useState(300);

  const [play, setPlay] = useState(false);

  const [timeLeft, setTimeLeft] = useState(1500);

  const [shifting, setShifting] = useState(false);

  useCountdownTimer(play, phase, setTimeLeft);
  useTimeLeft(timeLeft, setTimeLeft, play, phase, sessionLength, breakLength);
  usePhaseShifter(phase, setPhase, play, setPlay, timeLeft, setShifting);

  useAbsoluteZero(shifting, setShifting, setPlay);

  console.log(
    "phase " + phase,
    "play " + play,
    "sessionLength " + sessionLength,
    "timeLeft " + timeLeft
  );

  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        <Title>Pomodoro Clock</Title>
        <LengthControlsWrapper>
          <LengthControls id="break">
            <Button
              id="break-decrement"
              breakLength={breakLength}
              setBreakLength={setBreakLength}
              play={play}
            >
              down
            </Button>
            <span id="break-length">{Math.floor(breakLength / 60)}</span>
            <Button
              id="break-increment"
              breakLength={breakLength}
              setBreakLength={setBreakLength}
              play={play}
            >
              up
            </Button>
          </LengthControls>
          <LengthControls id="session" length={sessionLength}>
            <Button
              id="session-decrement"
              sessionLength={sessionLength}
              setSessionLength={setSessionLength}
              play={play}
            >
              down
            </Button>
            <span id="session-length">{Math.floor(sessionLength / 60)}</span>
            <Button
              id="session-increment"
              sessionLength={sessionLength}
              setSessionLength={setSessionLength}
              play={play}
            >
              up
            </Button>
          </LengthControls>
        </LengthControlsWrapper>
        <TimerWrapper
          play={play}
          setPlay={setPlay}
          phase={phase}
          setPhase={setPhase}
          sessionLength={sessionLength}
          breakLength={breakLength}
          timeLeft={timeLeft}
        />
        <BottomControlsWrapper>
          <Button id="start_stop" play={play} setPlay={setPlay}>
            start/stop
          </Button>
          <Button id="pause" play={play} setPlay={setPlay}>
            pause
          </Button>
          <Button
            id="reset"
            setBreakLength={setBreakLength}
            setSessionLength={setSessionLength}
            setPlay={setPlay}
            play={play}
            setPhase={setPhase}
          >
            reset
          </Button>
        </BottomControlsWrapper>
      </AppWrapper>
      <Footer />
    </>
  );
}

export default App;
