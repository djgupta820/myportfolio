import React from "react";
import School from "./School";
import Certificate from "./Certificate";

const Education = () => {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Education & Certifications</h1>
      <div className="education-section">
        <div className="education-content-wrapper">
          <h2 className="section-header">📚 Academic Background</h2>
          <h3 className="subsection-title">// Secondary Education</h3>
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
          
          <h3 className="subsection-title">// Higher Education</h3>
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
          
          <h2 className="section-header">🏆 Professional Certifications</h2>
          <div className="edu">
            <Certificate
              name="AWS Developer - Associate"
              id="ac2ed930a76e4ef992098edfe79f4e3e"
              issuer="Amazon Web Services"
              validity="2025-2028"
            />
            <Certificate
              name="AWS Cloud Practitioner"
              id="EGPER7026MRQQCS9"
              issuer="Amazon"
              validity="2023-2028"
            />
            <Certificate
              name="Spring Boot"
              id="UC-38e582a5-bef5-4d72-b3ec-ad71e329b11a"
              issuer="Udemy"
              validity="always"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
