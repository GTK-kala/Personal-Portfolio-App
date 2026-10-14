import { useContext } from "react";
import { projects } from "../../assets/Data/Data";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { ContextApi } from "../../context/ContextProvider";

const Projects = () => {
  const { theme } = useContext(ContextApi);

  return (
    <section
      id="projects"
      className={`section-py relative overflow-hidden transition-colors duration-500 ${
        theme ? "bg-bg" : "bg-darkbg"
      }`}
    >
      {/* Decorative blobs */}
      <div className="absolute top-40 right-0 w-72 h-72 bg-tertiary-200 rounded-full filter blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute bottom-40 left-0 w-72 h-72 bg-secondary-200 rounded-full filter blur-3xl opacity-20 pointer-events-none" />

      <div className="container-x relative">
        <div className="mb-12 sm:mb-16">
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Some of my best work that showcases my skills and creativity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 block ${
                theme
                  ? "bg-bg shadow-neu-light hover:shadow-neu-light-sm"
                  : "bg-darkbg-light shadow-neu-dark hover:shadow-neu-dark-sm"
              }`}
            >
              {/* Top Bar (Browser mockup) */}
              <div
                className={`flex items-center justify-between px-4 py-3 ${
                  theme ? "bg-bg-dark" : "bg-darkbg"
                }`}
              >
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <ArrowUpRight
                  size={16}
                  className={`group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ${
                    theme ? "text-primary-400" : "text-bg-dark"
                  }`}
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3
                  className={`text-lg sm:text-xl font-bold mb-2 transition-colors group-hover:text-secondary ${
                    theme ? "text-primary" : "text-bg"
                  }`}
                >
                  {p.title}
                </h3>
                <p
                  className={`text-sm mb-4 leading-relaxed ${
                    theme ? "text-primary-600" : "text-bg-dark"
                  }`}
                >
                  {p.desc}
                </p>

                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-full ${
                      theme
                        ? "bg-gradient-to-r from-secondary-50 to-tertiary-50 text-primary-700"
                        : "bg-darkbg text-tertiary"
                    }`}
                  >
                    {p.tech}
                  </span>
                  <ExternalLink
                    size={14}
                    className={theme ? "text-primary-400" : "text-bg-dark"}
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
