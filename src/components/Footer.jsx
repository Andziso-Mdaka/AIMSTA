// components/Footer.jsx
import { Icon } from "../data";

export default function Footer({ setPage }) {
  const go = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <div style={{ display: "flex", alignItems: "center", gap: ".7rem", marginBottom: ".25rem" }}>
              <div className="nav-logo-mark" style={{ width: 42, height: 42, fontSize: "1.1rem" }}>A</div>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.3rem", letterSpacing: 2 }}>
                AIMSTA
              </span>
            </div>
            <p>
              AIMSTA is dedicated to providing world-class education and training that empowers individuals to
              achieve excellence in their professional careers.
            </p>
            <div className="socials">
              <a href="#" aria-label="Facebook"><Icon name="fb" /></a>
              <a href="#" aria-label="Twitter"><Icon name="tw" /></a>
              <a href="#" aria-label="LinkedIn"><Icon name="li" /></a>
              <a href="#" aria-label="Instagram"><Icon name="ig" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a onClick={() => go("Home")}>Home</a></li>
              <li><a onClick={() => go("About")}>About Us</a></li>
              <li><a onClick={() => go("Courses")}>Courses</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="footer-col">
            <h4>Programs</h4>
            <ul>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Data Science</a></li>
              <li><a href="#">Digital Marketing</a></li>
              <li><a href="#">Business Analytics</a></li>
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
          <p>© 2026 AIMSTA. All rights reserved. Efficacy for Excellence.</p>
          <p>Designed with ♥ for future leaders</p>
        </div>
      </div>
    </footer>
  );
}
