import MetricCard from "../components/MetricCard";

export default function Home() {
  return (
    <div className="rh-page">
      <div className="rh-label">Renaissance Holdings · 00</div>
      <h1 className="rh-h1">The Thesis</h1>
      <p className="rh-subtitle">
        An intelligence-driven holding company for the businesses nobody's paying attention to.
      </p>

      <p className="rh-body">
        There is a class of business in America that is{" "}
        <span className="rh-bold">functionally invisible to institutional capital.</span>{" "}
        They are too small for private equity. Too fragmented for efficient markets. Too unglamorous for MBA
        case studies. They exist in the space between "side hustle" and "real company" — and collectively,
        they represent one of the most overlooked investment opportunities in the economy.
      </p>

      <p className="rh-body">
        These are the businesses that{" "}
        <em className="rh-italic">actually have to do something.</em> Sweep a chimney. Pump a septic tank.
        Deliver a bounce house. Inspect a fire extinguisher. Test a backflow preventer. They require physical
        presence, specialized knowledge, and often a tolerance for work that most people would rather not think
        about.{" "}
        <span className="rh-bold">They cannot be disrupted by an app. They cannot be offshored.</span>{" "}
        Many of them are mandated by law.
      </p>

      <p className="rh-body">
        And they are overwhelmingly owned by people{" "}
        <span className="rh-bold">approaching retirement age with no succession plan.</span>
      </p>

      <p className="rh-body">
        The thesis is this: build a holding company that systematically identifies, acquires, and improves
        these businesses — and in doing so, constructs an{" "}
        <em className="rh-gold">intelligence flywheel</em> that makes each subsequent acquisition cheaper,
        faster, and more valuable than the last.
      </p>

      <p className="rh-body">
        The competitive edge is not capital. Anyone can write a check.{" "}
        <span className="rh-bold">The edge is information.</span> These markets are informationally opaque
        from the outside. Financial data is spotty. Comparable transactions are rare. Industry benchmarks
        barely exist. But once an operator is inside a market — once the P&Ls have been reviewed, the routes
        run, the technicians hired — the operational patterns become visible. And they transfer.
      </p>

      <div className="rh-callout">
        <p className="rh-callout-text">That's the flywheel. It compounds.</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "52px" }}>
        <MetricCard label="Target Acquisition Size" value="<$500K" sub="2-3x Seller's Discretionary Earnings" />
        <MetricCard label="Portfolio Valuation Multiple" value="5-8x" sub="Platform premium on assembled portfolio" />
        <MetricCard label="Target Markets Identified" value="18" sub="Across 5 categories" />
      </div>

      <p className="rh-body">
        The holding company structure provides the legal and financial framework: liability isolation between
        subsidiaries, tax-efficient capital recycling, shared services that reduce overhead per business, and
        exit optionality that ranges from individual business sales to a whole-portfolio transaction with a PE
        firm or strategic acquirer.
      </p>

      <p className="rh-body">
        But the structure is not the insight. The insight is that these markets — precisely because they are
        messy, opaque, and unsexy — reward patient operators who build genuine expertise over time.{" "}
        <span className="rh-gold" style={{ fontWeight: "600" }}>The mess is the moat.</span> And the
        intelligence flywheel is what turns that moat into compounding returns.
      </p>
    </div>
  );
}