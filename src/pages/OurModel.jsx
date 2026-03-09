import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const pillars = [
  {
    num: "01",
    title: "Decentralized Operations",
    body: "Local leaders remain close to customers and day-to-day operations. We do not centralize what should stay local. Each business retains its identity, customer relationships, and culture.",
  },
  {
    num: "02",
    title: "Centralized Capabilities",
    body: "Finance, reporting, recruiting, procurement, and selected technology are shared across the platform. Businesses benefit from institutional infrastructure without bearing its full cost.",
  },
  {
    num: "03",
    title: "Better Underwriting Over Time",
    body: "Each acquisition strengthens our understanding of industry dynamics, operator behavior, and operational patterns. The second deal in a market is better underwritten than the first.",
  },
  {
    num: "04",
    title: "Flexible Capital Allocation",
    body: "Cash flow from mature businesses can be reinvested across the platform into growth initiatives, tuck-in acquisitions, and adjacent opportunities as they arise.",
  },
];

export default function OurModel() {
  return (
    <>
      {/* Hero */}
      <section className="rh-section" style={{ paddingTop: "96px" }}>
        <div className="rh-container-text">
          <span className="rh-eyebrow">Our Model</span>
          <h1 className="rh-h1">How the model compounds.</h1>
          <p className="rh-body-lg">
            Our structure combines decentralized operations with centralized support functions. Each business retains its identity, culture, and local customer relationships while benefiting from shared systems and operational infrastructure.
          </p>
          <p className="rh-body">
            The result is a platform where individual businesses become more durable and more valuable over time — and where each new acquisition benefits from everything we've learned before it.
          </p>
        </div>
      </section>

      <hr className="rh-divider" />

      {/* Value Creation Pillars */}
      <section className="rh-section rh-section-alt">
        <div className="rh-container">
          <span className="rh-eyebrow">Value Creation</span>
          <h2 className="rh-h2" style={{ maxWidth: "480px", marginBottom: "48px" }}>
            Four pillars of long-term platform value.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0", maxWidth: "820px" }}>
            {pillars.map((p, i) => (
              <div key={p.num} style={{
                display: "grid",
                gridTemplateColumns: "56px 1fr",
                gap: "24px",
                padding: "32px 0",
                borderBottom: i < pillars.length - 1 ? "1px solid #1a211a" : "none",
                borderTop: i === 0 ? "1px solid #1a211a" : "none",
              }}>
                <div style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "24px", fontWeight: 400,
                  color: "#6b5a2a", paddingTop: "4px", lineHeight: "1",
                }}>
                  {p.num}
                </div>
                <div>
                  <h3 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "21px", fontWeight: 400,
                    color: "#f2ecd8", margin: "0 0 12px",
                  }}>
                    {p.title}
                  </h3>
                  <p className="rh-body" style={{ marginBottom: 0 }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting section */}
      <section className="rh-section">
        <div className="rh-container-text">
          <span className="rh-eyebrow">Why It Works</span>
          <h2 className="rh-h2">The platform premium is earned, not assumed.</h2>
          <p className="rh-body">
            We enter each acquisition at a price reflecting the current state of the business — not a projection. Improvements come from operational work, not financial engineering. The platform multiple is the outcome of discipline applied consistently over time.
          </p>
          <p className="rh-body">
            Many essential service industries remain genuinely fragmented. Businesses that were built by founders over decades now represent succession opportunities that patient, operator-focused capital is well-positioned to address.
          </p>
          <div style={{ marginTop: "36px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link to={createPageUrl("IllustrativeEconomics")} className="rh-btn">Illustrative Economics</Link>
            <Link to={createPageUrl("CaseStudies")} className="rh-btn-outline">Representative Opportunities</Link>
          </div>
        </div>
      </section>
    </>
  );
}