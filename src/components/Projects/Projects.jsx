import React, { useEffect, useState } from "react";
import Project from "./Project";
import { projects } from "../../projects.json";

const Projects = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(projects);
  });
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Projects</h1>
      <div className="projects-terminal">
        <div className="projects-content-wrapper">
          <div className="command-header">$ ls -la ~/projects/ --recursive</div>
          <div className="projects">
            {data ? (
              data.map((item, idx) => {
                return <Project data={item} key={idx} />;
              })
            ) : (
              <p>No Projects yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
