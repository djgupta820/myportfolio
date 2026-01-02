import React, { useRef } from "react";
import Progress from "./Progress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import * as brandIcons from "@fortawesome/free-brands-svg-icons";

const Skill = (props) => {
  // Get the icon from either brand or solid icons
  const getIcon = (iconName) => {
    return brandIcons[iconName] || solidIcons[iconName] || solidIcons.faCode;
  };

  return (
    <div className="skill">
      <div className="skill-header">
        {props.data.icon && (
          <FontAwesomeIcon 
            icon={getIcon(props.data.icon)} 
            className="skill-icon"
          />
        )}
        <h3>{props.data.name}</h3>
      </div>
      <Progress data={props.data.proficiency} />
    </div>
  );
};

export default Skill;
