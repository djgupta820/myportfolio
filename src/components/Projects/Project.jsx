import React from "react";
import { Link } from "react-router-dom";

const Project = (props) => {
  return (
    <div className="project">
      <div className="project-content">
        <h2>{props.data.title}</h2>
        <p>{props.data.desc}</p>
        
        {props.data.tech && props.data.tech.length > 0 && (
          <div className="tech-badges">
            {props.data.tech.map((technology, idx) => (
              <span className="tech-badge" key={idx}>{technology}</span>
            ))}
          </div>
        )}

        {props.data.liveAt ? (
          <p className="project-status live">
            <span className="status-icon">●</span> Live at{" "}
            <a
              href={props.data.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.data.liveAt}
            </a>
          </p>
        ) : (
          <p className="project-status not-live">
            <span className="status-icon">●</span> Not deployed
          </p>
        )}

        {props.data.videoLink && (
          <Link to={`/video/${props.data.videoLink}`} className="video-link">
            📹 Watch Demo
          </Link>
        )}

        <a href={props.data.link} className="p-btn" target="_blank" rel="noopener noreferrer">
          View on GitHub →
        </a>
      </div>
    </div>
  );
};

export default Project;
