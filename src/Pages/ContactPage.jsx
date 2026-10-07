// src/Pages/ContactPage.jsx
// The site has no backend yet, so a valid submission opens the visitor's email app
// with the request written out, addressed to AIMSTA.
import { useState } from "react";
import Ico from "../components/Icon.jsx";
import { AREAS, CONTACT, TEAM_SIZES } from "../data.jsx";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(f) {
  const e = {};
  if (!f.name.trim())            e.name    = "Enter your name so we know who to reply to.";
  if (!EMAIL_RE.test(f.email))   e.email   = "Enter a work email address, like name@company.co.za.";
  if (!f.company.trim())         e.company = "Enter your organisation's name.";
  if (!f.message.trim())         e.message = "Tell us briefly what your team needs to learn.";
  return e;
}

function mailtoFor(f) {
  const areas = f.areas.map((id) => AREAS.find((a) => a.id === id)?.title).filter(Boolean);
  const lines = [
    `Name: ${f.name}`,
    `Organisation: ${f.company}`,
    `Email: ${f.email}`,
    f.phone ? `Phone: ${f.phone}` : null,
    f.size ? `Team size: ${f.size}` : null,
    areas.length ? `Training areas: ${areas.join(", ")}` : null,
    f.programme ? `Programme: ${f.programme}` : null,
    "",
    f.message,
  ].filter((l) => l !== null);
  const subject = `Training proposal request: ${f.company}`;
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}

function Field({ id, label, error, optional, children }) {
  return (
    <div className={`field${error ? " has-error" : ""}`}>
      <label className="field-label" htmlFor={id}>
        {label}{optional && <span className="optional"> (optional)</span>}
      </label>
      {children}
      {error && <p className="field-error" id={`${id}-error`}>{error}</p>}
    </div>
  );
}

export default function ContactPage({ brief }) {
  const [form, setForm] = useState(() => ({
    name: "", email: "", company: "", phone: "",
    size: brief?.size || "",
    areas: brief?.areas || [],
    programme: brief?.programme || "",
    message: brief?.programme ? `We'd like a quote for ${brief.programme}.` : "",
  }));
  const [errors, setErrors] = useState({});
  const [sent, setSent]     = useState(false);

  const upd = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };
  const toggleArea = (id) =>
    setForm((f) => ({ ...f, areas: f.areas.includes(id) ? f.areas.filter((x) => x !== id) : [...f.areas, id] }));

  const submit = (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) { document.getElementById(`c-${first}`)?.focus(); return; }
    window.location.href = mailtoFor(form);
    setSent(true);
  };

  const describe = (k) => (errors[k] ? `c-${k}-error` : undefined);

  return (
    <section className="section contact">
      <div className="wrap contact-grid">
        <div className="contact-info">
          <h1>Request a training proposal</h1>
          <p className="lede">
            Tell us about your team and what they need to learn. An advisor will get back to you
            with a recommended programme.
          </p>
          <ul className="contact-list">
            <li>
              <Ico n="mail" s={20} />
              <div><span className="contact-label">Email</span><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></div>
            </li>
            <li>
              <Ico n="phone" s={20} />
              <div><span className="contact-label">Phone</span><a href={CONTACT.phoneHref}>{CONTACT.phone}</a></div>
            </li>
            <li>
              <Ico n="pin" s={20} />
              <div><span className="contact-label">Location</span>{CONTACT.location}</div>
            </li>
          </ul>
        </div>

        <div className="form-panel">
          {sent ? (
            <div className="form-done" role="status">
              <Ico n="success" s={40} className="form-done-icon" />
              <h2>Your request is ready to send</h2>
              <p>
                Your email app should have opened with your request addressed to {CONTACT.email}.
                Press send there and an advisor will get back to you.
              </p>
              <p>
                Nothing opened? Email <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or
                call <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>.
              </p>
              <button className="btn btn-secondary" onClick={() => setSent(false)}>Edit your request</button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <div className="form-row">
                <Field id="c-name" label="Your name" error={errors.name}>
                  <input id="c-name" name="name" className="input" autoComplete="name"
                    value={form.name} onChange={upd} aria-invalid={!!errors.name} aria-describedby={describe("name")} />
                </Field>
                <Field id="c-email" label="Work email" error={errors.email}>
                  <input id="c-email" name="email" type="email" className="input" autoComplete="email"
                    value={form.email} onChange={upd} aria-invalid={!!errors.email} aria-describedby={describe("email")} />
                </Field>
              </div>
              <div className="form-row">
                <Field id="c-company" label="Organisation" error={errors.company}>
                  <input id="c-company" name="company" className="input" autoComplete="organization"
                    value={form.company} onChange={upd} aria-invalid={!!errors.company} aria-describedby={describe("company")} />
                </Field>
                <Field id="c-phone" label="Phone" optional>
                  <input id="c-phone" name="phone" type="tel" className="input" autoComplete="tel"
                    value={form.phone} onChange={upd} />
                </Field>
              </div>

              <Field id="c-size" label="Team size" optional>
                <select id="c-size" name="size" className="input" value={form.size} onChange={upd}>
                  <option value="">Choose a team size</option>
                  {TEAM_SIZES.map((s) => <option key={s}>{s}</option>)}
                </select>
              </Field>

              <fieldset className="field">
                <legend className="field-label">Training areas <span className="optional">(optional)</span></legend>
                <div className="chips">
                  {AREAS.map((a) => (
                    <label key={a.id} className="chip">
                      <input type="checkbox" checked={form.areas.includes(a.id)} onChange={() => toggleArea(a.id)} />
                      <span><Ico n="check" s={14} className="chip-tick" />{a.title}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <Field id="c-message" label="What does your team need?" error={errors.message}>
                <textarea id="c-message" name="message" className="input" rows={5}
                  placeholder="For example: our analysts need to move from Excel to Power BI by next quarter."
                  value={form.message} onChange={upd} aria-invalid={!!errors.message} aria-describedby={describe("message")} />
              </Field>

              <button type="submit" className="btn btn-primary btn-block">
                Send request <Ico n="arrow" s={18} />
              </button>
              <p className="form-note">Sending opens your email app with your request filled in.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
