// src/pages/AboutPage.jsx
import Footer    from "../components/Footer";
import StatStrip from "../components/StatStrip";
import Ico       from "../components/Icon";
import { useReveal } from "../hooks";

const FEATURES = [
  "Industry-Aligned Curriculum, rebuilt quarterly",
  "Expert Faculty — all active practitioners",
  "Live project work from week one",
  "Career placement support until you land the role",
];

const WHY = [
  ["🎓", "Practitioner Faculty",  "Every trainer holds a senior industry role. No career academics — only people doing the work."],
  ["🔄", "Living Curriculum",     "We rebuild modules every 90 days with input from hiring managers and industry partners."],
  ["📋", "Certified on Completion","Earn credentials recognised by top employers across tech, finance, marketing, and beyond."],
  ["🚀", "Placement Support",     "We stay with you post-graduation — resume reviews, mock interviews, and direct referrals."],
];

export default function AboutPage({ go }) {
  const rL = useReveal("reveal-l");
  const rR = useReveal("reveal-r");
  const r3 = useReveal();

  return (
    <>
      {/* ═══════════════════════════════════ STORY ═══ */}
      <section className="sec sec-light">
        <div className="sec-inner">
          <div className="about-grid">

            {/* Visual */}
            <div {...rL()}>
              <div className="about-visual">
                <div className="about-main-box">
                  <Ico n="award" s={56} />
                  <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.1rem", opacity: .85 }}>
                    A Decade of Excellence
                  </p>
                </div>
                <div className="about-stat-float">
                  <span className="asf-num">10+</span>
                  <span className="asf-lbl">Years Leading</span>
                </div>
              </div>
            </div>

            {/* Text */}
            <div {...rR()}>
              <div className="about-text">
                <span className="eyebrow eyebrow-dark">Our Story</span>
                <h2>We believe in <em>learning that moves</em> careers forward</h2>
                <p>
                  AIMSTA was founded with one conviction: that structured, mentored, industry-aligned training
                  is the fastest and most reliable path to professional growth. Over ten years we've refined
                  that belief into a methodology that works.
                </p>
                <p>
                  Our trainers are practitioners, not academics. Our curriculum is rebuilt every quarter with
                  industry partners. And our outcomes speak for themselves — a 98% success rate across every cohort.
                </p>

                <div className="feat-list">
                  {FEATURES.map((f) => (
                    <div className="feat" key={f}>
                      <div className="feat-tick"><Ico n="check" s={11} /></div>
                      {f}
                    </div>
                  ))}
                </div>

                <button className="btn-forest" onClick={() => go("Contact")}>
                  Talk to an Advisor <Ico n="arrow" s={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ STATS ═══ */}
      <StatStrip />

      {/* ═══════════════════════════════════ WHY AIMSTA ═══ */}
      <section className="sec sec-mid">
        <div className="sec-inner">
          <div {...r3("sec-hd")}>
            <span className="eyebrow eyebrow-gold">Why AIMSTA</span>
            <h2 className="sec-title" style={{ color: "var(--cream)" }}>
              The <span className="ital">difference</span> is in the details
            </h2>
            <p className="sec-sub sec-sub-light">
              Every design decision at AIMSTA exists to improve graduate outcomes. Here's how.
            </p>
          </div>

          <div className="serv-grid">
            {WHY.map(([emoji, title, desc], i) => (
              <div key={i} {...r3()} style={{ transitionDelay: `${i * .08}s` }}>
                <div className="serv-card">
                  <div className="serv-ico" style={{ fontSize: "1.4rem" }}>{emoji}</div>
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
          <h2>Join the <em>AIMSTA</em> family</h2>
          <p>Thousands of graduates across 40 countries. Your story starts here.</p>
          <button className="btn-cream" onClick={() => go("Contact")}>
            Get in Touch <Ico n="arrow" s={16} />
          </button>
        </div>
      </section>

      <Footer go={go} />
    </>
  );
}