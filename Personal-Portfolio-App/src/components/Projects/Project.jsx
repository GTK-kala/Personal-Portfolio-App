import { ContextApi } from "../../context/ContextProvider";
import { projects } from "../../assets/Data/Data";
import { useContext } from "react";
import "./Project.css";

const Projects = () => {
   const { theme } = useContext(ContextApi);

  return (
    <section className={theme ? "projects_light" : "projects_night"} id="projects">
      <h2 className={theme ? "projects-title_light" : "projects-title_night"}>Projects</h2>
      <p className={theme ? "projects-sub_light" : "projects-sub_night"}>
        Some of my best work that shows my skills and creativity.
      </p>

      <div className="project-grid">
        {projects.map((p, i) => (
          <a key={i} href={p.link} className={theme ? "project-card_light" : "project-card_night"} target="_blank">
            <div className="project-header">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>

            <div className={theme ? "project-body_light" : "project-body_night"}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <span className="tech">{p.tech}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
export default Projects;
