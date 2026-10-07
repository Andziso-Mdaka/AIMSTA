// src/Pages/CoursesPage.jsx — "Programmes"
import Ico from "../components/Icon.jsx";
import { AREAS, PROGRAMMES } from "../data.jsx";

const areaTitle = (id) => AREAS.find((a) => a.id === id)?.title;

export default function CoursesPage({ go }) {
  return (
    <>
      <section className="page-head">
        <div className="wrap page-head-grid">
          <h1>Programmes</h1>
          <p className="lede page-head-body">
            Featured programmes from our training areas. Duration, format and pricing are agreed per group,
            based on your team's size, schedule and starting level.
          </p>
        </div>
      </section>

      <section className="section section-flush-top" aria-label="Featured programmes">
        <div className="wrap">
          <ul className="programmes">
            {PROGRAMMES.map((p) => (
              <li key={p.title} className="programme">
                <div className="programme-main">
                  <h2>{p.title}</h2>
                  <p>{p.desc}</p>
                  <p className="programme-area">Training area: {areaTitle(p.area)}</p>
                </div>
                <div className="programme-side">
                  <h3>Topics include</h3>
                  <ul className="topic-list">
                    {p.topics.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                  <button
                    className="btn btn-secondary"
                    onClick={() => go("contact", { areas: [p.area], size: "", programme: p.title })}
                    aria-label={`Request a quote for ${p.title}`}
                  >
                    Request a quote
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-tint">
        <div className="wrap split split-center">
          <div>
            <h2>Need something your team can't find here?</h2>
            <p className="body-lg">
              These are our most requested programmes. Tell us the skills you need and we'll recommend
              a programme built from our six training areas.
            </p>
          </div>
          <div className="inline-cta">
            <button className="btn btn-primary" onClick={() => go("contact")}>
              Describe what you need <Ico n="arrow" s={18} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
