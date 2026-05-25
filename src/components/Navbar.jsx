// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import Ico from "./Icon";

const LINKS = ["Home", "About", "Services", "Courses", "Contact"];

export default function Navbar({ page, go }) {
  const [solid, setSolid] = useState(false);
  const [open, setOpen]   = useState(false);

  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const nav = (p) => { go(p); setOpen(false); };

  return (
    <>
      <nav className={`nav${solid ? " solid" : ""}`}>
        {/* Logo */}
        <div className="nav-logo" onClick={() => nav("Home")}>
          <div className="nav-emblem">
            <img
              src="/AIMSTA LOGO 2 - Copy.png"
              alt="AIMSTA logo"
              style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: 10 }}
            />
          </div>
          <div className="nav-wordmark">
            <span className="nav-name">AIMSTA</span>
            <span className="nav-tagline">Efficacy for Excellence</span>
          </div>
        </div>

        {/* Desktop links */}
        <ul className="nav-links">
          {LINKS.map((l) => (
            <li key={l}>
              <button className={page === l ? "act" : ""} onClick={() => nav(l)}>
                {l}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button className="nav-cta" onClick={() => nav("Contact")}>
          Get Started
        </button>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setOpen((o) => !o)}>
          <Ico n={open ? "close" : "menu"} s={26} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="mob-drawer">
          {LINKS.map((l) => (
            <button key={l} onClick={() => nav(l)}>{l}</button>
          ))}
          <button className="mcta" onClick={() => nav("Contact")}>
            Get Started →
          </button>
        </div>
      )}
    </>
  );
}