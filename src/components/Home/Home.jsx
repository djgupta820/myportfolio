import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="image">
        <div className="img-txt">
          <h1>Full Stack Developer</h1>
          <h1>Hi I'm Dheeraj Gupta</h1>
        </div>
        <div className="btns">
          <a href="/Full_Stack_Dheeraj" download>
            Download Resume
          </a>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
