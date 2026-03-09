import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const reasons = [
  {
    title: "Flexible Transitions",
    body: "Timing and structure can be tailored to the owner's goals. We work within timelines that make sense for the business and the people who depend on it.",
  },
  {
    title: "Long-Term Ownership",
    body: "We are building a permanent platform, not a portfolio to flip. Businesses we acquire are not subject to an artificial exit timeline.",
  },
  {
    title: "Operational Support",
    body: "We bring systems, recruiting support, and operational discipline. After the transition, businesses have more resources behind them, not fewer.",
  },
  {
    title: "Respect for Legacy",
    body: "Customer relationships and employee trust remain central to the business. We do not disrupt what works. We strengthen what can be improved.",
  },
];

export default function ForSellers() {
  return (
    <>
      {/* Hero */}
      <section className="rh-section" style={{ paddingTop: "96px" }}>
        <div className="rh-container">
          <span className="rh-eyebrow">For Sellers</span>
          <h1 className="rh-h1">A thoughtful transition for the businesses you built.</h1>
          <p className="rh-body-lg">
            Many founders have spent decades building strong companies. We aim to provide a long-term home where those businesses can continue to grow while preserving their reputation, employees, and customer relationships.
          </p>
        </div>
      </section>

      <hr className="rh-divider" />

      {/* Why Owners Work With Us */}
      <section className="rh-section rh-section-alt">
        <div className="rh-container-text">
          <span className="rh-eyebrow">Why Owners Work With Us</span>
          <h2 className="rh-h2" style={{ maxWidth: "480px", marginBottom: "48px" }}>
            Built for the long term. Structured for the transition.
          </h2>
          <div className="rh-grid-2">
            {reasons.map((r) => (
              <div key={r.title} className="rh-card" style={{ background: "#111610" }}>
                <h3 className="rh-h3" style={{ marginBottom: "12px" }}>{r.title}</h3>
                <p className="rh-body" style={{ marginBottom: 0, fontSize: "15px" }}>{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transition Philosophy */}
      <section className="rh-section">
        <div className="rh-container-text">
          <span className="rh-eyebrow">Our Transition Philosophy</span>
          <h2 className="rh-h2" style={{ maxWidth: "480px", marginBottom: "44px" }}>What stays the same. What gets better.</h2>
          <div style={{ maxWidth: "820px" }}>
            {[
              { title: "Your brand stays yours.", body: "We do not rebrand acquired companies. The name, reputation, and local identity you built remain in place. That reputation is part of what we're buying." },
              { title: "Your employees are protected.", body: "We do not acquire businesses with the intention of cutting staff. Our goal is to support the existing team, improve their tools, and create a stable environment for long-term growth." },
              { title: "Local leadership remains central.", body: "The people who run the business day-to-day continue to do so. We provide support, infrastructure, and capital — not a new management team from outside the market." },
              { title: "You define the timeline.", body: "Whether you want a clean break or a multi-year transition, we structure around your goals. There is no pressure to move faster than makes sense for you and your business." },
            ].map((item, i, arr) => (
              <div key={item.title} style={{
                padding: "28px 0",
                borderTop: "1px solid #1a211a",
                borderBottom: i === arr.length - 1 ? "1px solid #1a211a" : "none",
              }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "19px", fontWeight: 400,
                  color: "#f2ecd8", margin: "0 0 10px",
                }}>
                  {item.title}
                </h3>
                <p className="rh-body" style={{ marginBottom: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="rh-section rh-section-alt">
        <div className="rh-container">
          <span className="rh-eyebrow">The Process</span>
          <h2 className="rh-h2">Simple. Confidential. Direct.</h2>
          <p className="rh-body">
            Every conversation starts in confidence and without obligation. We will ask to understand your business, your goals, and your preferred timeline. If there is a fit, we move efficiently toward a straightforward transaction.
          </p>
          <p className="rh-body">
            We typically focus on businesses generating at least $250K in annual earnings with a consistent operating history. Most important is that the business serves its customers well and the owner is ready to transition thoughtfully.
          </p>
          <p className="rh-body">
            We will not waste your time. We ask only for the information needed to evaluate the opportunity honestly — that is the foundation for a transaction that works for both sides.
          </p>
        </div>
      </section>

      {/* CTA Dark */}
      <section className="rh-section rh-section-dark">
        <div className="rh-container-text">
          <span className="rh-eyebrow">Start Here</span>
          <h2 className="rh-h2">Ready to explore a transition?</h2>
          <p className="rh-body-lg" style={{ marginBottom: "36px" }}>
            Reach out with a brief description of your business and what you're looking for. All conversations are held in strict confidence.
          </p>
          <Link to={createPageUrl("Contact")} className="rh-btn-ghost">
            Start a confidential conversation
          </Link>
        </div>
      </section>
    </>
  );
}