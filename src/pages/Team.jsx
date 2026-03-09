import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Team() {
  return (
    <>
      {/* Hero */}
      <section className="rh-section" style={{ paddingTop: "96px" }}>
        <div className="rh-container">
          <span className="rh-eyebrow">Leadership</span>
          <h1 className="rh-h1">Investing discipline. Operator focus.</h1>
          <p className="rh-body-lg">
            Renaissance Holdings combines investing discipline with operator-focused execution. Our goal is to build a long-term platform of durable service businesses supported by disciplined capital allocation and operational improvement.
          </p>
        </div>
      </section>

      <hr className="rh-divider" />

      {/* Founder */}
      <section className="rh-section">
        <div className="rh-container-text">
          <span className="rh-eyebrow">Founding Team</span>
          <div style={{ maxWidth: "820px" }}>
            <div style={{
              padding: "40px 0",
              borderBottom: "1px solid #1a211a",
              borderTop: "1px solid #1a211a",
            }}>
              <div style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "10px", letterSpacing: "0.22em",
                textTransform: "uppercase", color: "#5e5a4e",
                marginBottom: "12px",
              }}>
                Founder &amp; Managing Partner
              </div>
              <h2 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "26px", fontWeight: 400,
                color: "#f2ecd8", margin: "0 0 16px",
              }}>
                [Name]
              </h2>
              <p className="rh-body" style={{ maxWidth: "580px" }}>
                Background and biography to be added. Relevant experience in operations, investing, or small business management that supports the Renaissance Holdings strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="rh-section rh-section-alt">
        <div className="rh-container-text">
          <span className="rh-eyebrow">Operating Advisors &amp; Partners</span>
          <h2 className="rh-h2" style={{ maxWidth: "480px", marginBottom: "16px" }}>
            Supported by experienced operators and industry specialists.
          </h2>
          <p className="rh-body" style={{ maxWidth: "560px", marginBottom: "44px" }}>
            Renaissance Holdings is supported by a network of operators, industry advisors, and capital partners who bring direct experience in the markets we target.
          </p>
          <div className="rh-grid-3">
            {["Operating Advisor", "Industry Specialist", "Strategic Partner"].map((role) => (
              <div key={role} className="rh-card">
                <div style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "10px", letterSpacing: "0.2em",
                  textTransform: "uppercase", color: "#5e5a4e",
                  marginBottom: "10px",
                }}>
                  {role}
                </div>
                <div style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "18px", color: "#f2ecd8",
                  marginBottom: "10px", fontWeight: 400,
                }}>
                  [Name]
                </div>
                <p className="rh-body" style={{ marginBottom: 0, fontSize: "14px" }}>
                  Details to be added.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="rh-section">
        <div className="rh-container-text">
          <span className="rh-eyebrow">Get in Touch</span>
          <h2 className="rh-h2">We welcome introductions.</h2>
          <p className="rh-body" style={{ marginBottom: "32px" }}>
            Whether you are a founder exploring a transition, a broker with a relevant opportunity, or an operator interested in the platform, we welcome a conversation.
          </p>
          <Link to={createPageUrl("Contact")} className="rh-btn">Start a Conversation</Link>
        </div>
      </section>
    </>
  );
}