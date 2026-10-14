import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect, useContext } from "react";
import { ContextApi } from "../../context/ContextProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { theme, HandleTheme } = useContext(ContextApi);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPos = window.scrollY + 100;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (
          el &&
          el.offsetTop <= scrollPos &&
          el.offsetTop + el.offsetHeight > scrollPos
        ) {
          setActive(section);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? theme
            ? "bg-bg/80 backdrop-blur-lg shadow-neu-light-sm py-2"
            : "bg-darkbg/80 backdrop-blur-lg shadow-neu-dark-sm py-2"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container-x">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-secondary/30 group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <span
              className={`text-xl font-bold hidden sm:block ${
                theme ? "text-primary" : "text-bg"
              }`}
            >
              Khalid
            </span>
          </a>

          {/* Desktop Menu */}
          <div
            className={`hidden md:flex items-center gap-1 p-1.5 rounded-full ${
              theme
                ? "shadow-neu-light-sm bg-bg"
                : "shadow-neu-dark-sm bg-darkbg-light"
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === link.href.slice(1)
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-md"
                    : theme
                      ? "text-primary-700 hover:text-primary"
                      : "text-bg-dark hover:text-bg"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={HandleTheme}
              aria-label="Toggle theme"
              className={`p-2.5 rounded-full transition-all duration-300 hover:scale-110 ${
                theme
                  ? "shadow-neu-light-sm text-primary bg-bg"
                  : "shadow-neu-dark-sm text-tertiary bg-darkbg-light"
              }`}
            >
              {theme ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <a
              href="#contact"
              className="hidden lg:block px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-primary to-secondary shadow-md shadow-secondary/30 hover:shadow-lg hover:scale-105 transition-all"
            >
              Hire Me
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
              className={`md:hidden p-2.5 rounded-full ${
                theme
                  ? "shadow-neu-light-sm text-primary bg-bg"
                  : "shadow-neu-dark-sm text-bg bg-darkbg-light"
              }`}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className={`md:hidden mt-3 p-3 rounded-2xl animate-slide-up ${
              theme
                ? "bg-bg shadow-neu-light"
                : "bg-darkbg-light shadow-neu-dark"
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl font-medium transition-all mb-1 ${
                  active === link.href.slice(1)
                    ? "bg-gradient-to-r from-primary to-secondary text-white"
                    : theme
                      ? "text-primary-700 hover:bg-secondary-50"
                      : "text-bg-dark hover:bg-darkbg"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
