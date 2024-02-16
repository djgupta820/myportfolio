import React from "react";

const Progress = (props) => {
  return (
    <div className="progressbar" title={props.data * 10 + "%"}>
      <div className="progress" style={{ width: `${props.data * 10}%` }}>
        {props.data}0%
      </div>
    </div>
  );
};

export default Progress;
