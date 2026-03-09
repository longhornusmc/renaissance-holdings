const timeline = [
  {
    period: "Day 1",
    title: "Control & Communication",
    items: [
      "Bank account transitions completed",
      "Payroll verified and processed on existing schedule",
      "Insurance binders transferred to holding company",
      "All-hands meeting: introductions and continuity message",
      "Seller departs or begins agreed transition period",
    ],
  },
  {
    period: "Week 1",
    title: "Operations Assessment",
    items: [
      "Shadow key technicians on service calls",
      "Document existing workflows and processes in full",
      "Identify highest-value customers and key relationships",
      "Assess equipment condition and fleet age",
      "Review open quotes, pending jobs, and backlog",
    ],
  },
  {
    period: "Month 1",
    title: "Systems Integration",
    items: [
      "Migrate to shared accounting platform (QuickBooks)",
      "Implement field service management software",
      "Set up shared HR and payroll system",
      "Connect to holding company insurance umbrella",
      "Begin route optimization analysis",
    ],
  },
  {
    period: "Month 2",
    title: "Performance Visibility",
    items: [
      "First monthly P&L under holding company reporting structure",
      "Technician utilization tracked and benchmarked to portfolio",
      "Pricing audit: compare rates to portfolio-wide benchmarks",
      "Customer churn analysis completed and reviewed",
      "Top 20% of customers by profitability identified",
    ],
  },
  {
    period: "Month 3",
    title: "Optimization Begins",
    items: [
      "First pricing adjustment (if warranted) communicated to customers",
      "Shared services savings realized in financial statements",
      "Cross-portfolio intelligence applied to scheduling and routing",
      "Expansion opportunities scoped in adjacent market or geography",
      "Acquisition complete — business operating on new, improved baseline",
    ],
  },
];

export default function First90Days() {
  return (
    <div className="rh-page">
      <div className="rh-label">Renaissance Holdings · 05</div>
      <h1 className="rh-h1">First 90 Days</h1>
      <p className="rh-subtitle">
        From close to cruising altitude. The integration playbook that turns an acquisition into an asset.
      </p>

      <p className="rh-body">
        The 90-day window is where acquisitions succeed or fail. The seller is gone. The team is uncertain.
        The customers are watching. How we handle this period determines whether we've bought a business or
        bought a problem.
      </p>

      <p className="rh-body">
        Our playbook prioritizes stability over transformation in the first 30 days. No dramatic changes.
        No personnel upheaval. No customer-facing disruption. The goal is to earn trust — from the team,
        from the customers, from the vendors — and then begin the work of making the business better.
      </p>

      <hr className="rh-divider" />

      <div style={{ display: "flex", flexDirection: "column" }}>
        {timeline.map((phase, i) => (
          <div key={i} style={{ display: "flex", gap: "20px", paddingBottom: "36px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: "18px" }}>
              <div style={{
                width: "10px", height: "10px", borderRadius: "50%",
                background: "#C8A951", flexShrink: 0, marginTop: "7px",
              }} />
              {i < timeline.length - 1 && (
                <div style={{ width: "1px", flex: 1, background: "#1E1C16", marginTop: "8px" }} />
              )}
            </div>

            <div style={{ flex: 1 }}>
              <div style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                fontSize: "10px", color: "#C8A951",
                letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "4px",
              }}>
                {phase.period}
              </div>
              <h3 style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "21px", fontWeight: "600",
                color: "#E8E4D8", marginBottom: "16px", margin: "0 0 16px",
              }}>
                {phase.title}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {phase.items.map((item, j) => (
                  <div key={j} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <div style={{
                      width: "4px", height: "4px", borderRadius: "50%",
                      background: "#4A4840", marginTop: "9px", flexShrink: 0,
                    }} />
                    <p style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontSize: "15px", color: "#ACA8A0", lineHeight: "1.65", margin: 0,
                    }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}