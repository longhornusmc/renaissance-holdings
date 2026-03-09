import { useState } from "react";
import FlywheelDiagram from "../components/FlywheelDiagram";

const MAX = 20;

const fmtDollar = (n) => {
  if (n >= 1000000) return `$${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `$${Math.round(n / 1000)}K`;
  return `$${n}`;
};

export default function DealExplorer() {
  const [portfolio, setPortfolio] = useState(3);
  const [revenue, setRevenue] = useState(400000);
  const [sdeMargin, setSdeMargin] = useState(32);
  const [multiple, setMultiple] = useState(2.5);

  const sde = revenue * (sdeMargin / 100);
  const acquisitionPrice = sde * multiple;
  const exitValue = sde * 6.5;
  const moic = exitValue / acquisitionPrice;

  const connections = Math.round(portfolio * (portfolio - 1) / 2);
  const dataPoints = Math.round(portfolio * 1667 / 1000);
  const diligenceSaved = Math.round(portfolio * 1333 / 1000);
  const intelDividend = portfolio >= 5 ? ((portfolio - 4) * 0.1).toFixed(1) : "0.0";
  const svcsBiz = Math.round((22000 + portfolio * 3333) / 1000);

  const portfolioMetrics = [
    { label: "CONNECTIONS", value: connections, gold: false },
    { label: "DATA PTS", value: `${dataPoints}K`, gold: true },
    { label: "DILIGENCE SAVED", value: `$${diligenceSaved}K`, gold: true },
    { label: "INTEL DIVIDEND", value: `+$${intelDividend}M`, gold: true },
    { label: "SVCS/BIZ", value: `$${svcsBiz}K`, gold: false },
  ];

  const dealSummary = [
    { label: "SDE", value: fmtDollar(sde) },
    { label: "Acquisition Price", value: fmtDollar(acquisitionPrice) },
    { label: "Target Exit Value", value: fmtDollar(exitValue) },
    { label: "Est. MOIC", value: `${moic.toFixed(1)}x` },
  ];

  const sliders = [
    { label: "Annual Revenue", value: revenue, min: 100000, max: 2000000, step: 25000, set: setRevenue, fmt: (v) => `$${Math.round(v / 1000)}K` },
    { label: "SDE Margin", value: sdeMargin, min: 10, max: 50, step: 1, set: setSdeMargin, fmt: (v) => `${v}%` },
    { label: "Acquisition Multiple", value: multiple, min: 1.5, max: 4, step: 0.25, set: setMultiple, fmt: (v) => `${v}x` },
  ];

  return (
    <div className="rh-page">
      <div className="rh-label">Renaissance Holdings · 08</div>
      <h1 className="rh-h1">Deal Explorer</h1>
      <p className="rh-subtitle">
        Model a deal. Simulate the portfolio. See the flywheel in motion.
      </p>

      {/* Portfolio Simulator */}
      <div style={{
        fontFamily: "system-ui, -apple-system, sans-serif",
        fontSize: "10px", letterSpacing: "0.2em",
        color: "#4A4840", textTransform: "uppercase", marginBottom: "14px",
      }}>
        Portfolio Simulator
      </div>

      <div style={{ background: "#0F0F0D", border: "1px solid #1E1C16", borderRadius: "3px", padding: "24px", marginBottom: "10px" }}>
        <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "9px", letterSpacing: "0.22em", color: "#4A4840", textTransform: "uppercase", marginBottom: "14px" }}>
          Portfolio
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "26px" }}>
          <input
            type="range" min="1" max={MAX} value={portfolio}
            onChange={(e) => setPortfolio(Number(e.target.value))}
          />
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontFamily: "Georgia, serif", fontSize: "24px", fontWeight: "700", color: "#E8E4D8", whiteSpace: "nowrap" }}>
              {portfolio}
            </span>
            <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "12px", color: "#4A4840" }}>/ {MAX}</span>
          </div>
          <button
            onClick={() => setPortfolio(Math.min(MAX, portfolio + 1))}
            style={{
              background: "transparent", border: "1px solid #C8A951",
              color: "#C8A951", padding: "6px 14px", borderRadius: "2px",
              cursor: "pointer", fontFamily: "system-ui, sans-serif",
              fontSize: "9px", letterSpacing: "0.14em", textTransform: "uppercase",
              whiteSpace: "nowrap", transition: "background 0.2s",
            }}
            onMouseOver={(e) => e.target.style.background = "rgba(200,169,81,0.1)"}
            onMouseOut={(e) => e.target.style.background = "transparent"}
          >
            Simulate
          </button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px" }}>
          {portfolioMetrics.map((m) => (
            <div key={m.label}>
              <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "9px", letterSpacing: "0.18em", color: "#4A4840", textTransform: "uppercase", marginBottom: "4px" }}>
                {m.label}
              </div>
              <div style={{ fontFamily: "Georgia, serif", fontSize: "21px", fontWeight: "600", color: m.gold ? "#C8A951" : "#E8E4D8" }}>
                {m.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Flywheel */}
      <div style={{ background: "#0F0F0D", border: "1px solid #1E1C16", borderRadius: "3px", padding: "28px 20px", marginBottom: "10px" }}>
        <FlywheelDiagram count={portfolio} />
      </div>

      <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "12px", color: "#4A4840", textAlign: "center", marginBottom: "52px", padding: "12px 0" }}>
        Hover a flywheel stage to see how it improves with portfolio scale
      </p>

      <hr className="rh-divider" />

      {/* Deal Calculator */}
      <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", color: "#4A4840", textTransform: "uppercase", marginBottom: "18px" }}>
        Deal Calculator
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
        {sliders.map((field) => (
          <div key={field.label} style={{ background: "#0F0F0D", border: "1px solid #1E1C16", borderRadius: "3px", padding: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "14px" }}>
              <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "9px", letterSpacing: "0.2em", color: "#4A4840", textTransform: "uppercase" }}>
                {field.label}
              </div>
              <div style={{ fontFamily: "Georgia, serif", fontSize: "22px", fontWeight: "600", color: "#C8A951" }}>
                {field.fmt(field.value)}
              </div>
            </div>
            <input
              type="range"
              min={field.min} max={field.max} step={field.step} value={field.value}
              onChange={(e) => field.set(Number(e.target.value))}
            />
          </div>
        ))}
      </div>

      {/* Deal Summary */}
      <div style={{ background: "rgba(200,169,81,0.04)", border: "1px solid rgba(200,169,81,0.14)", borderRadius: "3px", padding: "24px" }}>
        <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "9px", letterSpacing: "0.22em", color: "#4A4840", textTransform: "uppercase", marginBottom: "20px" }}>
          Deal Summary
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          {dealSummary.map((item) => (
            <div key={item.label}>
              <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "9px", letterSpacing: "0.18em", color: "#4A4840", textTransform: "uppercase", marginBottom: "6px" }}>
                {item.label}
              </div>
              <div style={{ fontFamily: "Georgia, serif", fontSize: "28px", fontWeight: "700", color: "#C8A951" }}>
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}