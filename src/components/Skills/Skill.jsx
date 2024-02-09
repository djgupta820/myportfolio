import React from "react";
import Progress from "./Progress";

const Skill = (props) => {
  return (
    <div className="skill">
      <div>
        <h3>{props.data.name}</h3>
      </div>
      <Progress data={props.data.proficiency} />
    </div>
  );
};

export default Skill;
