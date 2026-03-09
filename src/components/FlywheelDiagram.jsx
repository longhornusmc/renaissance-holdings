export default function FlywheelDiagram({ count = 3, activeNode = null }) {
  const cx = 200, cy = 200, r = 132, rx = 48, ry = 24;

  const nodes = [
    { angle: 0, label: "ACQUIRE", sub: "Source & Curate" },
    { angle: 60, label: "INTEGRATE", sub: "Day-One Playbook" },
    { angle: 120, label: "OPTIMIZE", sub: "Operational Gains" },
    { angle: 180, label: "INTEL", sub: "Cross-Portfolio Insights" },
    { angle: 240, label: "COMPOUND", sub: "Strategy Momentum" },
    { angle: 300, label: "EXPAND", sub: "New Markets" },
  ];

  const getPos = (angleDeg) => {
    const rad = (angleDeg - 90) * Math.PI / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  };

  return (
    <svg viewBox="0 0 400 400" style={{ width: "100%", maxWidth: "360px", display: "block", margin: "0 auto" }}>
      {/* Orbit ring */}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#1E1C16" strokeWidth="1" strokeDasharray="3 6" />

      {/* Spoke lines */}
      {nodes.map((node, i) => {
        const p1 = getPos(node.angle);
        const p2 = getPos(nodes[(i + 1) % nodes.length].angle);
        return (
          <line
            key={`line-${i}`}
            x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y}
            stroke="#181610" strokeWidth="1" strokeDasharray="2 5"
          />
        );
      })}

      {/* Center */}
      <circle cx={cx} cy={cy} r={40} fill="#0F0F0D" stroke="#1E1C16" strokeWidth="1" />
      <text x={cx} y={cy - 8} textAnchor="middle" fill="#C8A951"
        fontSize="28" fontWeight="700" fontFamily="Georgia, serif">{count}</text>
      <text x={cx} y={cy + 12} textAnchor="middle" fill="#4A4840"
        fontSize="6.5" letterSpacing="2" fontFamily="system-ui, sans-serif">BUSINESSES</text>

      {/* Nodes */}
      {nodes.map((node, i) => {
        const pos = getPos(node.angle);
        const isActive = activeNode === i;
        return (
          <g key={`node-${i}`}>
            <ellipse
              cx={pos.x} cy={pos.y} rx={rx} ry={ry}
              fill={isActive ? "rgba(200,169,81,0.1)" : "#0F0F0D"}
              stroke={isActive ? "#C8A951" : "#1E1C16"}
              strokeWidth={isActive ? "1.5" : "1"}
            />
            <text x={pos.x} y={pos.y - 5} textAnchor="middle"
              fill={isActive ? "#C8A951" : "#B8B4A8"}
              fontSize="6" fontWeight="600" letterSpacing="1"
              fontFamily="system-ui, sans-serif">
              {node.label}
            </text>
            <text x={pos.x} y={pos.y + 9} textAnchor="middle"
              fill="#4A4840" fontSize="5.5"
              fontFamily="system-ui, sans-serif">
              {node.sub}
            </text>
          </g>
        );
      })}
    </svg>
  );
}