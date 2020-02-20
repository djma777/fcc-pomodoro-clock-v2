import React, { useState, useEffect } from "react";

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
  let [phase, setPhase] = useState("Session");

  const [sessionLength, setSessionLength] = useState(1500);

  const [breakLength, setBreakLength] = useState(300);

  const [play, setPlay] = useState(false);

  const phaseHandler = () => {
    if (play && phase === "Session" && sessionLength === 0) {
      setPhase((phase = "Break"));
    } else if (phase === "Break" && breakLength === 0) {
      setPhase((phase = "Session"));
    }
  };

  useEffect(() => {
    phaseHandler();
    let intervalTest;
    const test = () => {
      intervalTest = setInterval(() => {
        if (phase === "Session") {
          setSessionLength(sessionLength - 1);
        } else {
          setBreakLength(breakLength - 1);
        }
      }, 1000);
    };

    if (play) {
      test();
    }

    return () => clearInterval(intervalTest);
  });

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
        />
        <BottomControlsWrapper>
          <Button
            id="start_stop"
            play={play}
            setPlay={setPlay}
            phase={phase}
            sessionLength={sessionLength}
            setSessionLength={setSessionLength}
            breakLength={breakLength}
            setBreakLength={setBreakLength}
          >
            start/stop
          </Button>
          <Button id="pause" play={play} setPlay={setPlay}>
            pause
          </Button>
          <Button
            id="reset"
            breakLength={breakLength}
            sessionLength={sessionLength}
            setBreakLength={setBreakLength}
            setSessionLength={setSessionLength}
            setPlay={setPlay}
            play={play}
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
