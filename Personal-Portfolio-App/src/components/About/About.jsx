import './About.css';

const About = () => {
  
  return (
   <section className="about" id="about">
      <div className="about-container">
        {/* Text Content */}
        <div className="about-text">
          <h2 className="section-title">About Me</h2>
          <p>
            Hello! I'm <strong>Khalid</strong>, a passionate Frontend Developer with a strong focus on React.js and modern web development. I enjoy crafting beautiful, responsive, and user-friendly web applications that deliver seamless experiences.
          </p>
          <p>
            I have experience in building projects using React, JavaScript, HTML, CSS, and integrating backend APIs. I love learning new technologies and continuously improving my skills.
          </p>
        </div>

        {/* Info Cards */}
        <div className="about-cards">
          <div className="card">
            <h3>Experience</h3>
            <p>1+ Years</p>
          </div>
          <div className="card">
            <h3>Projects</h3>
            <p>10+ Completed</p>
          </div>
          <div className="card">
            <h3>Skills</h3>
            <p>React, JS, HTML, CSS</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About