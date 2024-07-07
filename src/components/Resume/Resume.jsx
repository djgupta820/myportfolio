import React from "react";
import "./resume.css";

const Resume = () => {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Resume</h1>
      <div className="resume">
        <div className="top">
          <div className="top-left">
            <div className="name">Dheeraj Gupta</div>
            <div className="links">
              <a
                href="https://www.linkedin.com/in/dheeraj-gupta-40b846196/"
                target="_blank"
              >
                Linkedin
              </a>{" "}
              |
              <a href="https://github.com/djgupta820" target="_blank">
                Github
              </a>{" "}
              |
              <a href="https://leetcode.com/djgupta2000" target="_blank">
                Leetcode
              </a>
            </div>
          </div>
          <div className="top-right">
            <div className="contact-det">
              <p>Dakshinpuri New Delhi 110062</p>
              <p>
                Email:{" "}
                <a href="mailto:djgupta820@gmail.com">djgupta820@gmali.com</a>
              </p>
              <p>
                Phone: <a href="tel:9625169604">9625169604</a>
              </p>
            </div>
          </div>
        </div>

        <div className="data-box">
          <h1>Objective</h1>
          <p>
            A dedicated and results-driven Full Stack Developer with a passion
            for creating dynamic and efficient web applications. Seeking to
            contribute my skills and experience to innovative projects within a
            forward-thinking organization, driving growth and delivering
            impactful solutions.
          </p>
        </div>

        <div className="data-box">
          <h1>Technical Skills</h1>
          <div className="rskills">
            <p>
              Languages:{" "}
              <span>JavaScript, Python, Java, HTML, CSS, PHP, C/C++</span>
            </p>
            <p>
              Frameworks: <span>Bootstrap, Express.JS, Angular</span>
            </p>
            <p>
              Databases: <span>MySQL, MongoDB</span>
            </p>
            <p>
              Tools: <span>Visual Studio Code, Git, GitHub, NodeJS</span>
            </p>
            <p>
              Others:{" "}
              <span>Data Structures and Algorithms using C++, ReactJS</span>
            </p>
          </div>
        </div>

        <div className="data-box">
          <h1>Experience</h1>
          <div className="top">
            <h3>Web Developer</h3>
            <p>Hybrid-Bangalore</p>
          </div>
          <div className="top">
            <i>Wipro Ltd.</i>
            <p>July 2022 - Present</p>
          </div>
          <div className="trainings">
            <ul>
              <li>
                Developed and maintained web applications using NodeJS,
                ExpressJS, MySQL, and ReactJS.
              </li>
              <li>
                Designed and implemented dynamic user interfaces and responsive
                web applications.
              </li>
              <li>
                Implemented robust backend services with Node.js and Express.js,
                integrating with MySQL databases to handle complex data
                operations and API management.
              </li>
              <li>
                Collaborated with cross-functional teams to deliver robust and
                scalable web solutions.
              </li>
              <li>
                Completed extensive training in Java J2EE, Spring boot, Node.js,
                AngularJS, and ReactJS, enhancing my capabilities to manage both
                front-end and back-end development tasks effectively.
              </li>
            </ul>
          </div>
        </div>

        <div className="data-box">
          <h1>Education</h1>
          <div className="top">
            <p>Guru Gobind Singh Indraprastha University</p>
            <p>Delhi</p>
          </div>
          <div className="top">
            <p>
              <i>Bachelor of Computer Application</i>
            </p>
            <p>Aug 2019 – July 2022</p>
          </div>
          <div style={{marginLeft: "1.2em", marginTop:"1em"}}>
            <ul>
              <li>
                {" "}
                <b>Relevant Coursework:</b> Web Development, Data Structures,
                Database Management Systems.
              </li>
              <li>
                {" "}
                <b>Academic Projects:</b> Developed a comprehensive online
                examination platform as part of a team project during my final
                year.
              </li>
            </ul>
          </div>
        </div>

        <div className="data-box">
          <h1>Coding Profile</h1>
          <p>
            Solved 300+ coding problems on Leetcode, focusing on advanced data
            structures and algorithms.
          </p>
        </div>

        <div className="data-box">
          <h1>Projects</h1>
          <div className="rprojects">
            <div className="rproject">
              <h4>
                <a href="https://djgupta.netlify.app" target="_blank">
                  Portfolio
                </a>
              </h4>
              <div className="tech">ReactJS</div>
              <h4>
                <a
                  href="https://github.com/djgupta820/myportfolio"
                  target="_blank"
                >
                  Source Code
                </a>
              </h4>
              <div className="p-data">
                <ul>
                  <li>
                    Developed a personal portfolio website optimized for
                    performance and user experience.
                  </li>
                  <li>
                    Implemented responsive design techniques to ensure
                    compatibility across various devices.
                  </li>
                  <li>
                    Deployed the website using Netlify and managed version
                    control with Git.
                  </li>
                </ul>
              </div>
            </div>
            <div className="rproject">
              <h4>Online Examination System</h4>
              <div className="tech">
                Html, JavaScript, CSS, Bootstrap, PHP, MySQL
              </div>
              <h4>
                <a
                  href="https://github.com/djgupta820/online-examination-system"
                  target="_blank"
                >
                  Source Code
                </a>
              </h4>
              <div className="p-data">
                <ul>
                  <li>
                    Collaborated in a team of three to develop a CRUD
                    application for managing online exams.
                  </li>
                  <li>
                    Developed backend logic using PHP and integrated MySQL for
                    database management.
                  </li>
                  <li>
                    Contributed to frontend development, ensuring a seamless
                    user interface for exam participants.
                  </li>
                  <li>
                    A CRUD Application with exposed GET, POST, UPDATE and DELETE
                    methods.
                  </li>
                </ul>
              </div>
            </div>
            <div className="rproject">
              <h4>Foodies</h4>
              <div className="tech">Node.js, Express.js, MongoDBL</div>
              <h4>
                <a
                  href="https://github.com/djgupta820/online-examination-system"
                  target="_blank"
                >
                  Source Code
                </a>
              </h4>
              <div className="p-data">
                <ul>
                  <li>A CRUD application</li>
                  <li>Exposed POST, GET, PUT and Delete methods.</li>
                  <li>
                    Built a full-stack application allowing users to register
                    and order food as consumers or sellers.
                  </li>
                  <li>
                    Implemented RESTful APIs for handling CRUD operations with
                    MongoDB as the data store.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="data-box">
          <h1>Certifications</h1>
          <p>
            <a
              href="https://aw.certmetrics.com/amazon/public/verification.aspx"
              target="_blank"
            >
              AWS Certified Cloud Practitioner
            </a>{" "}
            <span>
              <i>Certificate ID: EGPER7026MRQQCS9</i>
            </span>
          </p>
          <p>Web Development in Django</p>
        </div>
      </div>
      <h3 className="warn">
        *Use screen size greater than 650px for best view
      </h3>
    </div>
  );
};

export default Resume;
