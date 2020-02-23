import React, { useState, useRef } from "react";

import {
  useTimeLeftShifter,
  useCountdownTimer,
  useShifter,
  useAbsoluteZero,
  usePhaseToggler,
  useAlarm,
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
  Footer,
  Audio
} from "./components";

function App() {
  const DEFAULT_SESSION_LENGTH = 1500;
  const DEFAULT_BREAK_LENGTH = 300;
  const audioRef = useRef();

  const [phase, setPhase] = useState(true);

  const [play, setPlay] = useState(false);

  const [pause, setPause] = useState(false);

  const [shifting, setShifting] = useState(false);

  const [sessionLength, setSessionLength] = useState(DEFAULT_SESSION_LENGTH);

  const [breakLength, setBreakLength] = useState(DEFAULT_BREAK_LENGTH);

  const [timeLeft, setTimeLeft] = useState(DEFAULT_SESSION_LENGTH);

  const isSession = usePhaseToggler(play, phase, shifting);

  useCountdownTimer(play, setTimeLeft);
  useTimeLeftShifter(play, phase, setTimeLeft, sessionLength, breakLength);

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

  useAlarm(audioRef, timeLeft);
  usePause(pause);
  const handleReset = () => {
    setPhase(true);
    setPlay(false);
    setPause(false);
    setShifting(false);
    setSessionLength(DEFAULT_SESSION_LENGTH);
    setBreakLength(DEFAULT_BREAK_LENGTH);
    setTimeLeft(DEFAULT_SESSION_LENGTH);
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  console.log(`
  phase = ${phase}
  play = ${play}
  pause = ${pause}
  shifting = ${shifting}
  sessionLength = ${sessionLength}
  breakLength = ${breakLength}
  timeLeft = ${timeLeft}
  isSession = ${isSession}
  audioRef = ${audioRef.current}
  
  `);

  console.log(audioRef);

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
            >
              down
            </Button>
            <span id="break-length">{Math.floor(breakLength / 60)}</span>
            <Button
              id="break-increment"
              breakLength={breakLength}
              setBreakLength={setBreakLength}
            >
              up
            </Button>
          </LengthControls>
          <LengthControls id="session" length={sessionLength}>
            <Button
              id="session-decrement"
              sessionLength={sessionLength}
              setSessionLength={setSessionLength}
            >
              down
            </Button>
            <span id="session-length">{Math.floor(sessionLength / 60)}</span>
            <Button
              id="session-increment"
              sessionLength={sessionLength}
              setSessionLength={setSessionLength}
            >
              up
            </Button>
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
      <Audio audioRef={audioRef} timeLeft={timeLeft} />
    </>
  );
}

export default App;
