const categories = [
  {
    name: "Safety & Compliance",
    count: 5,
    markets: [
      { name: "Fire Extinguisher Inspection & Service", why: "Legally mandated annually for all commercial buildings. Recurring contracts, minimal customer churn." },
      { name: "Backflow Preventer Testing", why: "Municipal requirement. Licensed technicians create a natural barrier to new competition." },
      { name: "Commercial Hood & Duct Cleaning", why: "Fire code mandate for restaurants. Quarterly frequency, high switching costs." },
      { name: "Elevator & Lift Inspection", why: "State-regulated with strict intervals. Specialized knowledge creates deep moats." },
      { name: "Emergency Exit & Lighting Compliance", why: "OSHA requirement. Predictable recurring revenue, exclusively B2B." },
    ],
  },
  {
    name: "Environmental Services",
    count: 4,
    markets: [
      { name: "Septic Tank Pumping & Service", why: "Non-discretionary. Regulated pumping intervals in rural and suburban markets." },
      { name: "Grease Trap Cleaning", why: "Health code mandate. Restaurant-centric with high switching costs." },
      { name: "Drain & Sewer Jetting", why: "Emergency and scheduled. Commercial and residential blend with high margins." },
      { name: "Portable Sanitation & Restroom Rental", why: "Event and construction-driven. Asset-light after initial fleet investment." },
    ],
  },
  {
    name: "Specialty Cleaning",
    count: 4,
    markets: [
      { name: "Chimney Sweep & Inspection", why: "Seasonal, safety-driven demand. Fragmented ownership and strong word-of-mouth." },
      { name: "Air Duct Cleaning", why: "Commercial and residential. Health-driven recurring demand with high upsell potential." },
      { name: "Dryer Vent Cleaning", why: "Fire prevention mandate. High volume, low ticket, natural add-on to adjacent services." },
      { name: "Pressure Washing (Commercial)", why: "Property management contracts. Recurring, geographically dense, scalable routes." },
    ],
  },
  {
    name: "Event & Rental",
    count: 2,
    markets: [
      { name: "Bounce House & Party Equipment Rental", why: "Seasonal peaks, high utilization windows. Local monopoly potential in suburban markets." },
      { name: "Tent & Event Staging Equipment", why: "Commercial event focus with recurring corporate clients. Asset-heavy moat deters entry." },
    ],
  },
  {
    name: "Specialty Trades",
    count: 3,
    markets: [
      { name: "Commercial Kitchen Equipment Repair", why: "Emergency-driven, restaurant dependency. Recurring service contracts with high urgency." },
      { name: "Document Shredding (Mobile)", why: "HIPAA compliance driver. Scheduled recurring pickups with strong B2B stickiness." },
      { name: "Locksmith Services (Commercial)", why: "Emergency and scheduled. Key accounts with property managers. 24/7 demand creates premium pricing." },
    ],
  },
];

export default function MarketUniverse() {
  return (
    <div className="rh-page">
      <div className="rh-label">Renaissance Holdings · 02</div>
      <h1 className="rh-h1">Market Universe</h1>
      <p className="rh-subtitle">
        18 target markets. 5 categories. One filter: cannot be disrupted, cannot be offshored, has no natural successor.
      </p>

      <p className="rh-body">
        We didn't pick these markets randomly. Each one was selected against the same criteria: legally
        mandated or deeply habitual demand, fragmented ownership, local service delivery, and a founder
        population approaching retirement with no succession plan in sight. These are not exciting businesses.
        That's the point.
      </p>

      <hr className="rh-divider" />

      <div style={{ display: "flex", flexDirection: "column", gap: "52px" }}>
        {categories.map((cat, ci) => (
          <div key={ci}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
              <h2 style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "21px", fontWeight: "600", color: "#E8E4D8", margin: 0,
              }}>
                {cat.name}
              </h2>
              <span style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                fontSize: "10px", color: "#C8A951",
                letterSpacing: "0.14em", textTransform: "uppercase",
              }}>
                {cat.count} markets
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {cat.markets.map((m, mi) => (
                <div key={mi} style={{
                  padding: "16px 18px",
                  background: "#0F0F0D",
                  border: "1px solid #1E1C16",
                  borderRadius: "3px",
                }}>
                  <div style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "15px", fontWeight: "600",
                    color: "#C8C4B8", marginBottom: "6px",
                  }}>
                    {m.name}
                  </div>
                  <div style={{
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    fontSize: "12px", color: "#4A4840", lineHeight: "1.55",
                  }}>
                    {m.why}
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