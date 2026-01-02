import React from "react";
import "./resume.css";

const Resume = () => {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Resume</h1>
      <div className="resume-terminal">
        <div className="resume-content-wrapper">
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
          <h2>Objective</h2>
          <div className="terminal-section">
          <p>
            A dedicated and results-driven Full Stack Developer with a passion
            for creating dynamic and efficient web applications. Seeking to
            contribute my skills and experience to innovative projects within a
            forward-thinking organization, driving growth and delivering
            impactful solutions.
          </p>
          </div>
        </div>

        <div className="data-box">
          <h2>Skills</h2>
          <div className="terminal-section">
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
        </div>

        <div className="data-box">
          <h2>Experience</h2>
          <div className="terminal-section">
            <div className="exp-header">
              <div className="exp-left">
                <h3>Automation Engineer</h3>
                <p><i>Wipro Ltd.</i></p>
              </div>
              <div className="exp-right">
                <p>Hybrid – Bengaluru, Karnataka, India</p>
                <p>Nov 2025 – Present</p>
              </div>
            </div>
          <div className="trainings">
            <ul>
              <li>
                Designed, developed, and deployed automation scripts.
              </li>
              <li>
                Automated manual workflows across systems.
              </li>
              <li>
                Implemented scheduled jobs and monitoring scripts to ensure 24×7 system reliability and error detection.
              </li>
              <li>
                Collaborated with cross-functional teams to identify repetitive tasks and reduce manual workload by automating key business processes.
              </li>
            </ul>
          </div>
          </div>
        </div>

        <div className="data-box">
          <div className="terminal-section">
            <div className="exp-header">
              <div className="exp-left">
                <h3>.NET Full Stack Developer</h3>
                <p><i>Wipro Ltd.</i></p>
              </div>
              <div className="exp-right">
                <p>Hybrid – Bangalore</p>
                <p>March 2024 – Nov 2025</p>
              </div>
            </div>
          <div className="trainings">
            <ul>
              <li>
                Designed, developed, and maintained scalable web applications using C#, .NET MVC 5, MS SQL Server, and front-end technologies (HTML, CSS, JavaScript, jQuery, Angular).
              </li>
              <li>
                Engaged in continuous development, bug fixing, and feature enhancements, ensuring high availability and reliability of web applications.
              </li>
              <li>
                Implemented robust back-end logic, REST APIs, and optimized database queries to improve performance and reduce response time.
              </li>
              <li>
                Collaborating with teams to enhance software scalability, security, and maintainability.
              </li>
            </ul>
          </div>
          </div>
        </div>

        <div className="data-box">
          <div className="terminal-section">
            <div className="exp-header">
              <div className="exp-left">
                <h3>Web Developer</h3>
                <p><i>Wipro Ltd.</i></p>
              </div>
              <div className="exp-right">
                <p>Hybrid-Bangalore</p>
                <p>July 2022 - March 2024</p>
              </div>
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
        </div>

        <div className="data-box">
          <h2>Education</h2>
          <div className="terminal-section">
            <div className="exp-header">
              <div className="exp-left">
                <h3>Bachelor of Computer Application</h3>
                <p><i>Guru Gobind Singh Indraprastha University</i></p>
              </div>
              <div className="exp-right">
                <p>Delhi</p>
                <p>Aug 2019 – July 2022</p>
              </div>
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
        </div>

        <div className="data-box">
          <h2>Coding Profile</h2>
          <div className="terminal-section">
          <p>
            Solved 300+ coding problems on Leetcode, focusing on advanced data
            structures and algorithms.
          </p>
          </div>
        </div>

        <div className="data-box">
          <h2>Projects</h2>
          <div className="terminal-section">
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
        </div>

        <div className="data-box">
          <h2>Certifications</h2>
          <div className="terminal-section">
          <p>
            <a
              href="https://aw.certmetrics.com/amazon/public/verification.aspx"
              target="_blank"
            >
              AWS Certified Developer - Associate
            </a>{" "}
            <span>
              <i>Certificate ID: ac2ed930a76e4ef992098edfe79f4e3e</i>
            </span>
          </p>
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
          </div>
        </div>
      </div>
        </div>
      </div>
      <h3 className="warn">
        *Use screen size greater than 650px for best view
      </h3>
    </div>
  );
};

export default Resume;
