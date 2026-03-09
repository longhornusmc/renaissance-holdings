const phases = [
  {
    phase: "01",
    title: "Sourcing",
    items: [
      { label: "Business Brokers", desc: "BizBuySell, broker networks. First look at listed deals — often overpriced, but occasionally mispriced by sellers who just want out." },
      { label: "Cold Outreach", desc: "Direct mail and calls to owner-operators in target verticals. Most deals we close will never be listed anywhere." },
      { label: "Trade Associations", desc: "Industry conferences and trade shows. Owners talk to each other. Being present and known matters." },
      { label: "Accountant & Attorney Networks", desc: "The advisors who do estate planning for aging owners know who is thinking about selling three years before it happens." },
    ],
  },
  {
    phase: "02",
    title: "Evaluation",
    items: [
      { label: "Revenue Stability", desc: "3+ years of stable or growing revenue. Seasonality is acceptable. Decline is not." },
      { label: "SDE Margin", desc: "Target 20–35% seller's discretionary earnings margin. Lower is acceptable with a clear improvement path." },
      { label: "Customer Concentration", desc: "No single customer over 20% of revenue. Recurring contract revenue is preferred over project-based work." },
      { label: "Essential Service", desc: "Is this business legally mandated or deeply habitual? Would clients leave if we raised prices 10%?" },
      { label: "Succession Gap", desc: "Is the owner the key employee? Do they want out? Is there a viable transition timeline?" },
    ],
  },
  {
    phase: "03",
    title: "Due Diligence",
    items: [
      { label: "Financial QoE", desc: "3 years of tax returns, P&Ls, and bank statements. Reconcile every number. Identify owner perks and one-time items." },
      { label: "Equipment Audit", desc: "Age, condition, and replacement cost of all vehicles and equipment. Factor into price." },
      { label: "Customer List Review", desc: "Contract terms, tenure, payment history. The customer list is the business." },
      { label: "Regulatory Compliance", desc: "All licenses, permits, and certifications current. Any pending violations or complaints?" },
      { label: "Key Employee Assessment", desc: "Who runs operations day-to-day? Would they stay? Under what conditions?" },
    ],
  },
  {
    phase: "04",
    title: "Deal Structure",
    items: [
      { label: "Purchase Price", desc: "2–3x SDE. We do not pay growth multiples. We price what we can verify." },
      { label: "SBA Financing", desc: "SBA 7(a) loans for acquisitions under $5M. 10-year terms, 10–20% down. The standard tool for our deal size." },
      { label: "Seller Financing", desc: "10–20% seller note on most deals. Aligns incentives, fills the SBA gap, signals seller confidence in the business." },
      { label: "Earnout (limited)", desc: "Only for businesses with uncertain customer relationships or pending contract renewals. We prefer not to use them." },
    ],
  },
];

export default function AcquisitionPlaybook() {
  return (
    <div className="rh-page">
      <div className="rh-label">Renaissance Holdings · 04</div>
      <h1 className="rh-h1">Acquisition Playbook</h1>
      <p className="rh-subtitle">
        How we find, evaluate, structure, and close deals — repeatedly.
      </p>

      <p className="rh-body">
        The acquisition process is not art. It is a repeatable methodology that gets more precise with each
        deal. By our fifth acquisition in a vertical, we know what a business in that vertical should cost,
        what the margins should be, what the red flags look like, and how long integration will take. That
        precision is a structural advantage.
      </p>

      <hr className="rh-divider" />

      <div style={{ display: "flex", flexDirection: "column", gap: "52px" }}>
        {phases.map((phase) => (
          <div key={phase.phase}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "20px" }}>
              <span style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                fontSize: "10px", color: "#C8A951",
                letterSpacing: "0.12em", minWidth: "24px",
              }}>
                {phase.phase}
              </span>
              <h2 style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "26px", fontWeight: "600", color: "#E8E4D8", margin: 0,
              }}>
                {phase.title}
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {phase.items.map((item, i) => (
                <div key={i} style={{
                  padding: "16px 18px",
                  background: "#0F0F0D",
                  border: "1px solid #1E1C16",
                  borderRadius: "3px",
                }}>
                  <div style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "15px", fontWeight: "600",
                    color: "#C8C4B8", marginBottom: "5px",
                  }}>
                    {item.label}
                  </div>
                  <div style={{
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    fontSize: "12px", color: "#4A4840", lineHeight: "1.6",
                  }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}