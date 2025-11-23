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
    <header className={theme ? "header" : "headers"} id="Home">
      <nav className="navbar">
        <div className="logo">Khalid</div>

        {/* Hamburger Icon */}
        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Dark and Light Mood */}

        <button  onClick={() => HandleTheme()} className="theme-toggle-btn">
          {theme ? <Sun /> : <Moon />}
        </button>

        {/* Nav Links */}
        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
