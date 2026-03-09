import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const multiples = [
  {
    label: "Entry Multiple Range",
    value: "2 – 3×",
    note: "Seller's Discretionary Earnings",
    detail: "Most founder-owned service businesses at our target scale trade between 2× and 3× SDE when sold through brokers or direct outreach. This reflects limited competition for these assets at this size.",
  },
  {
    label: "Target Earnings Margin",
    value: "20 – 40%",
    note: "SDE as % of revenue",
    detail: "Well-run businesses in our target verticals typically generate SDE margins in this range. Businesses below this threshold often have clear improvement opportunities.",
  },
  {
    label: "Target Revenue Range",
    value: "$250K – $1.5M",
    note: "Annual revenue per business",
    detail: "This is the range where businesses are too small for institutional buyers but large enough to have real operating infrastructure, customer tenure, and market position.",
  },
];

const levers = [
  {
    title: "Pricing Discipline",
    body: "Many founder-operated businesses have not raised prices in years. Modest, defensible price increases — supported by quality and relationship — can materially improve margins without customer attrition.",
  },
  {
    title: "Technician Utilization",
    body: "Route optimization, scheduling software, and improved dispatching can increase the number of billable service calls per technician per day. In field service businesses, this is often the single largest operational lever.",
  },
  {
    title: "Shared Services Savings",
    body: "Insurance, accounting, payroll processing, and software costs can be pooled across the platform. A business doing $500K in revenue cannot efficiently bear these costs alone. Ten such businesses can.",
  },
  {
    title: "Procurement",
    body: "Platform-level purchasing of parts, equipment, and supplies creates negotiating leverage that individual businesses cannot access. Volume discounts on consumables can improve gross margins meaningfully over time.",
  },
];

export default function IllustrativeEconomics() {
  return (
    <>
      {/* Hero */}
      <section className="rh-section" style={{ paddingTop: "96px" }}>
        <div className="rh-container-text">
          <span className="rh-eyebrow">Illustrative Economics</span>
          <h1 className="rh-h1">Illustrative economics of small business acquisitions.</h1>
          <p className="rh-body-lg">
            The following illustrates how we think about the economics of acquiring, operating, and compounding small service businesses over time. These are not projections — they represent how the opportunity is structured.
          </p>
          <p className="rh-note">
            All figures are illustrative. Actual results will vary based on specific business characteristics, market conditions, and execution.
          </p>
        </div>
      </section>

      <hr className="rh-divider" />

      {/* Acquisition Multiples */}
      <section className="rh-section rh-section-alt">
        <div className="rh-container">
          <span className="rh-eyebrow">Typical Acquisition Multiples</span>
          <h2 className="rh-h2" style={{ maxWidth: "480px", marginBottom: "44px" }}>
            Enter at private market prices.
          </h2>
          <div className="rh-grid-3" style={{ marginBottom: "36px" }}>
            {multiples.map((m) => (
              <div key={m.label} className="rh-card" style={{ background: "#FAFAF7" }}>
                <div style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "10px", letterSpacing: "0.2em",
                  textTransform: "uppercase", color: "#AEA9A2",
                  marginBottom: "12px",
                }}>
                  {m.label}
                </div>
                <div style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "34px", fontWeight: 400,
                  color: "#1C1916", marginBottom: "4px", lineHeight: "1",
                }}>
                  {m.value}
                </div>
                <div style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "12px", color: "#AEA9A2", marginBottom: "16px",
                }}>
                  {m.note}
                </div>
                <p className="rh-body" style={{ marginBottom: 0, fontSize: "14px", lineHeight: "1.7" }}>{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Improvement Levers */}
      <section className="rh-section">
        <div className="rh-container">
          <span className="rh-eyebrow">Operational Improvement Levers</span>
          <h2 className="rh-h2" style={{ maxWidth: "520px", marginBottom: "44px" }}>
            Margin improvements come from operations, not financial engineering.
          </h2>
          <div style={{ maxWidth: "820px" }}>
            {levers.map((l, i) => (
              <div key={l.title} style={{
                padding: "28px 0",
                borderBottom: i < levers.length - 1 ? "1px solid #EAE6E0" : "none",
                borderTop: i === 0 ? "1px solid #EAE6E0" : "none",
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "8px",
              }}>
                <h3 className="rh-h3" style={{ marginBottom: "8px" }}>{l.title}</h3>
                <p className="rh-body" style={{ marginBottom: 0 }}>{l.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cash Flow Reinvestment */}
      <section className="rh-section rh-section-alt">
        <div className="rh-container-text">
          <span className="rh-eyebrow">Cash Flow Reinvestment</span>
          <h2 className="rh-h2">Profits fund the next acquisition.</h2>
          <p className="rh-body">
            A business acquired at 2–3× SDE that generates steady earnings creates capital that can be redeployed into the next acquisition. Unlike traditional fund structures, there is no pressure to return capital on a defined timeline.
          </p>
          <p className="rh-body">
            The holding company structure allows cash to move efficiently between entities — from mature businesses that are throwing off earnings into earlier-stage acquisitions that need investment. Tax-efficient capital recycling is a meaningful structural advantage at scale.
          </p>
        </div>
      </section>

      {/* Platform Value */}
      <section className="rh-section">
        <div className="rh-container-text">
          <span className="rh-eyebrow">Platform Value Creation</span>
          <h2 className="rh-h2">The multiple expands with scale.</h2>
          <p className="rh-body">
            Individual service businesses in our target range trade at 2–3× earnings. Assembled platforms of complementary businesses — with shared infrastructure, operational systems, and portfolio-level cash flows — command meaningfully higher multiples from institutional buyers and strategic acquirers.
          </p>
          <p className="rh-body">
            The gap between entry multiple and exit multiple is not an assumption — it reflects observable market dynamics. The work is in building a platform that earns the premium: consistent operating performance, clean financial reporting, and a track record of successful integration.
          </p>
          <div style={{ marginTop: "36px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link to={createPageUrl("OurModel")} className="rh-btn">How Our Model Works</Link>
            <Link to={createPageUrl("Contact")} className="rh-btn-outline">Start a Conversation</Link>
          </div>
        </div>
      </section>
    </>
  );
}