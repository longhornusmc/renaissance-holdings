import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="rh-section" style={{ paddingTop: "96px" }}>
        <div className="rh-container-text">
          <span className="rh-eyebrow">Contact</span>
          <h1 className="rh-h1">Start a conversation.</h1>
          <p className="rh-body-lg">
            If you are considering selling a business, exploring a partnership, or learning more about our strategy, we welcome a confidential conversation.
          </p>
        </div>
      </section>

      <hr className="rh-divider" />

      {/* Form */}
      <section className="rh-section">
        <div className="rh-container">
          <div style={{ maxWidth: "580px" }}>
            {submitted ? (
              <div style={{
                padding: "48px 0",
                borderTop: "1px solid #1a211a",
                borderBottom: "1px solid #1a211a",
              }}>
                <div style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "26px", fontWeight: 400,
                  color: "#f2ecd8", marginBottom: "16px",
                }}>
                  Thank you for reaching out.
                </div>
                <p className="rh-body">
                  We've received your message and will be in touch shortly. All inquiries are handled with complete confidentiality.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div>
                  <label className="rh-form-label" htmlFor="name">Name</label>
                  <input
                    className="rh-input"
                    type="text" id="name" name="name"
                    value={form.name} onChange={handleChange}
                    required placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="rh-form-label" htmlFor="email">Email</label>
                  <input
                    className="rh-input"
                    type="email" id="email" name="email"
                    value={form.email} onChange={handleChange}
                    required placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="rh-form-label" htmlFor="company">Company</label>
                  <input
                    className="rh-input"
                    type="text" id="company" name="company"
                    value={form.company} onChange={handleChange}
                    placeholder="Business or organization name"
                  />
                </div>
                <div>
                  <label className="rh-form-label" htmlFor="message">Message</label>
                  <textarea
                    className="rh-input"
                    id="message" name="message"
                    value={form.message} onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Briefly describe your business or inquiry..."
                    style={{ resize: "vertical", fontFamily: "system-ui, sans-serif" }}
                  />
                </div>
                <div style={{ paddingTop: "8px" }}>
                  <button type="submit" className="rh-btn">
                    Send Message
                  </button>
                </div>
                <p className="rh-caption" style={{ marginTop: "-8px" }}>
                  All conversations are held in strict confidence.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}