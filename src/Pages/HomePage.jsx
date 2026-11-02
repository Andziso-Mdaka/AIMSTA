// src/Pages/HomePage.jsx
import { useEffect, useRef, useState } from "react";
import Ico from "../components/Icon.jsx";
import { AREAS, STEPS, TEAM_SIZES, href } from "../data.jsx";

function Planner({ go }) {
  const [areas, setAreas] = useState([]);
  const [size, setSize]   = useState("");

  const toggle = (id) =>
    setAreas((a) => (a.includes(id) ? a.filter((x) => x !== id) : [...a, id]));

  const submit = (e) => {
    e.preventDefault();
    go("contact", { areas, size });
  };

  return (
    <form className="planner" onSubmit={submit} aria-labelledby="planner-title">
      <h2 id="planner-title" className="planner-title">Plan training for your team</h2>

      <fieldset className="planner-group">
        <legend>What should your team learn?</legend>
        <div className="chips">
          {AREAS.map((a) => (
            <label key={a.id} className="chip">
              <input type="checkbox" checked={areas.includes(a.id)} onChange={() => toggle(a.id)} />
              <span><Ico n="check" s={14} className="chip-tick" />{a.title}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="planner-group">
        <label className="field-label" htmlFor="planner-size">How many people?</label>
        <select id="planner-size" className="input" value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="">Choose a team size</option>
          {TEAM_SIZES.map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>

      <button type="submit" className="btn btn-primary btn-block btn-lg">
        Continue to your request <Ico n="arrow" s={18} />
      </button>
      <p className="planner-note">No commitment. This only starts the conversation.</p>
    </form>
  );
}

// The six areas, looping across a green band. Decorative: the same list is set out in full below.
function Marquee() {
  const run = AREAS.map((a) => (
    <span key={a.id} className="marquee-item"><Ico n={a.icon} s={30} />{a.title}</span>
  ));
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <div className="marquee-run">{run}</div>
        <div className="marquee-run">{run}</div>
      </div>
    </div>
  );
}

// Steps sit on a rail that fills left to right as the section scrolls through the viewport.
function Steps() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el?.style.setProperty("--fill", 1);
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (vh * 0.85 - r.top) / (r.height + vh * 0.35);
      el.style.setProperty("--fill", Math.min(1, Math.max(0, p)).toFixed(3));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <ol className="steps" ref={ref}>
      {STEPS.map((s, i) => (
        <li key={s.title} className="step" style={{ "--i": i }}>
          <span className="step-num" aria-hidden="true">{i + 1}</span>
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
        </li>
      ))}
    </ol>
  );
}

export default function HomePage({ go }) {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <h1 className="hero-title">
              Practical training that <span className="sweep">moves your team forward</span>
            </h1>
            <p className="lede">
              AIMSTA designs and delivers professional training for South African organisations,
              from data and software to leadership and project management, taught by people who do the work.
            </p>
            <div className="actions">
              <button className="btn btn-on-dark btn-lg" onClick={() => go("contact")}>
                Request a proposal <Ico n="arrow" s={18} />
              </button>
              <button className="btn btn-outline-light btn-lg" onClick={() => go("programmes")}>
                View programmes
              </button>
            </div>
            <p className="hero-place"><Ico n="pin" s={16} /> Based in Pretoria, Gauteng</p>
          </div>
          <div className="planner-wrap"><Planner go={go} /></div>
        </div>
      </section>

      <Marquee />

      <section className="section" aria-labelledby="areas-title">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <h2 id="areas-title">Six areas of training</h2>
            <p>Each programme can be shaped around your team's starting point and the work they need to do.</p>
          </div>
          <ul className="area-list">
            {AREAS.map((a, i) => (
              <li key={a.id} data-reveal="left" style={{ "--d": `${i * 70}ms` }}>
                <a className="area" href={href("services")}>
                  <span className="area-icon"><Ico n={a.icon} s={28} /></span>
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                  <span className="area-go"><Ico n="arrow" s={22} /></span>
                </a>
              </li>
            ))}
          </ul>
          <a className="text-link" href="#/services">
            See all training areas <Ico n="arrow" s={16} />
          </a>
        </div>
      </section>

      <section className="section section-forest" aria-labelledby="steps-title">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <h2 id="steps-title">How we work with organisations</h2>
            <p>From your first message to the support after training ends.</p>
          </div>
          <Steps />
        </div>
      </section>

      <section className="section" aria-labelledby="why-title">
        <div className="wrap split">
          <div data-reveal>
            <h2 id="why-title" className="h-xl">Trainers who practise what they teach</h2>
            <p className="body-lg">
              Our trainers are practitioners, not career academics. They bring the tools, habits and judgement
              they use at work into every session, so your people learn what the job actually asks of them.
            </p>
            <button className="btn btn-secondary" onClick={() => go("about")}>
              About AIMSTA <Ico n="arrow" s={18} />
            </button>
          </div>
          <ul className="check-list">
            {[
              "Curriculum refreshed with input from industry",
              "Live project work from the first week",
              "Mentorship alongside the training",
              "Support that continues after the programme ends",
            ].map((t, i) => (
              <li key={t} data-reveal style={{ "--d": `${i * 80}ms` }}>
                <span className="check-dot"><Ico n="check" s={20} /></span>{t}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
