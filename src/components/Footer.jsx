// src/components/Footer.jsx
import Ico from "./Icon.jsx";

export default function Footer({ go }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <div style={{ display: "flex", alignItems: "center", gap: ".75rem", marginBottom: ".25rem" }}>
              <div className="nav-emblem" style={{ width: 40, height: 40 }}>
                <img
                  src="/aimsta-logo.png"
                  alt="AIMSTA logo"
                  style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: 8 }}
                />
              </div>
              <span style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "1.5rem", letterSpacing: 3 }}>
                AIMSTA
              </span>
            </div>
            <p>
              Dedicated to delivering world-class training that empowers individuals to reach their fullest
              potential. Efficacy for Excellence — every programme, every graduate.
            </p>
            <div className="socials">
              {[["fb","#"],["tw","#"],["li","#"],["ig","#"]].map(([k, h]) => (
                <a key={k} href={h} aria-label={k}><Ico n={k} /></a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div className="footer-col">
            <h4>Navigate</h4>
            <ul>
              {["Home","About","Services","Courses","Contact"].map((p) => (
                <li key={p}><a onClick={() => go(p)}>{p}</a></li>
              ))}
            </ul>
          </div>

          {/* Programmes */}
          <div className="footer-col">
            <h4>Programmes</h4>
            <ul>
              {["Web Development","Data Science","Digital Marketing","Business Analytics","Project Management"].map((p) => (
                <li key={p}><a href="#">{p}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:info@aimsta.com">info@aimsta.com</a></li>
              <li><a href="tel:+15551234567">+1 (555) 123-4567</a></li>
              <li><a href="#">New York, NY</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 AIMSTA. All rights reserved.</span>
          <span>Built for future leaders · <a href="#">Privacy</a></span>
        </div>
      </div>
    </footer>
  );
}