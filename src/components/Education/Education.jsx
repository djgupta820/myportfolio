import React from "react";
import School from "./School";
import Certificate from "./Certificate";

const Education = () => {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Education</h1>
      <h2 style={{ marginLeft: "1em" }}>Schooling</h2>
      <div className="edu">
        <School
          course="10"
          school="Good Samaritan"
          yos="2016"
          yop="2017"
          score="76"
          type="school"
        />
        <School
          course="12"
          school="Good Samaritan"
          yos="2018"
          yop="2019"
          score="70"
          type="school"
        />
      </div>
      <h2 style={{ marginLeft: "1em" }}>Graduation</h2>
      <div className="edu">
        <School
          course="Bachelor of Computer Applications"
          school="Guru Gobind Singh Indraprastha University"
          yos="2019"
          yop="2022"
          score="90"
          type="Graduation"
        />
        <School
          course="Master of Technology"
          school="Birla Institute of Technology - Pilani"
          yos="2022"
          yop="2027"
          score="75"
          type="Post Graduation"
        />
      </div>
      <h2 style={{ marginLeft: "1em" }}>Certifications</h2>
      <div className="edu">
        <Certificate
          name="AWS Cloud Practitioner"
          id="EGPER7026MRQQCS9"
          issuer="Amazon"
          validity="2023-2026"
        />
        <Certificate
          name="Spring Boot"
          id="UC-38e582a5-bef5-4d72-b3ec-ad71e329b11a"
          issuer="Udemy"
          validity="always"
        />
      </div>
    </div>
  );
};

export default Education;
