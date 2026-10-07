// src/components/Navbar.jsx
import { useEffect, useState } from "react";
import Ico from "./Icon.jsx";
import { href } from "../data.jsx";

const LINKS = [
  ["home", "Home"],
  ["about", "About"],
  ["services", "Services"],
  ["programmes", "Programmes"],
];


export default function Navbar({ page, go }) {
  const [raised, setRaised] = useState(false);
  const [open, setOpen]     = useState(false);

  useEffect(() => {
    const fn = () => setRaised(window.scrollY > 8);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`nav${raised || open ? " is-raised" : ""}`}>
      <div className="nav-inner">
        <a className="brand" href="#/" aria-label="AIMSTA home">
          <img src="/AIMSTA_LOGO_ONLY.png" alt="" width="40" height="40" />
          <span className="brand-text">
            <span className="brand-name">AIMSTA</span>
            <span className="brand-tag">Efficacy for Excellence</span>
          </span>
        </a>

        <nav aria-label="Main">
          <ul className="nav-links">
            {LINKS.map(([id, label]) => (
              <li key={id}>
                <a href={href(id)} aria-current={page === id ? "page" : undefined}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <button className="btn btn-primary btn-sm nav-cta" onClick={() => go("contact")}>
          Request a proposal
        </button>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <Ico n={open ? "close" : "menu"} s={24} />
        </button>
      </div>

      {open && (
        <div className="mobile-menu" id="mobile-menu">
          <ul>
            {[...LINKS, ["contact", "Contact"]].map(([id, label]) => (
              <li key={id}>
                <a href={href(id)} aria-current={page === id ? "page" : undefined} onClick={() => setOpen(false)}>{label}</a>
              </li>
            ))}
          </ul>
          <button className="btn btn-primary" onClick={() => { setOpen(false); go("contact"); }}>
            Request a proposal <Ico n="arrow" s={18} />
          </button>
        </div>
      )}
    </header>
  );
}
