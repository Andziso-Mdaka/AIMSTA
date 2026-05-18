// pages/ContactPage.jsx
import { useState }  from "react";
import Footer        from "../components/Footer";
import FadeSection   from "../components/FadeSection";
import { Icon, SERVICES } from "../data";

const CONTACT_ITEMS = [
  { icon: "mail",  label: "Email Us",  value: "info@aimsta.com" },
  { icon: "phone", label: "Call Us",   value: "+1 (555) 123-4567" },
  { icon: "pin",   label: "Visit Us",  value: "New York, NY" },
];

export default function ContactPage({ setPage }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle  = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const submit  = (e) => { e.preventDefault(); setSent(true); };

  return (
    <div className="page">
      <section className="section">
        <div className="section-inner">
          <div className="contact-grid">

            {/* ── LEFT: info ── */}
            <FadeSection>
              <div className="contact-info">
                <span className="section-tag">Get in Touch</span>
                <h2>Start Your Learning Journey</h2>
                <p>
                  Have questions about our programs? Our team is ready to guide you toward the right path
                  and answer any questions you may have.
                </p>

                <div className="contact-details">
                  {CONTACT_ITEMS.map(({ icon, label, value }) => (
                    <div className="contact-item" key={label}>
                      <div className="contact-item-icon">
                        <Icon name={icon} size={16} />
                      </div>
                      <div>
                        <div className="contact-item-label">{label}</div>
                        <div className="contact-item-val">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeSection>

            {/* ── RIGHT: form ── */}
            <FadeSection>
              <div className="contact-form">
                {sent ? (
                  <div className="form-success">
                    <Icon name="success" />
                    <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", margin: ".75rem 0 .4rem" }}>
                      Message Sent!
                    </h3>
                    <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <>
                    <h3>Send Us a Message</h3>
                    <form onSubmit={submit}>
                      <div className="form-row">
                        <div className="field">
                          <label htmlFor="name">Full Name *</label>
                          <input
                            id="name" name="name" required
                            placeholder="Jane Smith"
                            value={form.name} onChange={handle}
                          />
                        </div>
                        <div className="field">
                          <label htmlFor="email">Email Address *</label>
                          <input
                            id="email" name="email" type="email" required
                            placeholder="jane@email.com"
                            value={form.email} onChange={handle}
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="field">
                          <label htmlFor="phone">Phone Number</label>
                          <input
                            id="phone" name="phone"
                            placeholder="+1 555 000 0000"
                            value={form.phone} onChange={handle}
                          />
                        </div>
                        <div className="field">
                          <label htmlFor="service">Interested In</label>
                          <select id="service" name="service" value={form.service} onChange={handle}>
                            <option value="">Select a program…</option>
                            {SERVICES.map((s) => (
                              <option key={s.title} value={s.title}>{s.title}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="field">
                        <label htmlFor="message">Message *</label>
                        <textarea
                          id="message" name="message" required
                          placeholder="Tell us about your goals and how we can help…"
                          value={form.message} onChange={handle}
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn-primary"
                        style={{ width: "100%", justifyContent: "center" }}
                      >
                        Send Message <Icon name="arrow" size={16} />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </FadeSection>

          </div>
        </div>
      </section>

      <Footer setPage={setPage} />
    </div>
  );
}
