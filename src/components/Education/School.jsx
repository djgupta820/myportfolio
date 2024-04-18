import React from "react";

const School = (props) => {
  return (
    <div className="estyle">
      <h3>{props.course}{props.course==10 || props.course==12?<sup>th</sup>:null}</h3>
        {/* <p>{props.type}</p> */}
        <small>
        <p>{props.school}</p>
        <p>{props.yos} - {props.yop}</p>
        <p>Score: {props.score}%</p>
        </small>
    </div>
  );
};

export default School;
