import React from "react";
import { Link } from "react-router-dom";

const Project = (props) => {
  return (
    <div className="project">
      <h2>{props.data.title}</h2>
      <p>{props.data.desc}</p>
      {props.data.liveLink ? (
        <p style={{ color: "green" }}>
          <b>
            This project is live at{" "}
            <a
              href={props.data.liveLink}
              target="_blank"
              style={{ textDecoration: "none", color: "skyblue" }}
            >
              {props.data.liveAt}
            </a>
          </b>
        </p>
      ) : (
        <p style={{ color: "red" }}>
          <b>This project is not live.</b>
        </p>
      )}
      {props.data.videoLink ? (
        <p>
          Watch the{" "}
          <Link
            to={`/video/${props.data.videoLink}`}
            style={{ color: "skyblue" }}
          >
            Video
          </Link>
        </p>
      ) : (
        <p style={{ textDecoration: "underline", color: "red" }}>
          Video is not uploaded for this project :(
        </p>
      )}

      <a href={props.data.link} className="p-btn">
        Project Link
      </a>
    </div>
  );
};

export default Project;
