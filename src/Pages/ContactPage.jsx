// src/pages/ContactPage.jsx
import { useState } from "react";
import Footer from "../components/Footer.jsx";
import Ico    from "../components/Icon.jsx";
import { useReveal } from "../hooks.jsx";
import { SERVICES } from "../data.jsx";

const CONTACT_ITEMS = [
  ["mail",  "Email",    "info@aimsta.com"],
  ["phone", "Phone",    "+1 (555) 123-4567"],
  ["pin",   "Location", "New York, NY"],
];

export default function ContactPage({ go }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const rL = useReveal("reveal-l");
  const rR = useReveal("reveal-r");

  const upd = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const sub = (e) => { e.preventDefault(); setSent(true); };

  return (
    <>
      <section className="sec sec-light">
        <div className="sec-inner">
          <div className="contact-grid">

            {/* Left: info */}
            <div {...rL()}>
              <div className="contact-info">
                <span className="eyebrow eyebrow-dark">Get in Touch</span>
                <h2>Start your <em>learning</em> journey today</h2>
                <p>
                  Have questions about our programmes, pricing, or intake dates? Our team responds within
                  24 hours and will recommend the perfect pathway for your goals.
                </p>

                <div className="c-items">
                  {CONTACT_ITEMS.map(([ico, label, value]) => (
                    <div className="c-item" key={label}>
                      <div className="c-ico"><Ico n={ico} s={16} /></div>
                      <div>
                        <div className="c-lbl">{label}</div>
                        <div className="c-val">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div {...rR()}>
              <div className="contact-form-box">
                {sent ? (
                  <div className="form-ok">
                    <Ico n="success" />
                    <h3 style={{
                      fontFamily: "'Cormorant Garamond',serif",
                      fontSize: "1.8rem", color: "var(--ink)",
                      margin: ".75rem 0 .4rem",
                    }}>
                      Message Received
                    </h3>
                    <p>Thank you for reaching out. A member of our team will be in touch within 24 hours.</p>
                  </div>
                ) : (
                  <>
                    <h3>Send us a message</h3>
                    <form onSubmit={sub}>
                      <div className="f-row">
                        <div className="f-field">
                          <label>Full Name *</label>
                          <input name="name" required placeholder="Jane Smith" value={form.name} onChange={upd} />
                        </div>
                        <div className="f-field">
                          <label>Email *</label>
                          <input name="email" type="email" required placeholder="jane@company.com" value={form.email} onChange={upd} />
                        </div>
                      </div>
                      <div className="f-row">
                        <div className="f-field">
                          <label>Phone</label>
                          <input name="phone" placeholder="+1 555 000 0000" value={form.phone} onChange={upd} />
                        </div>
                        <div className="f-field">
                          <label>Interested in</label>
                          <select name="service" value={form.service} onChange={upd}>
                            <option value="">Select a programme…</option>
                            {SERVICES.map((s) => (
                              <option key={s.title} value={s.title}>{s.title}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="f-field">
                        <label>Message *</label>
                        <textarea
                          name="message" required
                          placeholder="Tell us about your goals and what you're hoping to achieve…"
                          value={form.message} onChange={upd}
                        />
                      </div>
                      <button
                        type="submit" className="btn-forest"
                        style={{ width: "100%", justifyContent: "center" }}
                      >
                        Send Message <Ico n="arrow" s={16} />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer go={go} />
    </>
  );
}