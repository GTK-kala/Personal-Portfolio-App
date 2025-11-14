import "./About.css";

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Tailwind",
    "MySQL",
    "Postman",
    "Git",
    "GitHub",
    "VSCode",
    "Next.js",
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Text Content */}
        <div className="about-text">
          <h2 className="section-title">About Me</h2>
          <p className="about-description">
            👨‍💻 I'm a Full-Stack Developer passionate about building modern,
            responsive, and interactive web applications. I turn ideas into
            seamless user experiences using the latest technologies.
          </p>

          <h3 className="skills-title">My Skills</h3>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <span key={index} className="skill">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Optional Info Cards */}
        <div className="about-cards">
          <div className="card">
            <h3>Experience</h3>
            <p>1+ Years</p>
          </div>
          <div className="card">
            <h3>Projects</h3>
            <p>10+ Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
