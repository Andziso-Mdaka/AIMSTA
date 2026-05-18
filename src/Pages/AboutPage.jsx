// pages/AboutPage.jsx
import Footer      from "../components/Footer";
import FadeSection from "../components/FadeSection";
import { Icon }    from "../data";

const FEATURES = [
  "Industry-Aligned Curriculum",
  "Expert Faculty",
  "Hands-on Projects",
  "Placement Assistance",
];

const STATS = [
  { num: "15K+", title: "Students Trained",    desc: "Graduates across all our programs" },
  { num: "98%",  title: "Success Rate",        desc: "Students who achieve their goals" },
  { num: "50+",  title: "Expert Trainers",     desc: "Industry veterans on our team" },
  { num: "10+",  title: "Years of Excellence", desc: "A decade of educational leadership" },
];

export default function AboutPage({ setPage }) {
  const nav = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div className="page">

      {/* ── STORY ── */}
      <section className="section section-tinted">
        <div className="section-inner">
          <FadeSection className="section-header">
            <span className="section-tag">About Us</span>
            <h2 className="section-title">Building Careers Through Quality Education</h2>
          </FadeSection>

          <div className="about-grid">
            {/* Image card */}
            <FadeSection>
              <div className="about-img">
                <Icon name="award" size={80} />
                <p>Our Commitment to Excellence</p>
                <div className="about-badge">
                  <span className="about-badge-num">10+</span>
                  <span className="about-badge-lbl">Years of Excellence</span>
                </div>
              </div>
            </FadeSection>

            {/* Text */}
            <FadeSection>
              <div className="about-content">
                <p>
                  AIMSTA has been at the forefront of professional education, transforming ambitious individuals
                  into industry-ready professionals. Our mission is to bridge the gap between academic knowledge
                  and real industry requirements.
                </p>
                <p>
                  With a team of seasoned professionals and state-of-the-art learning methodologies, we ensure
                  every student receives personalized attention and practical exposure to real-world scenarios.
                </p>

                <div className="features-list">
                  {FEATURES.map((f) => (
                    <div className="feat-item" key={f}>
                      <div className="feat-check"><Icon name="check" size={12} /></div>
                      {f}
                    </div>
                  ))}
                </div>

                <button className="btn-primary" onClick={() => nav("Contact")}>
                  Get in Touch <Icon name="arrow" size={16} />
                </button>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="section">
        <div className="section-inner">
          <FadeSection className="section-header">
            <span className="section-tag">By the Numbers</span>
            <h2 className="section-title">Our Impact</h2>
            <p className="section-sub">Numbers that reflect our unwavering commitment to student success.</p>
          </FadeSection>

          <div className="services-grid">
            {STATS.map(({ num, title, desc }) => (
              <FadeSection key={title}>
                <div className="service-card stat-card">
                  <span className="stat-num">{num}</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2>Join the AIMSTA Family</h2>
          <p>
            Take the first step toward a career that matters. Our admissions team is ready to help you find
            the right program.
          </p>
          <button className="btn-white" onClick={() => nav("Contact")}>Contact Us Today</button>
        </div>
      </section>

      <Footer setPage={setPage} />
    </div>
  );
}
