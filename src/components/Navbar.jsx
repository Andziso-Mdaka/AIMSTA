// src/components/Navbar.jsx — sits on the forest page head, turns solid once scrolled
import { useEffect, useState } from "react";
import Ico from "./Icon.jsx";
import { href } from "../data.jsx";
import { lockScroll } from "../smoothScroll.js";

const LINKS = [
  ["home", "Home"],
  ["about", "About"],
  ["services", "Services"],
  ["programmes", "Programmes"],
];


export default function Navbar({ page, go }) {
  const [raised, setRaised] = useState(false);
  const [open, setOpen]     = useState(false);
  const [shown, setShown]   = useState(page);

  // Close the menu when the page changes by any route (back/forward included).
  if (shown !== page) { setShown(page); setOpen(false); }

  // A link to the page you're already on scrolls back to the top instead of doing nothing.
  const onLink = (e, id) => {
    setOpen(false);
    if (id === page) { e.preventDefault(); go(id); }
  };

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
    document.body.style.overflow = "hidden";
    lockScroll(true);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      lockScroll(false);
    };
  }, [open]);

  return (
    <header className={`nav${raised ? " is-raised" : ""}${open ? " is-open" : ""}`}>
      <div className="nav-inner">
        <a
          className="brand" href="#/" aria-label="AIMSTA home"
          onClick={(e) => { e.preventDefault(); setOpen(false); go("home"); }}
        >
          <span className="brand-mark"><img src="/AIMSTA_LOGO_ONLY.png" alt="" width="34" height="34" /></span>
          <span className="brand-text">
            <span className="brand-name">AIMSTA</span>
            <span className="brand-tag">Efficacy for Excellence</span>
          </span>
        </a>

        <nav aria-label="Main">
          <ul className="nav-links">
            {LINKS.map(([id, label]) => (
              <li key={id}>
                <a href={href(id)} aria-current={page === id ? "page" : undefined} onClick={(e) => onLink(e, id)}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <button className="btn btn-on-dark btn-sm nav-cta" onClick={() => go("contact")}>
          Request a proposal <Ico n="arrow" s={16} />
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
        <div className="mobile-menu" id="mobile-menu" data-lenis-prevent>
          <ul>
            {[...LINKS, ["contact", "Contact"]].map(([id, label], i) => (
              <li key={id} style={{ "--i": i }}>
                <a href={href(id)} aria-current={page === id ? "page" : undefined} onClick={(e) => onLink(e, id)}>
                  {label} <Ico n="arrow" s={22} />
                </a>
              </li>
            ))}
          </ul>
          <button className="btn btn-on-dark btn-block" onClick={() => { setOpen(false); go("contact"); }}>
            Request a proposal <Ico n="arrow" s={18} />
          </button>
        </div>
      )}
    </header>
  );
}
