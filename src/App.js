import React, { useState } from "react";

import {
  useTimeLeftShifter,
  useCountdownTimer,
  useShifter,
  useAbsoluteZero,
  usePhaseToggler,
  usePause
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
  const DEFAULT_SESSION_LENGTH = 10;
  const DEFAULT_BREAK_LENGTH = 5;

  const [phase, setPhase] = useState(true);

  const [play, setPlay] = useState(false);

  const [pause, setPause] = useState(false);

  const [shifting, setShifting] = useState(false);

  const [sessionLength, setSessionLength] = useState(DEFAULT_SESSION_LENGTH);

  const [breakLength, setBreakLength] = useState(DEFAULT_BREAK_LENGTH);

  const [timeLeft, setTimeLeft] = useState(DEFAULT_SESSION_LENGTH);

  const isSession = usePhaseToggler(play, phase, shifting);

  const handleReset = () => {
    setPhase(true);
    setPlay(false);
    setPause(false);
    setShifting(false);
    setSessionLength(DEFAULT_SESSION_LENGTH);
    setBreakLength(DEFAULT_BREAK_LENGTH);
    setTimeLeft(DEFAULT_SESSION_LENGTH);
  };

  useTimeLeftShifter(play, phase, setTimeLeft, sessionLength, breakLength);
  useCountdownTimer(play, setTimeLeft);

  useShifter(play, timeLeft, setShifting);
  useAbsoluteZero(
    shifting,
    setShifting,
    setPhase,
    phase,
    setTimeLeft,
    sessionLength,
    breakLength,
    play,
    isSession
  );

  usePause(pause);

  console.log(`
  phase = ${phase}
  play = ${play}
  pause = ${pause}
  shifting = ${shifting}
  sessionLength = ${sessionLength}
  breakLength = ${breakLength}
  timeLeft = ${timeLeft}
  isSession = ${isSession}
  
  `);

  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        <Title>Pomodoro Clock</Title>
        <LengthControlsWrapper>
          <LengthControls id="break">
            <Button id="break-decrement">down</Button>
            <span id="break-length">{Math.floor(breakLength / 60)}</span>
            <Button id="break-increment">up</Button>
          </LengthControls>
          <LengthControls id="session" length={sessionLength}>
            <Button>down</Button>
            <span id="session-length">{Math.floor(sessionLength / 60)}</span>
            <Button id="session-increment">up</Button>
          </LengthControls>
        </LengthControlsWrapper>
        <TimerWrapper play={play} phase={phase} timeLeft={timeLeft} />
        <BottomControlsWrapper>
          <Button
            id="start_stop"
            setPlay={setPlay}
            pause={pause}
            setPause={setPause}
            play={play}
          >
            start/stop
          </Button>
          <Button id="pause" pause={pause} setPause={setPause} play={play}>
            pause
          </Button>
          <Button id="reset" handleReset={handleReset}>
            reset
          </Button>
        </BottomControlsWrapper>
      </AppWrapper>
      <Footer />
    </>
  );
}

export default App;
