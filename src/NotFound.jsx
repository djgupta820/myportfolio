import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <div style={{textAlign:"center"}}>
        <h1>Page Not Found :(</h1>
        <p>
          go to <Link to={"/"}>Home</Link> page
        </p>
      </div>
    </div>
  );
};

export default NotFound;
