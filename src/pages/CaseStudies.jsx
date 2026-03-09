import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const cases = [
  {
    num: "01",
    sector: "Safety & Compliance",
    title: "Commercial Safety Compliance Company",
    context: [
      "Founder nearing retirement with no identified successor",
      "Recurring inspection revenue under multi-year commercial contracts",
      "Strong local reputation with commercial property managers",
    ],
    opportunities: [
      "Scheduling optimization to improve technician utilization",
      "Pricing discipline relative to inflation and regulatory requirements",
      "Reporting infrastructure to improve financial visibility",
    ],
    note: "Illustrative example based on the types of businesses we seek.",
  },
  {
    num: "02",
    sector: "Environmental Services",
    title: "Environmental Field Service Operator",
    context: [
      "Fragmented local market with no dominant competitor",
      "Strong repeat customer base built over more than a decade",
      "Limited systems infrastructure despite consistent profitability",
    ],
    opportunities: [
      "Fleet utilization improvements through route density optimization",
      "Procurement improvements via platform-level vendor relationships",
      "Service line expansion into adjacent environmental categories",
    ],
    note: "Illustrative example based on the types of businesses we seek.",
  },
  {
    num: "03",
    sector: "Specialty Trades",
    title: "Specialty Trade Contractor",
    context: [
      "Established commercial client relationships with long tenure",
      "Skilled technician workforce with low historical turnover",
      "Underdeveloped reporting systems relative to business maturity",
    ],
    opportunities: [
      "Financial reporting improvements to improve management visibility",
      "Recruiting pipeline development to support controlled growth",
      "Maintenance contract development to increase recurring revenue",
    ],
    note: "Illustrative example based on the types of businesses we seek.",
  },
];

export default function CaseStudies() {
  return (
    <>
      {/* Hero */}
      <section className="rh-section" style={{ paddingTop: "96px" }}>
        <div className="rh-container-text">
          <span className="rh-eyebrow">Case Studies</span>
          <h1 className="rh-h1">Representative opportunities.</h1>
          <p className="rh-body-lg">
            The following examples illustrate the types of businesses we seek and the operational improvements we pursue after acquisition.
          </p>
          <p className="rh-note">
            Examples are illustrative and represent the profile of companies we target. They do not describe specific completed transactions.
          </p>
        </div>
      </section>

      <hr className="rh-divider" />

      {/* Case Studies */}
      <section className="rh-section">
        <div className="rh-container">
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {cases.map((c, i) => (
              <div key={c.num} style={{
                padding: "56px 0",
                borderBottom: i < cases.length - 1 ? "1px solid #1a211a" : "none",
              }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "14px", marginBottom: "6px" }}>
                  <span style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "10px", color: "#5e5a4e",
                    letterSpacing: "0.2em", textTransform: "uppercase",
                  }}>
                    {c.sector}
                  </span>
                </div>
                <h2 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(22px, 3.5vw, 32px)",
                  fontWeight: 400, color: "#f2ecd8",
                  margin: "0 0 36px", lineHeight: "1.2",
                }}>
                  {c.title}
                </h2>

                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", maxWidth: "900px" }}
                  className="rh-case-grid">
                  <style>{`
                    @media (min-width: 640px) {
                      .rh-case-grid { grid-template-columns: 1fr 1fr !important; }
                    }
                  `}</style>

                  <div>
                    <div style={{
                      fontFamily: "system-ui, sans-serif",
                      fontSize: "10px", letterSpacing: "0.2em",
                      textTransform: "uppercase", color: "#5e5a4e",
                      marginBottom: "16px",
                    }}>
                      Business Profile
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      {c.context.map((item, j) => (
                        <div key={j} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                          <div style={{
                            width: "4px", height: "4px", borderRadius: "50%",
                            background: "#3a4038", marginTop: "10px", flexShrink: 0,
                          }} />
                          <p className="rh-body" style={{ marginBottom: 0, fontSize: "15px", lineHeight: "1.65" }}>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div style={{
                      fontFamily: "system-ui, sans-serif",
                      fontSize: "10px", letterSpacing: "0.2em",
                      textTransform: "uppercase", color: "#5e5a4e",
                      marginBottom: "16px",
                    }}>
                      Operational Opportunities
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      {c.opportunities.map((item, j) => (
                        <div key={j} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                          <div style={{
                            width: "4px", height: "4px", borderRadius: "50%",
                            background: "#3a4038", marginTop: "10px", flexShrink: 0,
                          }} />
                          <p className="rh-body" style={{ marginBottom: 0, fontSize: "15px", lineHeight: "1.65" }}>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rh-section rh-section-alt">
        <div className="rh-container-text">
          <span className="rh-eyebrow">Next Steps</span>
          <h2 className="rh-h2">Explore the investment thesis.</h2>
          <p className="rh-body" style={{ marginBottom: "36px" }}>
            For a deeper view into the economics of our model, or to begin a conversation about a specific business, we're available.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link to={createPageUrl("IllustrativeEconomics")} className="rh-btn">Illustrative Economics</Link>
            <Link to={createPageUrl("Contact")} className="rh-btn-outline">Start a Conversation</Link>
          </div>
        </div>
      </section>
    </>
  );
}