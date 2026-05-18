// components/Navbar.jsx
import { useState, useEffect } from "react";
import { Icon } from "../data";

const LINKS = ["Home", "About", "Services", "Courses", "Contact"];

export default function Navbar({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = (target) => {
    setPage(target);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="nav-container">

          {/* Logo */}
          <div className="nav-logo" onClick={() => navigate("Home")}>
            <div className="nav-logo-mark">A</div>
            <div className="nav-logo-text">
              <span className="nav-logo-name">AIMSTA</span>
              <span className="nav-logo-tag">Efficacy for Excellence</span>
            </div>
          </div>

          {/* Desktop links */}
          <ul className="nav-links">
            {LINKS.map((link) => (
              <li key={link}>
                <button
                  className={page === link ? "active" : ""}
                  onClick={() => navigate(link)}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <button className="nav-cta" onClick={() => navigate("Contact")}>
            Get Started
          </button>

          {/* Hamburger */}
          <button className="hamburger" onClick={() => setOpen((o) => !o)}>
            <Icon name={open ? "close" : "menu"} size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="mobile-nav">
          {LINKS.map((link) => (
            <button key={link} onClick={() => navigate(link)}>
              {link}
            </button>
          ))}
          <button className="mob-cta" onClick={() => navigate("Contact")}>
            Get Started →
          </button>
        </div>
      )}
    </>
  );
}
