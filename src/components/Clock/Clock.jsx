import React, { useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const Clock = (props) => {
  const [time, setTime] = useState("00:00:00");
  function setTimeNow() {
    let d = new Date();
    let hours = d.getHours();
    let mints = d.getMinutes();
    let sec = d.getSeconds();

    if (hours <= 9) {
      hours = "0" + hours;
    }
    if (mints <= 9) {
      mints = "0" + mints;
    }
    if (sec <= 9) {
      sec = "0" + sec;
    }

    let t = hours + " : " + mints + " : " + sec;
    setTime(t);
  }
  setInterval(setTimeNow, 1000)

  return (
    <div className="clock" title="Current Time">
        <FontAwesomeIcon icon={faTimes} className="close" title="Close" onClick={() => props.toggle()} />
      <p id="time"> {time} </p>
    </div>
  );
};

export default Clock;
