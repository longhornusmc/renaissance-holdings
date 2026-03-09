import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const criteria = [
  {
    label: "Revenue Profile",
    title: "Recurring or repeat service revenue.",
    body: "We seek businesses with predictable, returning demand — whether from contract relationships, regulatory requirements, or deeply habitual purchasing patterns.",
  },
  {
    label: "Market Structure",
    title: "Fragmented industries with limited institutional ownership.",
    body: "Most of the markets we target have no dominant player and no private equity incumbent. That fragmentation is both an opportunity and a protective characteristic.",
  },
  {
    label: "Service Characteristics",
    title: "Local, physical work that cannot easily be outsourced or automated.",
    body: "The work must require licensed technicians, physical presence, or specialized local knowledge. Services that can be centralized, automated, or offshored are outside our focus.",
  },
  {
    label: "Customer Base",
    title: "Diverse commercial customer relationships.",
    body: "We prefer businesses with multiple commercial clients, no single customer representing an outsized share of revenue, and relationships built on performance and trust rather than price alone.",
  },
  {
    label: "Operational Opportunity",
    title: "Clear improvements available through systems, pricing, or operations.",
    body: "We are operators, not just capital allocators. We look for tangible levers — better scheduling, improved pricing discipline, shared services integration — that can improve performance after acquisition.",
  },
  {
    label: "Owner Transition",
    title: "Founder-led businesses seeking succession solutions.",
    body: "We focus on situations where the owner has built something real and is ready to step back responsibly. We offer flexible structures and a long-term perspective rather than a quick exit.",
  },
];

export default function InvestmentCriteria() {
  return (
    <>
      {/* Hero */}
      <section className="rh-section" style={{ paddingTop: "96px" }}>
        <div className="rh-container">
          <span className="rh-eyebrow">Investment Criteria</span>
          <h1 className="rh-h1">How we evaluate opportunities.</h1>
          <p className="rh-body-lg">
            We evaluate potential acquisitions through a consistent set of operating and market criteria. Each criterion reflects something we've learned matters — for business durability, integration quality, and long-term value creation.
          </p>
        </div>
      </section>

      <hr className="rh-divider" />

      {/* Criteria */}
      <section className="rh-section">
        <div className="rh-container">
          <div style={{ maxWidth: "820px" }}>
            {criteria.map((c, i) => (
              <div key={c.label} style={{
                padding: "36px 0",
                borderBottom: i < criteria.length - 1 ? "1px solid #1a211a" : "none",
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "4px",
              }}>
                <span style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: "10px", letterSpacing: "0.22em",
                  textTransform: "uppercase", color: "#5e5a4e",
                  display: "block", marginBottom: "10px",
                }}>
                  {c.label}
                </span>
                <h3 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "21px", fontWeight: 400,
                  color: "#f2ecd8", margin: "0 0 14px", lineHeight: "1.35",
                }}>
                  {c.title}
                </h3>
                <p className="rh-body" style={{ marginBottom: 0 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rh-section rh-section-dark">
        <div className="rh-container">
          <span className="rh-eyebrow">Next Step</span>
          <h2 className="rh-h2">Does your business fit?</h2>
          <p className="rh-body-lg" style={{ marginBottom: "36px" }}>
            If you're a founder considering a transition and believe your business aligns with these criteria, we welcome a confidential conversation.
          </p>
          <Link to={createPageUrl("Contact")} className="rh-btn-ghost">Start a Conversation</Link>
        </div>
      </section>
    </>
  );
}