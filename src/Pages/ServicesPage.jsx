// pages/ServicesPage.jsx
import Footer      from "../components/Footer";
import FadeSection from "../components/FadeSection";
import { Icon, SERVICES } from "../data";

export default function ServicesPage({ setPage }) {
  const nav = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div className="page">

      {/* ── SERVICES GRID ── */}
      <section className="section section-tinted">
        <div className="section-inner">
          <FadeSection className="section-header">
            <span className="section-tag">What We Offer</span>
            <h2 className="section-title">Comprehensive Learning Solutions</h2>
            <p className="section-sub">
              Every program is designed with industry demands in mind — ensuring the skills you gain are
              immediately applicable in the workplace.
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

      {/* ── WHY CHOOSE US ── */}
      <section className="section">
        <div className="section-inner">
          <FadeSection className="section-header">
            <span className="section-tag">Why AIMSTA</span>
            <h2 className="section-title">The AIMSTA Difference</h2>
            <p className="section-sub">
              We go beyond textbooks to deliver an education that's practical, current, and results-driven.
            </p>
          </FadeSection>

          <div className="services-grid">
            {[
              { icon: "users",   title: "Expert-Led Training",      desc: "Every course is facilitated by seasoned industry professionals with real-world experience." },
              { icon: "check",   title: "Certified on Completion",  desc: "Earn industry-recognised certificates that boost your CV and open doors to new opportunities." },
              { icon: "diagram", title: "Flexible Learning Paths",  desc: "Choose self-paced, live online, or in-person formats to match your schedule and learning style." },
              { icon: "award",   title: "Career Support",           desc: "From CV workshops to mock interviews and job placement — we stay by your side even after graduation." },
            ].map((item, i) => (
              <FadeSection key={i}>
                <div className="service-card">
                  <div className="service-icon"><Icon name={item.icon} size={22} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2>Not Sure Where to Start?</h2>
          <p>Our advisors will help you choose the right program for your goals and background.</p>
          <button className="btn-white" onClick={() => nav("Contact")}>Talk to an Advisor</button>
        </div>
      </section>

      <Footer setPage={setPage} />
    </div>
  );
}
