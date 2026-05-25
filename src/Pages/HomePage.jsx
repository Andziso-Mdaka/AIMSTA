// src/pages/HomePage.jsx
import Footer    from "../components/Footer.jsx";
import StatStrip from "../components/StatStrip.jsx";
import Ico       from "../components/Icon.jsx";
import { useReveal } from "../hooks.jsx";
import { SERVICES, TESTIMONIALS } from "../data.jsx";

export default function HomePage({ go }) {
  const r1 = useReveal();
  const r2 = useReveal();
  const r3 = useReveal();

  return (
    <>
      {/* ═══════════════════════════════════ HERO ═══ */}
      <section className="hero">
        <div className="hero-inner">

          {/* Left: copy */}
          <div style={{ animation: "fadeInUp .9s ease .1s both" }}>
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              Leading Training Institute
            </div>

            <h1 className="hero-h1">
              Transform<br />Your Future<br />with <em>AIMSTA</em>
            </h1>

            <p className="hero-sub">
              Empowering ambitious professionals with cutting-edge skills and industry-proven knowledge.
              Join 15,000+ graduates who chose excellence.
            </p>

            <div className="hero-btns">
              <button className="btn-gold" onClick={() => go("Courses")}>
                Explore Courses <Ico n="arrow" s={16} />
              </button>
              <button className="btn-outline" onClick={() => go("About")}>
                <Ico n="play" s={16} /> Our Story
              </button>
            </div>

            <div className="hero-metrics">
              {[["15K+","Graduates"],["98%","Success Rate"],["50+","Expert Mentors"]].map(([n, l]) => (
                <div key={l}>
                  <div className="metric-num">{n}</div>
                  <div className="metric-lbl">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: visual cards */}
          <div className="hero-panel">
            <div className="hero-card-main">
              <div className="hero-card-icon"><Ico n="grad" /></div>
              <h3>Excellence in Education</h3>
              <p>10+ years shaping careers across every industry</p>
            </div>

            <div className="hero-badges-row">
              {[
                ["🏆", "Certified",  "Industry-recognised credentials"],
                ["🌍", "Global",     "Alumni in 40+ countries"],
                ["⚡", "Fast-Track", "Results within 90 days"],
                ["🤝", "Mentored",   "1-on-1 expert guidance"],
              ].map(([emoji, title, sub], i) => (
                <div className="hero-mini-card" key={title} style={{ animationDelay: `${.3 + i * .1}s` }}>
                  <div className="hmc-icon" style={{ fontSize: "1.1rem" }}>{emoji}</div>
                  <div className="hmc-label">{title}</div>
                  <div className="hmc-sub">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ STATS ═══ */}
      <StatStrip />

      {/* ═══════════════════════════════════ SERVICES PREVIEW ═══ */}
      <section className="sec sec-mid">
        <div className="sec-inner">
          <div {...r1("sec-hd")}>
            <span className="eyebrow eyebrow-gold">What We Offer</span>
            <h2 className="sec-title" style={{ color: "var(--cream)" }}>
              Built for the <span className="ital">careers</span> of tomorrow
            </h2>
            <p className="sec-sub sec-sub-light">
              Every programme is engineered with one goal: getting you where you want to be, faster.
            </p>
          </div>

          <div className="serv-grid">
            {SERVICES.map((s, i) => (
              <div key={i} {...r1()} style={{ transitionDelay: `${i * .08}s` }}>
                <div className="serv-card">
                  <div className="serv-ico" style={{ fontSize: "1.4rem" }}>{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ TESTIMONIALS ═══ */}
      <section className="sec" style={{ background: "var(--ink)" }}>
        <div className="sec-inner">
          <div {...r2("sec-hd")}>
            <span className="eyebrow eyebrow-gold">Testimonials</span>
            <h2 className="sec-title" style={{ color: "var(--cream)" }}>
              Graduates who <span className="ital">transformed</span>
            </h2>
            <p className="sec-sub sec-sub-light">
              Don't take our word for it — hear from the people whose careers we've changed.
            </p>
          </div>

          <div className="test-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} {...r2()} style={{ transitionDelay: `${i * .12}s` }}>
                <div className="test-card">
                  <div className="stars">★★★★★</div>
                  <p className="test-txt">"{t.text}"</p>
                  <div className="test-author">
                    <div className="test-av">{t.initials}</div>
                    <div>
                      <div className="test-name">{t.name}</div>
                      <div className="test-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ CTA ═══ */}
      <section className="cta-band">
        <div className="cta-inner" {...r3()}>
          <h2>Ready to <em>invest</em> in yourself?</h2>
          <p>
            Join thousands of professionals who chose AIMSTA and never looked back.
            Your next chapter starts with one decision.
          </p>
          <button className="btn-cream" onClick={() => go("Contact")}>
            Start Your Journey <Ico n="arrow" s={16} />
          </button>
        </div>
      </section>

      <Footer go={go} />
    </>
  );
}