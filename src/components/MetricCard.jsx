export default function MetricCard({ label, value, sub }) {
  return (
    <div style={{
      padding: "22px 24px",
      background: "#0F0F0D",
      border: "1px solid #1E1C16",
      borderRadius: "3px",
    }}>
      <div style={{
        fontFamily: "system-ui, -apple-system, sans-serif",
        fontSize: "9px", letterSpacing: "0.22em",
        color: "#4A4840", textTransform: "uppercase", marginBottom: "10px",
      }}>
        {label}
      </div>
      <div style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: "40px", fontWeight: "700",
        color: "#C8A951", marginBottom: "6px", lineHeight: "1",
      }}>
        {value}
      </div>
      <div style={{
        fontFamily: "system-ui, -apple-system, sans-serif",
        fontSize: "12px", color: "#4A4840",
      }}>
        {sub}
      </div>
    </div>
  );
}