// src/components/Footer.jsx — green closing call to action, then the forest footer
import Ico from "./Icon.jsx";
import { AREAS, CONTACT, href } from "../data.jsx";

export default function Footer({ go, showClose = true }) {
  return (
    <footer className="footer">
      {showClose && (
        <div className="footer-close">
          <div className="wrap footer-close-inner" data-reveal>
            <h2>Ready to plan training for your team?</h2>
            <div className="footer-close-body">
              <p>Tell us what your people need to learn. An advisor will get back to you with a recommended programme.</p>
              <button className="btn btn-on-dark btn-lg" onClick={() => go("contact")}>
                Request a proposal <Ico n="arrow" s={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="brand-mark"><img src="/AIMSTA_LOGO_ONLY.png" alt="" width="40" height="40" /></span>
            <div>
              <div className="footer-name">AIMSTA</div>
              <div className="footer-tag">Efficacy for Excellence</div>
            </div>
          </div>

          <div className="footer-col">
            <h3>Company</h3>
            <ul>
              <li><a href={href("about")}>About</a></li>
              <li><a href={href("services")}>Training areas</a></li>
              <li><a href={href("programmes")}>Programmes</a></li>
              <li><a href={href("contact")}>Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Training areas</h3>
            <ul>
              {AREAS.map((a) => (
                <li key={a.id}><a href={href("services")}>{a.title}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact</h3>
            <ul>
              <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
              <li><a href={CONTACT.phoneHref}>{CONTACT.phone}</a></li>
              <li>{CONTACT.location}</li>
            </ul>
          </div>
        </div>

        <div className="footer-word" aria-hidden="true">AIMSTA</div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} AIMSTA. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
