import React from "react";

const About = () => {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>About Me :)</h1>
      <div className="about">
        <div className="img">
          <img src="/image.png" alt="image" />
        </div>
        <div className="data">
          <h1>Full Stack Developer</h1>
          <p>
            Hi there! My name is Dheeraj Gupta and I'm a web developer based in
            New Delhi. I have a passion for creating clean, elegant, and
            effective websites that engage users and achieve their goals. I can
            work with front-end and back-end technologies to build dynamic and
            scalable web applications.
          </p>
          <p>
            Currently I'm an intern at wipro technologies and took trainings on
            various technologies.
          </p>
          <p> My strengths include: </p>
          <ul>
            <li> Proficiency in HTML, CSS, JavaScript, MySQL and C++. </li>
            <li>
              Experience with responsive design and cross-browser compatibility.
            </li>
            <li>
              Knowledge of user experience (UX) principles and best practices.
            </li>
            <li>Ability to work in a collaborative, agile environment.</li>
          </ul>
          <p>
            I'm always looking to learn new skills and stay up-to-date with the
            latest technologies. Outside of work, I enjoy Music and mobile
            games.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
