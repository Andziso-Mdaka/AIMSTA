// pages/HomePage.jsx
import Footer      from "../components/Footer";
import FadeSection from "../components/FadeSection";
import { Icon, SERVICES, TESTIMONIALS } from "../data";

export default function HomePage({ setPage }) {
  const nav = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div className="page">

      {/* ── HERO ── */}
      <section
        style={{
          minHeight: "calc(100vh - var(--nav-h))",
          background: "linear-gradient(135deg, var(--light-gray) 0%, var(--pale-green) 50%, var(--light-gray) 100%)",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          padding: "0 1.5rem",
        }}
      >
        {/* decorative orb */}
        <div
          style={{
            position: "absolute", top: "-20%", right: "-10%",
            width: 600, height: 600, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(10,138,60,.06) 0%, transparent 70%)",
            animation: "float-bg 10s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 1200, margin: "0 auto", width: "100%",
            padding: "4rem 0",
            display: "grid",
            gridTemplateColumns: "clamp(280px,50%,560px) 1fr",
            gap: "4rem",
            alignItems: "center",
            position: "relative", zIndex: 1,
          }}
          className="hero-inner-grid"
        >
          {/* Left — text */}
          <div style={{ animation: "fadeInUp .9s ease" }}>
            {/* Badge */}
            <div
              style={{
                display: "inline-flex", alignItems: "center", gap: ".5rem",
                background: "rgba(10,138,60,.1)", color: "var(--primary-green)",
                border: "1px solid rgba(10,138,60,.2)",
                padding: ".4rem 1rem", borderRadius: 50,
                fontSize: ".8rem", fontWeight: 600, marginBottom: "1.5rem",
                letterSpacing: ".5px",
              }}
            >
              <span style={{ animation: "sparkle 2s infinite", display: "inline-flex" }}>
                <Icon name="star" size={12} />
              </span>
              Leading Training Institute
            </div>

            <h1 style={{ fontSize: "clamp(2.2rem,5vw,3.6rem)", marginBottom: "1.25rem", color: "var(--dark-gray)" }}>
              Transform Your Future with{" "}
              <span
                style={{
                  color: "var(--primary-green)", position: "relative",
                  display: "inline-block",
                }}
              >
                AIMSTA
                <span
                  style={{
                    position: "absolute", bottom: 5, left: 0, right: 0,
                    height: 8, background: "rgba(10,138,60,.18)",
                    borderRadius: 4, zIndex: -1,
                  }}
                />
              </span>
            </h1>

            <p style={{ fontSize: "1.1rem", color: "var(--medium-gray)", lineHeight: 1.75, marginBottom: "2rem", maxWidth: 500 }}>
              Empowering students with cutting-edge skills and knowledge. Join thousands of successful graduates who
              have shaped their careers through our excellence-driven training programs.
            </p>

            {/* Buttons */}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}>
              <button className="btn-primary" onClick={() => nav("Courses")}>
                Explore Courses <Icon name="arrow" size={16} />
              </button>
              <button className="btn-ghost" onClick={() => nav("About")}>
                <Icon name="play" size={16} /> Learn More
              </button>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
              {[["15K+", "Students Trained"], ["98%", "Success Rate"], ["50+", "Expert Trainers"]].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "2rem", fontWeight: 700, color: "var(--primary-green)" }}>{n}</div>
                  <div style={{ fontSize: ".8rem", color: "var(--medium-gray)", fontWeight: 500 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual card */}
          <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div
              style={{
                width: "100%", maxWidth: 400, aspectRatio: "1",
                background: "var(--gradient-2)",
                borderRadius: 32, color: "#fff",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", gap: "1rem",
                boxShadow: "0 20px 60px rgba(10,138,60,0.3)",
                animation: "cardIn .8s ease .1s both",
              }}
            >
              <Icon name="graduation" size={72} style={{ opacity: .85 }} />
              <p style={{ fontSize: "1.1rem", fontWeight: 500, opacity: .9 }}>Excellence in Education</p>
            </div>

            {/* Floating pills */}
            {[
              { top: "10%", right: "-4%", label: "Certified Programs",  icon: "award",     delay: ".4s" },
              { bottom: "12%", left: "-4%", label: "Expert Mentorship", icon: "users",     delay: ".6s" },
            ].map(({ label, icon, delay, ...pos }) => (
              <div
                key={label}
                style={{
                  position: "absolute", ...pos,
                  background: "#fff", borderRadius: 50,
                  padding: ".65rem 1.1rem",
                  display: "flex", alignItems: "center", gap: ".5rem",
                  fontSize: ".82rem", fontWeight: 600, color: "var(--dark-gray)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                  animation: `floatIn .6s ease ${delay} both`,
                  zIndex: 2,
                }}
              >
                <div style={{ width: 8, height: 8, background: "var(--light-green)", borderRadius: "50%", flexShrink: 0 }} />
                <Icon name={icon} size={14} />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Responsive stacking for mobile */}
        <style>{`
          @media (max-width: 900px) {
            .hero-inner-grid {
              grid-template-columns: 1fr !important;
              text-align: center;
              gap: 2.5rem !important;
            }
            .hero-inner-grid > div:first-child { order: 2; }
            .hero-inner-grid > div:last-child  { order: 1; }
            .hero-inner-grid p,
            .hero-inner-grid h1 { max-width: 100% !important; }
            .hero-inner-grid > div:first-child > div { justify-content: center; }
          }
        `}</style>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="section">
        <div className="section-inner">
          <FadeSection className="section-header">
            <span className="section-tag">Our Services</span>
            <h2 className="section-title">Comprehensive Learning Solutions</h2>
            <p className="section-sub">
              We offer a wide range of professional training programs designed to meet industry demands and
              accelerate your career growth.
            </p>
          </FadeSection>

          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <FadeSection key={i}>
                <div className="service-card">
                  <div className="service-icon"><Icon name={s.icon} size={22} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section section-dark">
        <div className="section-inner">
          <FadeSection className="section-header">
            <span className="section-tag light">Testimonials</span>
            <h2 className="section-title light">What Our Students Say</h2>
            <p className="section-sub light">
              Hear from alumni who have transformed their careers through AIMSTA's training programs.
            </p>
          </FadeSection>

          <div className="test-grid">
            {TESTIMONIALS.map((t, i) => (
              <FadeSection key={i}>
                <div className="test-card">
                  <div className="stars">★★★★★</div>
                  <p className="test-text">"{t.text}"</p>
                  <div className="test-author">
                    <div className="test-avatar">{t.initials}</div>
                    <div>
                      <div className="test-name">{t.name}</div>
                      <div className="test-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2>Ready to Start Your Journey?</h2>
          <p>
            Join thousands of successful professionals who have transformed their careers with AIMSTA.
            Enroll today and take the first step towards excellence.
          </p>
          <button className="btn-white" onClick={() => nav("Contact")}>
            Get Started Today
          </button>
        </div>
      </section>

      <Footer setPage={setPage} />
    </div>
  );
}
