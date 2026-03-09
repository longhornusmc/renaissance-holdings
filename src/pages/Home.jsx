import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const whatWeBuy = [
  {
    title: "Essential Services",
    body: "Businesses providing recurring or mission-critical work tied to safety, maintenance, compliance, or business continuity.",
  },
  {
    title: "Local Market Advantage",
    body: "Companies where reputation, response time, licensing, and customer relationships create defensible local positions.",
  },
  {
    title: "Succession Opportunities",
    body: "Founder-owned businesses where owners are approaching retirement and seeking a thoughtful transition.",
  },
];

const pillars = [
  { num: "01", title: "Operational Systems", body: "Improving financial reporting, scheduling, pricing discipline, and operational visibility." },
  { num: "02", title: "Shared Services", body: "Centralizing finance, procurement, recruiting, and selected technology to reduce friction across the platform." },
  { num: "03", title: "Market Intelligence", body: "Each acquisition improves our understanding of the industry, helping us underwrite and execute future opportunities." },
  { num: "04", title: "Capital Allocation", body: "Cash flow from mature businesses can be reinvested into growth initiatives, tuck-in acquisitions, and adjacent platforms." },
];

const sectors = [
  "Safety and compliance services",
  "Environmental services",
  "Specialty trade services",
  "Recurring maintenance businesses",
  "Route-based field service companies",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="rh-section" style={{ paddingTop: "96px", paddingBottom: "88px" }}>
        <div className="rh-container">
          <span className="rh-eyebrow">Renaissance Holdings</span>
          <h1 className="rh-h1" style={{ maxWidth: "680px" }}>
            We acquire and operate essential local service businesses.
          </h1>
          <p className="rh-body-lg" style={{ maxWidth: "540px" }}>
            Renaissance Holdings is a long-term owner of durable service companies in fragmented local markets. We focus on operational improvement, disciplined capital allocation, and permanent ownership.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "8px" }}>
            <Link to={createPageUrl("Contact")} className="rh-btn">Discuss a Business</Link>
            <Link to={createPageUrl("Strategy")} className="rh-btn-outline">View Strategy</Link>
          </div>
        </div>
      </section>

      <hr className="rh-divider" />

      {/* What We Buy */}
      <section className="rh-section rh-section-alt">
        <div className="rh-container">
          <span className="rh-eyebrow">What We Buy</span>
          <h2 className="rh-h2" style={{ maxWidth: "440px" }}>Businesses built to last.</h2>
          <p className="rh-body" style={{ maxWidth: "560px", marginBottom: "44px" }}>
            We focus on small and lower middle market service businesses that provide essential work to their customers and communities. Many operate in fragmented industries with limited institutional ownership and strong local relationships.
          </p>
          <div className="rh-grid-3">
            {whatWeBuy.map((card) => (
              <div key={card.title} className="rh-card">
                <h3 className="rh-h3" style={{ marginBottom: "12px" }}>{card.title}</h3>
                <p className="rh-body" style={{ marginBottom: 0, fontSize: "15px" }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="rh-section">
        <div className="rh-container-text">
          <span className="rh-eyebrow">Why This Works</span>
          <h2 className="rh-h2">Fragmented markets reward patient operators.</h2>
          <p className="rh-body">
            Many essential service industries remain highly fragmented and under-institutionalized. Businesses in these markets are often operated successfully for decades by founders, but lack the systems, capital access, and operational infrastructure needed to grow beyond their current scale.
          </p>
          <p className="rh-body">
            We are actively acquiring and building in these markets. Our approach combines disciplined underwriting with direct operational support and a permanent ownership mindset.
          </p>
        </div>
      </section>

      <hr className="rh-divider" />

      {/* How We Create Value */}
      <section className="rh-section rh-section-alt">
        <div className="rh-container">
          <span className="rh-eyebrow">How We Create Value</span>
          <h2 className="rh-h2" style={{ maxWidth: "500px", marginBottom: "44px" }}>
            Operational improvement and disciplined capital allocation.
          </h2>
          <div className="rh-grid-4">
            {pillars.map((p) => (
              <div key={p.num} className="rh-pillar">
                <div className="rh-pillar-num">{p.num}</div>
                <h3 className="rh-h3">{p.title}</h3>
                <p className="rh-body" style={{ marginBottom: 0, fontSize: "15px", lineHeight: "1.72" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="rh-section">
        <div className="rh-container">
          <span className="rh-eyebrow">Sectors We Target</span>
          <h2 className="rh-h2" style={{ maxWidth: "400px" }}>Illustrative markets.</h2>
          <ul className="rh-list" style={{ maxWidth: "580px", marginTop: "16px" }}>
            {sectors.map((s) => <li key={s}>{s}</li>)}
          </ul>
          <div style={{ marginTop: "32px" }}>
            <Link to={createPageUrl("InvestmentCriteria")} className="rh-btn-outline">
              View Investment Criteria
            </Link>
          </div>
        </div>
      </section>

      {/* Credibility signals */}
      <section className="rh-section">
        <div className="rh-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0", maxWidth: "820px", margin: "0 auto" }}
            className="rh-cred-grid">
            <style>{`.rh-cred-grid { @media (min-width: 640px) { grid-template-columns: 1fr 1fr 1fr !important; } }`}</style>
            {[
              { label: "Ownership Model", value: "Permanent capital. No fixed exit timeline." },
              { label: "Operational Focus", value: "Operator-led improvement after every acquisition." },
              { label: "Seller Philosophy", value: "We preserve brand, employees, and local leadership." },
            ].map((s) => (
              <div key={s.label} style={{ padding: "28px 0", borderTop: "1px solid #EAE6E0" }}>
                <div style={{
                  fontFamily: "system-ui, sans-serif", fontSize: "10px",
                  letterSpacing: "0.2em", textTransform: "uppercase",
                  color: "#AEA9A2", marginBottom: "10px",
                }}>
                  {s.label}
                </div>
                <p style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "17px", color: "#1C1916",
                  lineHeight: "1.55", margin: 0,
                }}>
                  {s.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Sellers CTA */}
      <section className="rh-section rh-section-dark">
        <div className="rh-container-text">
          <span className="rh-eyebrow">For Sellers</span>
          <h2 className="rh-h2">A permanent home for strong businesses.</h2>
          <p className="rh-body-lg" style={{ marginBottom: "36px" }}>
            We partner with founders who have built strong companies and want a responsible transition. Our goal is to preserve what makes each business successful while strengthening systems and supporting long-term growth.
          </p>
          <Link to={createPageUrl("Contact")} className="rh-btn-ghost">
            Start a confidential conversation
          </Link>
        </div>
      </section>
    </>
  );
}