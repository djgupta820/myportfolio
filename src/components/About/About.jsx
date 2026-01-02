import React from "react";

const About = () => {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>About Me :)</h1>
      <div className="about">
        <div className="img">
          <img src="/dheeraj.png" alt="image" />
        </div>
        <div className="data">
          <h1>Automation Engineer & Full Stack Developer</h1>
          <p>
            Results-driven software engineer with extensive experience in full-stack development, cloud architecture, and automation engineering. 
            Specialized in designing and implementing scalable enterprise applications using modern technologies including .NET Core, MEAN/MERN stack, 
            and AWS cloud services. Currently focused on automating workflows using Python, PowerShell, and Ansible to streamline business processes, 
            optimize CI/CD pipelines, and enhance operational efficiency.
          </p>
          <p>
            <b>Currently serving as an Automation Engineer, architecting and implementing workflow automation solutions that drive digital transformation and operational excellence.</b>
          </p>
          <p>Core Competencies:</p>
          <ul>
            <li>Advanced proficiency in full-stack development with MEAN/MERN stack, .NET Core, Java Spring Boot, and modern JavaScript frameworks</li>
            <li>Expertise in cloud architecture and serverless computing with AWS (Developer Associate certified)</li>
            <li>Strong foundation in data structures, algorithms, and system design principles</li>
            <li>Proven ability to deliver responsive, cross-browser compatible solutions with exceptional user experience</li>
            <li>Experienced in agile methodologies, collaborative development, and DevOps best practices</li>
          </ul>
          <p>
            Committed to continuous learning and staying at the forefront of emerging technologies. Currently pursuing M.Tech from 
            Birla Institute of Technology, Pilani, with a focus on advanced software engineering and system architecture.
          </p>
        </div>
      </div>

      <div className="journey-section">
        <h2>My Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-date">Nov 2025 - Present</div>
              <h3>Automation Engineer</h3>
              <h4>Wipro Ltd.</h4>
              <p>Architecting and implementing workflow automation solutions using Python, PowerShell, and Ansible. Streamlining business processes, building CI/CD pipelines, and developing intelligent automation frameworks to enhance operational efficiency.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-date">2025</div>
              <h3>AWS Developer - Associate</h3>
              <h4>Amazon Web Services</h4>
              <p>Certified AWS Developer with expertise in serverless architectures, Lambda, DynamoDB, and cloud-native application development.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-date">2023 - Present</div>
              <h3>M.Tech Student</h3>
              <h4>Birla Institute of Technology - Pilani</h4>
              <p>Pursuing Master of Technology with focus on advanced software development and system design.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-date">Mar 2023 - Oct 2025</div>
              <h3>.NET Full-Stack Developer</h3>
              <h4>Wipro Ltd.</h4>
              <p>Developed enterprise applications using ASP.NET Core, C#, Entity Framework, and SQL Server. Built RESTful APIs and modern web interfaces.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-date">2023</div>
              <h3>AWS Cloud Practitioner</h3>
              <h4>Amazon Web Services</h4>
              <p>Achieved AWS Cloud Practitioner certification, demonstrating knowledge of cloud architecture and services.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-date">Jun 2022 - Feb 2023</div>
              <h3>Full Stack Developer</h3>
              <h4>Wipro Ltd.</h4>
              <p>Working on full-stack applications with Angular, Node.js, and MySQL. Gained experience in MEAN/MERN stack and agile development.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-date">2019 - 2022</div>
              <h3>Bachelor of Computer Applications</h3>
              <h4>Guru Gobind Singh Indraprastha University</h4>
              <p>Graduated with 89% marks. Built strong foundation in computer science fundamentals and web development.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
