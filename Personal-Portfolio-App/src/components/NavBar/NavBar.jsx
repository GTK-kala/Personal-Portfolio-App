import { useState , useContext} from "react";
import { ContextApi } from "../../context/ContextProvider";
import { Sun, Moon } from "lucide-react";
import "./NavBar.css";

const NavBar = () => {
  const { theme , HandleTheme } = useContext(ContextApi);
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <header className={theme ? "header_light" : "header_night"} id="Home">
      <nav className="navbar">
        <div className={theme ? "logo_light" : "logo_night"}>Khalid</div>

        {/* Hamburger Icon */}
        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className={theme ? "line_light" : "line_night"}></span>
          <span className={theme ? "line_light" : "line_night"}></span>
          <span className={theme ? "line_light" : "line_night"}></span>
        </div>

        {/* Dark and Light Mood */}

        <button  onClick={() => HandleTheme()} className="theme-toggle-btn">
          {theme ? <Moon /> : <span className="Dark_icon"><Sun className="moon"/></span>}
        </button>

        {/* Nav Links */}
        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li>
            <a href="#home" onClick={closeMenu} className={theme ? "link_light" : "link_night"}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu} className={theme ? "link_light" : "link_night"}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeMenu} className={theme ? "link_light" : "link_night"}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu} className={theme ? "link_light" : "link_night"}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu} className={theme ? "link_light" : "link_night"}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
