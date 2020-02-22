import React from "react";

import alarm from "../../assets/alarm.mp3";

const Audio = ({ audioRef }) => {
  return (
    <audio ref={audioRef}>
      <source src={alarm} type="audio/mpeg" />
    </audio>
  );
};

export default Audio;
