import "./Project.css";

 const Projects = () => {
  const projects = [
    {
      title: "Task Manager App",
      desc: "A modern full-stack task manager with JWT Auth, React UI and Node.js backend.",
      tech: "React • Node.js • MySQL",
      link: "https://github.com/yourGit/task-manager",
    },
    {
      title: "E-Commerce Store",
      desc: "Complete online shop with cart, checkout and admin dashboard.",
      tech: "React • Context API • Stripe",
      link: "https://github.com/yourGit/ecommerce",
    },
    {
      title: "Portfolio Website",
      desc: "A clean animated portfolio built using React and plain CSS.",
      tech: "React • CSS",
      link: "https://github.com/yourGit/portfolio",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">Projects</h2>
      <p className="projects-sub">Here are some of my featured works.</p>

      <div className="project-grid">
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <div className="project-content">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <span className="tech">{p.tech}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;