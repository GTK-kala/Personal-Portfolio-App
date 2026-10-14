import { useContext } from "react";
import { Data } from "../../assets/Data/Data";
import { ContextApi } from "../../context/ContextProvider";
import { Download, Send, Github, Linkedin, Sparkles } from "lucide-react";

const Hero = () => {
  const { theme } = useContext(ContextApi);

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 transition-colors duration-500 ${
        theme ? "bg-bg" : "bg-darkbg"
      }`}
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 -z-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-72 sm:w-96 h-72 sm:h-96 bg-secondary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div
          className="absolute top-40 -right-20 w-72 sm:w-96 h-72 sm:h-96 bg-tertiary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute -bottom-20 left-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container-x relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 animate-slide-in-left">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${
                theme
                  ? "bg-bg shadow-neu-light-sm"
                  : "bg-darkbg-light shadow-neu-dark-sm"
              }`}
            >
              <Sparkles size={14} className="text-tertiary-500" />
              <span
                className={`text-xs sm:text-sm font-medium ${
                  theme ? "text-primary-700" : "text-bg"
                }`}
              >
                Available for work
              </span>
              <span className="w-2 h-2 bg-tertiary-500 rounded-full animate-pulse" />
            </div>

            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight ${
                theme ? "text-primary" : "text-bg"
              }`}
            >
              Hi, I'm{" "}
              <span className="gradient-text block sm:inline">{Data.name}</span>
            </h1>

            <p
              className={`text-lg sm:text-xl md:text-2xl mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed ${
                theme ? "text-primary-600" : "text-bg-dark"
              }`}
            >
              {Data.role} crafting{" "}
              <span className="text-secondary font-semibold">
                modern web experiences
              </span>{" "}
              with clean code and beautiful design.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href={Data.resumeLink}
                download
                className="neu-btn-primary inline-flex items-center justify-center gap-2"
              >
                <Download size={18} />
                Download CV
              </a>
              <a
                href="#contact"
                className={`neu-btn inline-flex items-center justify-center gap-2 ${
                  theme ? "" : ""
                }`}
              >
                <Send size={18} />
                Contact Me
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-3 justify-center lg:justify-start">
              {[
                { icon: Github, href: "https://github.com/GTK-kala" },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/yourusername",
                },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                    theme
                      ? "bg-bg shadow-neu-light-sm text-primary hover:text-secondary"
                      : "bg-darkbg-light shadow-neu-dark-sm text-bg hover:text-tertiary"
                  }`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-slide-in-right">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Outer ring */}
              <div
                className={`absolute inset-0 rounded-full ${
                  theme ? "shadow-neu-light" : "shadow-neu-dark"
                }`}
              />
              {/* Glow ring */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary via-secondary to-tertiary animate-gradient opacity-80" />
              {/* Image */}
              <div className="absolute inset-4 rounded-full overflow-hidden bg-bg-light">
                <img
                  src={Data.profileImage}
                  alt={Data.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badges */}
              <div
                className={`absolute -top-2 right-4 px-3 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-primary to-secondary shadow-lg animate-float`}
              >
                ⚡ React
              </div>
              <div
                className={`absolute -bottom-2 left-4 px-3 py-2 rounded-full text-xs font-semibold text-primary bg-tertiary shadow-lg animate-float`}
                style={{ animationDelay: "2s" }}
              >
                💻 Full-Stack
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
