// src/Pages/AboutPage.jsx
import Ico from "../components/Icon.jsx";

const PRINCIPLES = [
  ["Practitioner faculty", "Every trainer works in the field they teach. Your people learn from someone doing the job, not describing it."],
  ["A living curriculum",  "Modules are reviewed regularly with input from hiring managers and industry partners, so content keeps pace with practice."],
  ["Work, not exercises",  "Participants build real deliverables from the first week, so new skills show up in their day-to-day work."],
  ["Support that stays",   "Mentorship and post-programme support keep people moving once the training itself is over."],
];

export default function AboutPage({ go }) {
  return (
    <>
      <section className="page-head">
        <div className="wrap page-head-grid page-head-top">
          <div>
            <h1>We believe in learning that moves careers, and companies, forward</h1>
          </div>
          <div className="page-head-body">
            <p className="lede">
              AIMSTA was founded on one conviction: structured, mentored, industry-aligned training is the
              fastest and most reliable way for people to grow at work.
            </p>
            <p>
              We work with South African organisations from our base in Pretoria, helping teams pick up the
              technical, analytical and leadership skills their roles demand.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="principles-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="principles-title">How we approach training</h2>
          </div>
          <dl className="principles">
            {PRINCIPLES.map(([t, d]) => (
              <div key={t} className="principle">
                <dt>{t}</dt>
                <dd>{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section section-tint">
        <div className="wrap split split-center">
          <div>
            <h2>Efficacy for Excellence</h2>
            <p className="body-lg">
              Our name and tagline describe the standard we hold ourselves to: training is only worth the
              investment if it changes how people work.
            </p>
          </div>
          <div className="inline-cta">
            <p>Want to know whether AIMSTA is the right fit for your team?</p>
            <button className="btn btn-primary" onClick={() => go("contact")}>
              Talk to an advisor <Ico n="arrow" s={18} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
