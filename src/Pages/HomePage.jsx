// src/Pages/HomePage.jsx
import { useState } from "react";
import Ico from "../components/Icon.jsx";
import { AREAS, STEPS, TEAM_SIZES } from "../data.jsx";

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

      <button type="submit" className="btn btn-primary btn-block">
        Continue to your request <Ico n="arrow" s={18} />
      </button>
      <p className="planner-note">No commitment. This only starts the conversation.</p>
    </form>
  );
}

export default function HomePage({ go }) {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <h1>Practical training that moves your team forward</h1>
            <p className="lede">
              AIMSTA designs and delivers professional training for South African organisations,
              from data and software to leadership and project management, taught by people who do the work.
            </p>
            <div className="actions">
              <button className="btn btn-primary" onClick={() => go("contact")}>
                Request a proposal <Ico n="arrow" s={18} />
              </button>
              <button className="btn btn-secondary" onClick={() => go("programmes")}>
                View programmes
              </button>
            </div>
            <p className="hero-place"><Ico n="pin" s={16} /> Based in Pretoria, Gauteng</p>
          </div>
          <Planner go={go} />
        </div>
      </section>

      <section className="section" aria-labelledby="areas-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="areas-title">Six areas of training</h2>
            <p>Each programme can be shaped around your team's starting point and the work they need to do.</p>
          </div>
          <ul className="area-list">
            {AREAS.map((a) => (
              <li key={a.id} className="area">
                <span className="area-icon"><Ico n={a.icon} s={24} /></span>
                <div>
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <a className="text-link" href="#/services">
            See all training areas <Ico n="arrow" s={16} />
          </a>
        </div>
      </section>

      <section className="section section-tint" aria-labelledby="steps-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="steps-title">How we work with organisations</h2>
            <p>From your first message to the support after training ends.</p>
          </div>
          <ol className="steps">
            {STEPS.map((s, i) => (
              <li key={s.title} className="step">
                <span className="step-num" aria-hidden="true">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="why-title">
        <div className="wrap split">
          <div>
            <h2 id="why-title">Trainers who practise what they teach</h2>
            <p className="body-lg">
              Our trainers are practitioners, not career academics. They bring the tools, habits and judgement
              they use at work into every session, so your people learn what the job actually asks of them.
            </p>
            <button className="btn btn-secondary" onClick={() => go("about")}>
              About AIMSTA
            </button>
          </div>
          <ul className="check-list">
            <li><Ico n="check" s={18} />Curriculum refreshed with input from industry</li>
            <li><Ico n="check" s={18} />Live project work from the first week</li>
            <li><Ico n="check" s={18} />Mentorship alongside the training</li>
            <li><Ico n="check" s={18} />Support that continues after the programme ends</li>
          </ul>
        </div>
      </section>
    </>
  );
}
