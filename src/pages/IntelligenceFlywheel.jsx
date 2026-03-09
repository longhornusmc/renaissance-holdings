import { useState } from "react";
import FlywheelDiagram from "../components/FlywheelDiagram";

const stages = [
  {
    label: "ACQUIRE",
    description: "Each acquisition is informed by every prior deal. We know what P&Ls to trust, what sellers are hiding, what equipment ages poorly. The second acquisition in a category is faster and cheaper than the first.",
  },
  {
    label: "INTEGRATE",
    description: "Day-one playbooks built from prior integrations. Software onboarding, banking transitions, insurance transfers — all templated. What took 90 days in year one takes 30 days by year three.",
  },
  {
    label: "OPTIMIZE",
    description: "Route density, scheduling efficiency, technician utilization. The scheduling logic that works for chimney sweeps applies directly to septic pumping. Operational insights are not siloed — they transfer.",
  },
  {
    label: "INTEL",
    description: "Cross-portfolio data creates a proprietary benchmark layer. We know what a well-run $400K fire extinguisher business looks like. We know what margins are possible. No external benchmarks can touch this.",
  },
  {
    label: "COMPOUND",
    description: "Intelligence compounds. Each acquisition adds data. More data produces better decisions. Better decisions produce higher margins. Higher margins fund the next acquisition at a lower effective cost.",
  },
  {
    label: "EXPAND",
    description: "The flywheel creates the conditions for geographic expansion and adjacency moves. A portfolio of chimney sweeps can absorb a dryer vent business in the same market with near-zero incremental overhead.",
  },
];

export default function IntelligenceFlywheel() {
  const [activeStage, setActiveStage] = useState(null);

  return (
    <div className="rh-page">
      <div className="rh-label">Renaissance Holdings · 03</div>
      <h1 className="rh-h1">Intelligence Flywheel</h1>
      <p className="rh-subtitle">
        The competitive edge is not capital. The edge is information.
      </p>

      <p className="rh-body">
        These markets are informationally opaque from the outside. Financial data is spotty. Comparable
        transactions are rare. Industry benchmarks barely exist. But once an operator is inside a market —
        once the P&Ls have been reviewed, the routes run, the technicians hired — the operational patterns
        become visible.
      </p>

      <p className="rh-body">
        And they transfer. The scheduling optimization that works for chimney sweeps works for party rental
        delivery. The route density math from septic pumping applies to document shredding. The regulatory
        compliance engine built for fire extinguisher inspection scales to backflow testing.
      </p>

      <p className="rh-body">
        Each acquisition adds data to the intelligence layer. More data produces better operational decisions.
        Better operations produce higher margins. Higher margins fund the next acquisition at a lower
        effective cost.
      </p>

      <div className="rh-callout">
        <p className="rh-callout-text">That's the flywheel. It compounds.</p>
      </div>

      {/* Flywheel */}
      <div style={{
        background: "#0F0F0D",
        border: "1px solid #1E1C16",
        borderRadius: "3px",
        padding: "32px 20px",
        marginBottom: "12px",
      }}>
        <FlywheelDiagram count={3} activeNode={activeStage} />
      </div>

      {/* Stage cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "48px" }}>
        {stages.map((stage, i) => (
          <div
            key={i}
            onClick={() => setActiveStage(activeStage === i ? null : i)}
            style={{
              padding: "16px 20px",
              background: activeStage === i ? "rgba(200,169,81,0.05)" : "#0F0F0D",
              border: `1px solid ${activeStage === i ? "rgba(200,169,81,0.22)" : "#1E1C16"}`,
              borderRadius: "3px",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            <div style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              fontSize: "10px", letterSpacing: "0.2em",
              color: activeStage === i ? "#C8A951" : "#4A4840",
              textTransform: "uppercase",
              marginBottom: activeStage === i ? "10px" : 0,
            }}>
              {stage.label}
            </div>
            {activeStage === i && (
              <p style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "16px", lineHeight: "1.75", color: "#ACA8A0", margin: 0,
              }}>
                {stage.description}
              </p>
            )}
          </div>
        ))}
      </div>

      <p style={{
        fontFamily: "system-ui, -apple-system, sans-serif",
        fontSize: "12px", color: "#4A4840", textAlign: "center",
      }}>
        Tap a stage above to explore how it improves with portfolio scale
      </p>
    </div>
  );
}