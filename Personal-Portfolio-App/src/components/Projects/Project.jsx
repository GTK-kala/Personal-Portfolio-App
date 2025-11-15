import { projects } from "../../assets/Data/Data";
import "./Project.css";

export default function Projects() {

  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">Projects</h2>
      <p className="projects-sub">Some of my best work that shows my skills and creativity.</p>

      <div className="project-grid">
        {projects.map((p, i) => (
          <a key={i} href={p.link} className="project-card" target="_blank">
            <div className="project-header">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>

            <div className="project-body">
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
