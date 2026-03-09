import { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { X, Menu } from "lucide-react";

const navItems = [
  { num: "00", label: "The Thesis", page: "Home" },
  { num: "01", label: "Holding Company 101", page: "HoldingCompany101" },
  { num: "02", label: "Market Universe", page: "MarketUniverse" },
  { num: "03", label: "Intelligence Flywheel", page: "IntelligenceFlywheel" },
  { num: "04", label: "Acquisition Playbook", page: "AcquisitionPlaybook" },
  { num: "05", label: "First 90 Days", page: "First90Days" },
  { num: "06", label: "Financial Model", page: "FinancialModel" },
  { num: "07", label: "The Compounding Effect", page: "CompoundingEffect" },
  { num: "08", label: "Deal Explorer", page: "DealExplorer" },
];

export default function Layout({ children, currentPageName }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ background: "#0A0A08", minHeight: "100vh", color: "#E8E4D8" }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        body { background: #0A0A08; margin: 0; }

        .rh-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,0.82);
          z-index: 40; opacity: 0; pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .rh-overlay.open { opacity: 1; pointer-events: all; }

        .rh-sidebar {
          position: fixed; left: 0; top: 0; bottom: 0; width: 268px;
          background: #0C0C0A; border-right: 1px solid #1E1C16;
          z-index: 50; transform: translateX(-100%);
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
          display: flex; flex-direction: column; overflow-y: auto;
        }
        .rh-sidebar.open { transform: translateX(0); }

        .rh-menubtn {
          position: fixed; top: 18px; left: 18px; z-index: 30;
          width: 38px; height: 38px;
          background: #121210; border: 1px solid #242018;
          border-radius: 3px; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: border-color 0.2s;
        }
        .rh-menubtn:hover { border-color: #C8A951; }

        .rh-navlink {
          display: flex; align-items: center; gap: 14px;
          padding: 10px 22px; text-decoration: none;
          border-left: 2px solid transparent;
          transition: all 0.18s;
        }
        .rh-navlink:hover { background: rgba(200,169,81,0.06); }
        .rh-navlink.active {
          background: rgba(200,169,81,0.09);
          border-left-color: #C8A951;
        }

        .rh-page {
          padding: 70px 24px 96px;
          max-width: 660px;
          margin: 0 auto;
        }
        @media (min-width: 600px) {
          .rh-page { padding: 80px 48px 96px; }
        }
        @media (min-width: 1024px) {
          .rh-page { padding: 80px 56px 96px; margin: 0 0 0 140px; }
        }

        .rh-label {
          font-family: system-ui, -apple-system, sans-serif;
          font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase;
          color: #4A4840; margin-bottom: 10px;
        }
        .rh-h1 {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(38px, 9vw, 58px);
          font-weight: 700; line-height: 1.04;
          color: #E8E4D8; margin-bottom: 20px;
        }
        .rh-subtitle {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(16px, 2.8vw, 19px);
          color: #5A5850; line-height: 1.55;
          font-style: italic; margin-bottom: 48px;
        }
        .rh-body {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(16px, 2.5vw, 18px);
          line-height: 1.88; color: #ACA8A0;
          margin-bottom: 28px;
        }
        .rh-gold { color: #C8A951; }
        .rh-bold { color: #DDD8CC; font-weight: 600; }
        .rh-italic { font-style: italic; color: #CCC8BC; }

        .rh-callout {
          padding: 24px 28px;
          background: rgba(200,169,81,0.04);
          border: 1px solid rgba(200,169,81,0.16);
          border-radius: 3px;
          margin: 44px 0;
        }
        .rh-callout-text {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(18px, 3vw, 22px);
          color: #C8A951; font-style: italic; line-height: 1.5; margin: 0;
        }
        .rh-divider { border: none; border-top: 1px solid #1A1810; margin: 48px 0; }

        input[type="range"] {
          -webkit-appearance: none; appearance: none;
          width: 100%; height: 2px;
          background: #252018; border-radius: 2px; outline: none; cursor: pointer;
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 18px; height: 18px; border-radius: 50%;
          background: #C8A951; cursor: pointer;
          box-shadow: 0 0 0 4px rgba(200,169,81,0.18);
        }
        input[type="range"]::-moz-range-thumb {
          width: 18px; height: 18px; border-radius: 50%;
          background: #C8A951; cursor: pointer; border: none;
        }
      `}</style>

      {/* Hamburger */}
      <button className="rh-menubtn" onClick={() => setOpen(true)}>
        <Menu size={15} color="#C8A951" />
      </button>

      {/* Overlay */}
      <div className={`rh-overlay ${open ? "open" : ""}`} onClick={() => setOpen(false)} />

      {/* Sidebar */}
      <div className={`rh-sidebar ${open ? "open" : ""}`}>
        <div style={{ padding: "26px 22px 20px", borderBottom: "1px solid #1E1C16" }}>
          <button
            onClick={() => setOpen(false)}
            style={{ float: "right", background: "none", border: "none", cursor: "pointer", padding: "2px" }}
          >
            <X size={14} color="#4A4840" />
          </button>
          <div style={{ marginTop: "2px" }}>
            <div style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              fontSize: "17px", fontWeight: "700",
              color: "#C8A951", letterSpacing: "0.16em", textTransform: "uppercase",
            }}>
              Renaissance
            </div>
            <div style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              fontSize: "9px", letterSpacing: "0.38em",
              color: "#4A4840", textTransform: "uppercase", marginTop: "5px",
            }}>
              Holdings
            </div>
          </div>
        </div>

        <nav style={{ flex: 1, padding: "10px 0" }}>
          {navItems.map((item) => {
            const isActive = currentPageName === item.page;
            return (
              <Link
                key={item.num}
                to={createPageUrl(item.page)}
                onClick={() => setOpen(false)}
                className={`rh-navlink ${isActive ? "active" : ""}`}
              >
                <span style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  fontSize: "10px", color: "#4A4840",
                  letterSpacing: "0.08em", minWidth: "22px",
                }}>
                  {item.num}
                </span>
                <span style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  fontSize: "13px",
                  color: isActive ? "#C8A951" : "#9A9890",
                }}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      {children}
    </div>
  );
}