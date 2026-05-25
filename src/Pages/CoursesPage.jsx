// src/Pages/CoursesPage.jsx
import Footer    from "../components/Footer.jsx";
import StatStrip from "../components/StatStrip.jsx";
import Ico       from "../components/Icon.jsx";
import { useReveal } from "../hooks.jsx";
import { COURSES } from "../data.jsx";

const PERKS = [
  ["🎓", "Live Sessions",      "Interactive classes with expert trainers. Real questions, real answers, in real time."],
  ["💻", "Hands-On Projects",  "Deploy real products. Build a portfolio that proves your skills before you interview."],
  ["📜", "Certification",      "Industry-recognised credentials that employers in 40+ countries trust."],
  ["👥", "Peer Community",     "Join a cohort of motivated peers. Study groups, accountability, lasting connections."],
];

export default function CoursesPage({ go }) {
  const r1 = useReveal();
  const r2 = useReveal();

  return (
    <>
      {/* ═══════════════════════════════════ COURSE CARDS ═══ */}
      <section className="courses sec sec-light" id="courses">
        <div className="container sec-inner">
          <div {...r1("sec-hd")}>
            <span className="eyebrow eyebrow-dark">Featured Courses</span>
            <h2 className="sec-title" style={{ color: "var(--ink)" }}>
              Learn what{" "}
              <span className="ital" style={{ color: "var(--jade)" }}>employers want</span>
            </h2>
            <p className="sec-sub" style={{ color: "#666" }}>
              Our most popular programmes — designed with hiring managers and built to produce
              portfolio-ready graduates.
            </p>
          </div>

          <div className="courses-grid">
            {COURSES.map((c, i) => (
              <div key={i} {...r1(`course-${i}`)} style={{ transitionDelay: `${i * .1}s` }}>
                <div className="course-card animate-on-scroll visible">
                  <div className="course-image">
                    <span className="course-badge">{c.badge}</span>
                  </div>
                  <div className="course-content">
                    <div className="course-meta">
                      <span><Ico n="clock" s={13} /> {c.weeks} weeks</span>
                      <span><Ico n="users" s={13} /> {c.students} enrolled</span>
                    </div>
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                    <div className="course-footer">
                      <div className="course-price">
                        {c.price} <span>{c.orig}</span>
                      </div>
                      <button className="enroll-btn" onClick={() => go("Contact")}>
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ STATS ═══ */}
      <StatStrip />

      {/* ═══════════════════════════════════ PERKS ═══ */}
      <section className="services sec sec-mid">
        <div className="container sec-inner">
          <div {...r2("sec-hd")}>
            <span className="eyebrow eyebrow-gold">What's Included</span>
            <h2 className="sec-title" style={{ color: "var(--cream)" }}>
              Every course <span className="ital">comes with</span>
            </h2>
            <p className="sec-sub sec-sub-light">
              Enrolment isn't just access to content — it's access to an entire ecosystem of support.
            </p>
          </div>

          <div className="services-grid">
            {PERKS.map(([emoji, title, desc], i) => (
              <div key={i} {...r2(`perk-${i}`)} style={{ transitionDelay: `${i * .08}s` }}>
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
          <h2>Spots fill <em>fast</em></h2>
          <p>Our cohorts are intentionally small to maximise mentorship. Reserve your place today.</p>
          <button className="btn-cream" onClick={() => go("Contact")}>
            Reserve My Spot <Ico n="arrow" s={16} />
          </button>
        </div>
      </section>

      <Footer go={go} />
    </>
  );
}