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
              <a href="https://linkedin.com/in" target="_blank">
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
            A motivated individual with in-depth knowledge of languages and
            development tools, seeking a position in a growthoriented company
            where I can use my skills to the advantage of the company while
            having the scope to develop my own skills.
          </p>
        </div>

        <div className="data-box">
          <h1>Technical Skills</h1>
          <div className="rskills">
            <div className="heads">
              <p>Languages:</p>
              <p>Frameworks:</p>
              <p>Databases:</p>
              <p>Tools:</p>
              <p>Others:</p>
            </div>
            {/* <div className="skill-data"></div> */}
            <div className="skill-data">
              <p>JavaScript, Python, Java, HTML, CSS, PHP, C/C++</p>
              <p>Bootstrap, Express.JS, Angular</p>
              <p>MySQL, MongoDB</p>
              <p>Visual Studio Code, Git, GitHub, NodeJS</p>
              <p>Data Structures and Algorithms using C++, ReactJS</p>
            </div>
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
              <li>Trained in Java J2EE, Node.JS, AngularJS, ReactJS</li>
              <li>
                Trained in design and development of websites using HTML, CSS,
                and JavaScript
              </li>
              <li>Worked on Angular, Express, MySQL, API, ReactJS</li>
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
        </div>

        <div className="data-box">
          <h1>Coding Profile</h1>
          <p>
            Solved 300+ questions on Leetcode and Coding Block (DSA using C++)
          </p>
        </div>

        <div className="data-box">
          <h1>Projects</h1>
          <div className="rprojects">
            <div className="rproject">
              <h4>
                <a
                  href="https://djgupta820.github.io/my-portfolio/"
                  target="_blank"
                >
                  Portfolio
                </a>
              </h4>
              <div className="tech">HTML, CSS and JavaScript</div>
              <h4>
                <a
                  href="https://github.com/djgupta820/my-portfolio"
                  target="_blank"
                >
                  Source Code
                </a>
              </h4>
              <div className="p-data">
                <ul>
                  <li>Optimized website for speed and user experience</li>
                  <li>
                    Utilized responsive design to ensure compatibility across
                    all devices.
                  </li>
                  <li>Deployed on GitHub pages via GitHub Actions.</li>
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
                  <li>A CRUD application</li>
                  <li>Exposed POST, GET methods using PHP.</li>
                  <li>A Team Project of Three</li>
                  <li>My role was at Backend and little bit in Frontend.</li>
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
                  <li>Users can register as Consumer or seller.</li>
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
    </div>
  );
};

export default Resume;
