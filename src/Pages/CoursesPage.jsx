// pages/CoursesPage.jsx
import Footer      from "../components/Footer";
import FadeSection from "../components/FadeSection";
import { Icon, COURSES } from "../data";

export default function CoursesPage({ setPage }) {
  const nav = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div className="page">

      {/* ── COURSE CARDS ── */}
      <section className="section section-tinted">
        <div className="section-inner">
          <FadeSection className="section-header">
            <span className="section-tag">Popular Courses</span>
            <h2 className="section-title">Featured Training Programs</h2>
            <p className="section-sub">
              Choose from our most sought-after courses designed to boost your career prospects and skill set.
            </p>
          </FadeSection>

          <div className="courses-grid">
            {COURSES.map((c, i) => (
              <FadeSection key={i}>
                <div className="course-card">
                  <div className="course-thumb">
                    <span className="course-badge-pill">{c.badge}</span>
                  </div>
                  <div className="course-body">
                    <div className="course-meta">
                      <span><Icon name="clock" size={13} /> {c.weeks} Weeks</span>
                      <span><Icon name="user"  size={13} /> {c.students} Students</span>
                    </div>
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                    <div className="course-footer">
                      <div className="course-price">
                        {c.price} <s>{c.orig}</s>
                      </div>
                      <button
                        className="enroll-btn"
                        onClick={() => nav("Contact")}
                      >
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="section">
        <div className="section-inner">
          <FadeSection className="section-header">
            <span className="section-tag">Every Course Includes</span>
            <h2 className="section-title">What You Get</h2>
            <p className="section-sub">All programs come packed with resources to maximise your learning outcomes.</p>
          </FadeSection>

          <div className="services-grid">
            {[
              { icon: "graduation", title: "Live Sessions",        desc: "Interactive live classes with expert trainers — ask questions, collaborate, and learn in real time." },
              { icon: "code",       title: "Hands-on Projects",    desc: "Build a portfolio-worthy project during the course that demonstrates your skills to employers." },
              { icon: "award",      title: "Certificate",          desc: "Receive an industry-recognised certificate upon successful completion." },
              { icon: "users",      title: "Community Access",     desc: "Join a private alumni network for peer support, job leads, and ongoing mentorship." },
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
          <h2>Ready to Enroll?</h2>
          <p>Spots fill up quickly. Secure your place today and start your transformation.</p>
          <button className="btn-white" onClick={() => nav("Contact")}>Get in Touch</button>
        </div>
      </section>

      <Footer setPage={setPage} />
    </div>
  );
}
