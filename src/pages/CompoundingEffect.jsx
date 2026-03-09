import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const marginData = [
  { year: "Yr 0", margin: 28 },
  { year: "Yr 1", margin: 31 },
  { year: "Yr 2", margin: 34 },
  { year: "Yr 3", margin: 37 },
  { year: "Yr 4", margin: 40 },
  { year: "Yr 5", margin: 44 },
];

const effects = [
  {
    title: "Acquisition Costs Fall",
    body: "As we accumulate data on what deals are worth, we stop overpaying. Our diligence gets faster and cheaper. By deal ten in a vertical, we know what to look for in a single afternoon of document review.",
  },
  {
    title: "Margins Expand",
    body: "Shared services, route optimization, pricing intelligence, and technician utilization benchmarks all push margins higher. The third business in a market benefits from what the first two learned.",
  },
  {
    title: "Deal Flow Improves",
    body: "Owners talk to each other. A reputation for fair, fast deals — and for keeping teams employed — generates inbound interest. Our best source of deals, by year three, will be referrals from sellers we've already closed.",
  },
  {
    title: "Exit Multiple Expands",
    body: "A portfolio of 20 well-run, data-rich service businesses is worth more than the sum of its parts. PE firms and strategic acquirers pay platform premiums. The intelligence layer itself has intrinsic value.",
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: "#0F0F0D", border: "1px solid #2A2820", padding: "12px 16px", borderRadius: "3px" }}>
        <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", color: "#4A4840", marginBottom: "6px" }}>{label}</div>
        <div style={{ fontFamily: "Georgia, serif", fontSize: "18px", color: "#C8A951" }}>
          {payload[0].value}% avg. margin
        </div>
      </div>
    );
  }
  return null;
};

export default function CompoundingEffect() {
  return (
    <div className="rh-page">
      <div className="rh-label">Renaissance Holdings · 07</div>
      <h1 className="rh-h1">The Compounding Effect</h1>
      <p className="rh-subtitle">
        Every acquisition makes the next one better. That's not a metaphor. It's a mechanism.
      </p>

      <p className="rh-body">
        Compounding is usually a financial concept. Money earns returns; returns earn returns. But compounding
        applies to information, to relationships, to reputation, to operational knowledge. The intelligence
        flywheel is a compounding machine — not just financially, but structurally.
      </p>

      <p className="rh-body">
        Each business we acquire adds to a shared knowledge base. Each integration makes the next integration
        faster. Each market we enter opens windows into adjacent markets. The rate of improvement accelerates,
        not plateaus.
      </p>

      <hr className="rh-divider" />

      <h2 style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "22px", fontWeight: "600", color: "#E8E4D8", marginBottom: "6px" }}>
        Average Portfolio Margin Over Time
      </h2>
      <p style={{ fontFamily: "Georgia, serif", fontSize: "14px", color: "#4A4840", marginBottom: "24px" }}>
        SDE margin improves as intelligence compounds across acquisitions
      </p>

      <div style={{ height: "220px", marginBottom: "52px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={marginData} margin={{ top: 4, right: 4, bottom: 4, left: 4 }}>
            <defs>
              <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#C8A951" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#C8A951" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="2 6" stroke="#181610" vertical={false} />
            <XAxis dataKey="year" tick={{ fill: "#4A4840", fontSize: 11, fontFamily: "system-ui" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "#4A4840", fontSize: 11, fontFamily: "system-ui" }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} width={40} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="margin" stroke="#C8A951" fill="url(#goldGrad)" strokeWidth={2} dot={{ fill: "#C8A951", r: 4, strokeWidth: 0 }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <hr className="rh-divider" />

      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        {effects.map((effect, i) => (
          <div key={i}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "14px", marginBottom: "10px" }}>
              <span style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                fontSize: "10px", color: "#C8A951",
                letterSpacing: "0.12em", minWidth: "22px",
              }}>
                0{i + 1}
              </span>
              <h3 style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "21px", fontWeight: "600", color: "#E8E4D8", margin: 0,
              }}>
                {effect.title}
              </h3>
            </div>
            <p className="rh-body" style={{ marginBottom: 0, paddingLeft: "36px" }}>{effect.body}</p>
          </div>
        ))}
      </div>

      <div className="rh-callout" style={{ marginTop: "52px" }}>
        <p className="rh-callout-text">
          The mess is the moat. And the intelligence flywheel is what turns that moat into compounding returns.
        </p>
      </div>
    </div>
  );
}