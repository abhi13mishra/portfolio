import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
    });
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      let current = "";

      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (!el) return;

        const offset = el.offsetTop - 200; // 👈 important fix
        const height = el.offsetHeight;

        if (window.scrollY >= offset && window.scrollY < offset + height) {
          current = sec;
        }
      });

      if (current) setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className="nav">
      <h2>Portfolio</h2>

      {/* Hamburger */}
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menu */}
      <ul className={open ? "nav-links active" : "nav-links"}>
        {["home", "about", "skills", "projects", "contact"].map((sec) => (
          <li key={sec} className={active === sec ? "active" : ""}>
            <button onClick={() => scrollTo(sec)}>
              {sec.toUpperCase()}
            </button>
          </li>
        ))}

        {/* Resume (Mobile only) */}
        <li className="mobile-resume">
          <a href="/Abhishek-Mishra-Resume.pdf" target="_blank">
            <button className="secondary">Resume</button>
          </a>
        </li>
      </ul>

      {/* Resume (Desktop only) */}
      <a href="/Abhishek-Mishra-Resume.pdf" target="_blank" className="resume-btn">
        <button>Resume</button>
      </a>
    </nav>
  );
}

export default Navbar;