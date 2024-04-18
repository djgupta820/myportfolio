import React from "react";

const Certificate = (props) => {
  return (
    <div className="estyle">
      <h3>{props.name}</h3>
      <p>ID: {props.id}</p>
      <p>Issued by: {props.issuer}</p>
      <p>Validity: {props.validity}</p>
      {/* <a href="#" className="btn">
        view certificate
      </a> */}
    </div>
  );
};

export default Certificate;
