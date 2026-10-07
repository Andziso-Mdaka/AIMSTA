// src/Pages/ServicesPage.jsx
import Ico from "../components/Icon.jsx";
import { AREAS, INCLUDED } from "../data.jsx";

export default function ServicesPage({ go }) {
  return (
    <>
      <section className="page-head">
        <div className="wrap page-head-grid">
          <h1>Training areas</h1>
          <p className="lede page-head-body">
            Six disciplines, each delivered by practitioners and shaped around what your team already knows
            and what their roles need next.
          </p>
        </div>
      </section>

      <section className="section section-flush-top" aria-label="All training areas">
        <div className="wrap">
          <ul className="service-rows">
            {AREAS.map((a) => (
              <li key={a.id} className="service-row">
                <span className="area-icon"><Ico n={a.icon} s={24} /></span>
                <h2>{a.title}</h2>
                <p>{a.desc}</p>
                <button
                  className="btn btn-ghost"
                  onClick={() => go("contact", { areas: [a.id], size: "" })}
                  aria-label={`Enquire about ${a.title}`}
                >
                  Enquire <Ico n="arrow" s={16} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-tint" aria-labelledby="included-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="included-title">Included with every programme</h2>
            <p>Your team gets more than course content: the support around it is what makes the learning stick.</p>
          </div>
          <ul className="included">
            {INCLUDED.map((f) => (
              <li key={f.title} className="included-item">
                <h3><Ico n={f.icon} s={20} className="included-icon" />{f.title}</h3>
                <p>{f.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
