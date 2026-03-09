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
        <div className="rh-container-text">
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
        <div className="rh-container">
          <span className="rh-eyebrow">Why Owners Work With Us</span>
          <h2 className="rh-h2" style={{ maxWidth: "480px", marginBottom: "48px" }}>
            Built for the long term. Structured for the transition.
          </h2>
          <div className="rh-grid-2">
            {reasons.map((r) => (
              <div key={r.title} className="rh-card" style={{ background: "#FAFAF7" }}>
                <h3 className="rh-h3" style={{ marginBottom: "12px" }}>{r.title}</h3>
                <p className="rh-body" style={{ marginBottom: 0, fontSize: "15px" }}>{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="rh-section">
        <div className="rh-container-text">
          <span className="rh-eyebrow">What to Expect</span>
          <h2 className="rh-h2">A straightforward process.</h2>
          <p className="rh-body">
            Every conversation starts with confidentiality and without obligation. We will ask to understand your business, your goals, and your timeline. If there's a fit, we move efficiently from there.
          </p>
          <p className="rh-body">
            We typically look for businesses with at least $250K in annual earnings and a consistent operating history. Beyond that, the most important thing is that the business is well-regarded by its customers and that the owner is ready to transition.
          </p>
          <p className="rh-body">
            We will not waste your time, and we ask that you give us the information we need to evaluate the opportunity honestly. That's the foundation for a transaction that works for both sides.
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