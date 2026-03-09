import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const assumptions = [
  { label: "Avg. Acquisition Price", value: "$350K", detail: "2.5x $140K SDE" },
  { label: "Avg. Revenue / Business", value: "$400K", detail: "Owner-operated service business" },
  { label: "Avg. SDE Margin", value: "35%", detail: "$140K per business" },
  { label: "Shared Services Savings", value: "8–12%", detail: "Per business, post-integration" },
  { label: "Target Portfolio Size", value: "20 biz", detail: "5-year horizon" },
  { label: "Exit Multiple", value: "5–8x", detail: "Platform premium vs. 2–3x entry" },
];

const portfolioData = [
  { year: "Yr 1", value: 980 },
  { year: "Yr 2", value: 3675 },
  { year: "Yr 3", value: 9240 },
  { year: "Yr 4", value: 16905 },
  { year: "Yr 5", value: 26880 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: "#0F0F0D", border: "1px solid #2A2820",
        padding: "12px 16px", borderRadius: "3px",
      }}>
        <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", color: "#4A4840", marginBottom: "6px" }}>{label}</div>
        <div style={{ fontFamily: "Georgia, serif", fontSize: "18px", color: "#C8A951" }}>
          ${payload[0].value.toLocaleString()}K
        </div>
      </div>
    );
  }
  return null;
};

export default function FinancialModel() {
  return (
    <div className="rh-page">
      <div className="rh-label">Renaissance Holdings · 06</div>
      <h1 className="rh-h1">Financial Model</h1>
      <p className="rh-subtitle">
        Conservative assumptions. Asymmetric returns.
      </p>

      <p className="rh-body">
        The financial model is built on observable market data, not projections. The entry multiple (2–3x SDE)
        is standard for small service businesses sold through brokers. The exit multiple (5–8x) is standard
        for assembled platforms sold to private equity. The gap between those two numbers is where all
        the value lives.
      </p>

      <hr className="rh-divider" />

      <h2 style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "22px", fontWeight: "600", color: "#E8E4D8", marginBottom: "20px" }}>
        Key Assumptions
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "52px" }}>
        {assumptions.map((a, i) => (
          <div key={i} style={{
            padding: "18px", background: "#0F0F0D",
            border: "1px solid #1E1C16", borderRadius: "3px",
          }}>
            <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", fontSize: "9px", color: "#4A4840", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "8px" }}>
              {a.label}
            </div>
            <div style={{ fontFamily: "Georgia, serif", fontSize: "26px", fontWeight: "700", color: "#C8A951", marginBottom: "4px" }}>
              {a.value}
            </div>
            <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", fontSize: "11px", color: "#4A4840" }}>
              {a.detail}
            </div>
          </div>
        ))}
      </div>

      <hr className="rh-divider" />

      <h2 style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "22px", fontWeight: "600", color: "#E8E4D8", marginBottom: "6px" }}>
        Portfolio Value Projection
      </h2>
      <p style={{ fontFamily: "Georgia, serif", fontSize: "14px", color: "#4A4840", marginBottom: "24px" }}>
        5-year horizon, 20 businesses at exit, midpoint 6.5x multiple
      </p>

      <div style={{ height: "240px", marginBottom: "52px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={portfolioData} margin={{ top: 4, right: 4, bottom: 4, left: 4 }}>
            <CartesianGrid strokeDasharray="2 6" stroke="#181610" vertical={false} />
            <XAxis dataKey="year" tick={{ fill: "#4A4840", fontSize: 11, fontFamily: "system-ui" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "#4A4840", fontSize: 11, fontFamily: "system-ui" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}K`} width={50} />
            <Tooltip content={<CustomTooltip />} />
            <Line type="monotone" dataKey="value" stroke="#C8A951" strokeWidth={2} dot={{ fill: "#C8A951", r: 4, strokeWidth: 0 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="rh-callout">
        <p className="rh-callout-text">
          Buy at 2–3x. Operate and compound. Sell at 5–8x. The multiple expansion alone returns 2–4x capital — before accounting for earnings growth, debt paydown, or shared services savings.
        </p>
      </div>
    </div>
  );
}