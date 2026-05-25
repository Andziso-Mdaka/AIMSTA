// src/Pages/ServicesPage.jsx
import Footer from "../components/Footer.jsx";
import Ico    from "../components/Icon.jsx";
import { useReveal } from "../hooks.jsx"; // Standardized path pathing
import { SERVICES } from "../data.jsx";

const INCLUDED = [
  ["🎯", "Personalised Mentorship", "One-on-one sessions with your assigned industry mentor throughout the programme."],
  ["💼", "Portfolio Projects",      "Build real deliverables you can show in interviews — not toy exercises."],
  ["🌐", "Alumni Network",          "Instant access to our global community of 15,000+ graduates and hiring managers."],
  ["📈", "Post-Course Support",     "Continued access to materials, community, and career advice after you graduate."],
];

export default function ServicesPage({ go }) {
  const r1 = useReveal();
  const r2 = useReveal();

  return (
    <>
      {/* ═══════════════════════════════════ ALL SERVICES ═══ */}
      {/* Wrapped inside the master 'services' class to enable grid system layout */}
      <section className="services sec sec-mid" id="services">
        <div className="container sec-inner">
          <div {...r1("sec-hd")}>
            <span className="eyebrow eyebrow-gold">All Programmes</span>
            <h2 className="sec-title" style={{ color: "var(--cream)" }}>
              Training built for <span className="ital">real outcomes</span>
            </h2>
            <p className="sec-sub sec-sub-light">
              Every discipline, every skill-level — we have a programme designed to take you further.
            </p>
          </div>

          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <div key={i} {...r1(`serv-${i}`)} style={{ transitionDelay: `${i * .08}s` }}>
                <div className="service-card animate-on-scroll visible">
                  <div className="service-icon" style={{ fontSize: "1.4rem" }}>{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ WHAT'S INCLUDED ═══ */}
      <section className="services sec" style={{ background: "var(--ink)" }}>
        <div className="container sec-inner">
          <div {...r2("sec-hd")}>
            <span className="eyebrow eyebrow-gold">Included in Every Course</span>
            <h2 className="sec-title" style={{ color: "var(--cream)" }}>
              More than a <span className="ital">certificate</span>
            </h2>
            <p className="sec-sub sec-sub-light">
              Every AIMSTA programme comes wrapped with the support, tools, and community that makes the difference.
            </p>
          </div>

          <div className="services-grid">
            {INCLUDED.map(([emoji, title, desc], i) => (
              <div key={i} {...r2(`inc-${i}`)} style={{ transitionDelay: `${i * .08}s` }}>
                <div className="service-card animate-on-scroll visible">
                  <div className="service-icon" style={{ fontSize: "1.4rem" }}>{emoji}</div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ CTA ═══ */}
      <section className="cta-band">
        <div className="cta-inner">
          <h2>Not sure <em>where to start?</em></h2>
          <p>Our advisors will recommend the right programme for your goals, background, and budget.</p>
          <button className="btn-cream" onClick={() => go("Contact")}>
            Talk to an Advisor <Ico n="arrow" s={16} />
          </button>
        </div>
      </section>

      <Footer go={go} />
    </>
  );
}