import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const steps = [
  {
    num: "01",
    title: "Acquire",
    body: "Partner with founder-owned businesses where succession planning may be limited. We focus on companies with recurring demand, strong local reputations, and clear opportunities for operational improvement.",
  },
  {
    num: "02",
    title: "Improve",
    body: "Strengthen systems, reporting, pricing discipline, and operational efficiency. Each business benefits from shared infrastructure and direct operational support without losing its local identity.",
  },
  {
    num: "03",
    title: "Compound",
    body: "Reinvest cash flow into growth initiatives and adjacent acquisitions. Each acquisition improves our ability to underwrite and operate the next one, creating a self-reinforcing platform over time.",
  },
];

const serviceCharacteristics = [
  "Recurring or repeat demand patterns",
  "Local service delivery requiring physical presence",
  "High fragmentation with limited institutional ownership",
  "Low susceptibility to technological disruption or offshoring",
  "Strong, sticky customer relationships developed over years",
];

export default function Strategy() {
  return (
    <>
      {/* Hero */}
      <section className="rh-section" style={{ paddingTop: "96px" }}>
        <div className="rh-container-text">
          <span className="rh-eyebrow">Our Strategy</span>
          <h1 className="rh-h1">Acquire, improve, and compound.</h1>
          <p className="rh-body-lg">
            Renaissance Holdings focuses on acquiring durable service businesses operating in fragmented markets. We seek companies with strong local reputations, recurring demand, and clear opportunities for operational improvement.
          </p>
          <p className="rh-body">
            Unlike traditional private equity models, our goal is to build a long-term platform of businesses rather than pursue short-term financial engineering. We measure success in decades, not exit cycles.
          </p>
        </div>
      </section>

      <hr className="rh-divider" />

      {/* Core Strategy */}
      <section className="rh-section rh-section-alt">
        <div className="rh-container-text">
          <span className="rh-eyebrow">Core Strategy</span>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "820px" }}>
            {steps.map((step) => (
              <div key={step.num} style={{
                display: "grid",
                gridTemplateColumns: "48px 1fr",
                gap: "24px",
                padding: "28px 0",
                borderBottom: "1px solid #1a211a",
              }}>
                <div style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "28px", fontWeight: 400,
                  color: "#6b5a2a", paddingTop: "4px", lineHeight: "1",
                }}>
                  {step.num}
                </div>
                <div>
                  <h3 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "22px", fontWeight: 400,
                    color: "#f2ecd8", margin: "0 0 12px",
                  }}>
                    {step.title}
                  </h3>
                  <p className="rh-body" style={{ marginBottom: 0 }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Service Businesses */}
      <section className="rh-section">
        <div className="rh-container-text">
          <span className="rh-eyebrow">Why Service Businesses</span>
          <h2 className="rh-h2" style={{ maxWidth: "520px" }}>
            Characteristics that make them attractive long-term investments.
          </h2>
          <p className="rh-body" style={{ maxWidth: "580px", marginBottom: "36px" }}>
            Essential service businesses often possess qualities that are difficult to replicate and that compound over time. We look for markets where these dynamics are strongest.
          </p>
          <ul className="rh-list" style={{ maxWidth: "580px" }}>
            {serviceCharacteristics.map((c) => <li key={c}>{c}</li>)}
          </ul>
          <div style={{ marginTop: "40px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link to={createPageUrl("InvestmentCriteria")} className="rh-btn">View Investment Criteria</Link>
            <Link to={createPageUrl("OurModel")} className="rh-btn-outline">How Our Model Works</Link>
          </div>
        </div>
      </section>
    </>
  );
}