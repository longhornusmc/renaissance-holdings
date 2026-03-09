import { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", page: "Home" },
  { label: "Strategy", page: "Strategy" },
  { label: "Criteria", page: "InvestmentCriteria" },
  { label: "Our Model", page: "OurModel" },
  { label: "For Sellers", page: "ForSellers" },
  { label: "Team", page: "Team" },
  { label: "Contact", page: "Contact" },
];

export default function Layout({ children, currentPageName }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ background: "#FAFAF7", minHeight: "100vh", color: "#1C1916" }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        body { background: #FAFAF7; margin: 0; }
        a { text-decoration: none; color: inherit; }

        /* Nav */
        .rh-nav {
          position: sticky; top: 0; z-index: 100;
          background: #FAFAF7;
          border-bottom: 1px solid #EAE6E0;
          height: 64px; display: flex; align-items: center;
        }
        .rh-nav-inner {
          max-width: 1140px; margin: 0 auto; padding: 0 28px;
          width: 100%;
          display: flex; align-items: center; justify-content: space-between;
        }
        @media (min-width: 640px) { .rh-nav-inner { padding: 0 48px; } }

        .rh-logo {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 15px; font-weight: 600;
          color: #1C1916; letter-spacing: 0.02em;
          white-space: nowrap; line-height: 1;
        }
        .rh-logo-sub {
          font-family: system-ui, -apple-system, sans-serif;
          font-size: 8.5px; letter-spacing: 0.26em;
          text-transform: uppercase; color: #AEA9A2;
          font-weight: 400; margin-top: 4px; display: block;
        }

        .rh-nav-links {
          display: none; gap: 26px; align-items: center;
        }
        @media (min-width: 960px) { .rh-nav-links { display: flex; } }

        .rh-nav-link {
          font-family: system-ui, -apple-system, sans-serif;
          font-size: 13px; color: #7A7670;
          transition: color 0.15s; white-space: nowrap;
        }
        .rh-nav-link:hover { color: #1C1916; }
        .rh-nav-link.active { color: #1C1916; font-weight: 500; }

        .rh-hamburger {
          display: flex; align-items: center; justify-content: center;
          background: none; border: none; cursor: pointer;
          padding: 6px; color: #1C1916;
        }
        @media (min-width: 960px) { .rh-hamburger { display: none; } }

        .rh-overlay {
          position: fixed; inset: 0; background: rgba(28,25,22,0.48);
          z-index: 150; opacity: 0; pointer-events: none;
          transition: opacity 0.25s;
        }
        .rh-overlay.open { opacity: 1; pointer-events: all; }

        .rh-mobile-menu {
          position: fixed; top: 0; right: 0; bottom: 0; width: 270px;
          background: #FAFAF7; z-index: 200;
          transform: translateX(100%);
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
          border-left: 1px solid #E8E4DE;
        }
        .rh-mobile-menu.open { transform: translateX(0); }

        .rh-mobile-header {
          height: 64px; display: flex;
          align-items: center; justify-content: flex-end;
          padding: 0 20px; border-bottom: 1px solid #EAE6E0;
        }
        .rh-close-btn {
          background: none; border: none; cursor: pointer;
          padding: 6px; color: #7A7670;
        }
        .rh-mobile-link {
          display: block; padding: 14px 28px;
          font-family: system-ui, sans-serif;
          font-size: 14px; color: #4A4844;
          border-bottom: 1px solid #F0EDE8;
          transition: background 0.15s;
        }
        .rh-mobile-link:hover { background: #F4F1EC; color: #1C1916; }
        .rh-mobile-link.active { color: #1C1916; font-weight: 500; }

        /* Containers */
        .rh-container { max-width: 1140px; margin: 0 auto; padding: 0 28px; }
        @media (min-width: 640px) { .rh-container { padding: 0 48px; } }
        @media (min-width: 1140px) { .rh-container { padding: 0 72px; } }

        .rh-container-text { max-width: 740px; margin: 0 auto; padding: 0 28px; }
        @media (min-width: 640px) { .rh-container-text { padding: 0 48px; } }
        @media (min-width: 1140px) { .rh-container-text { padding: 0 72px; } }

        /* Sections */
        .rh-section { padding: 88px 0; }
        @media (max-width: 639px) { .rh-section { padding: 60px 0; } }
        .rh-section-alt { background: #F4F1EC; }
        .rh-section-dark { background: #1C1916; }

        /* Type */
        .rh-eyebrow {
          font-family: system-ui, -apple-system, sans-serif;
          font-size: 10.5px; letter-spacing: 0.24em;
          text-transform: uppercase; color: #AEA9A2;
          display: block; margin-bottom: 18px;
        }
        .rh-section-dark .rh-eyebrow { color: #5A5652; }

        .rh-h1 {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(38px, 5.5vw, 62px);
          font-weight: 400; line-height: 1.1;
          color: #1C1916; margin: 0 0 24px;
          letter-spacing: -0.015em;
        }
        .rh-section-dark .rh-h1 { color: #EAE6DE; }

        .rh-h2 {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(26px, 3.8vw, 40px);
          font-weight: 400; line-height: 1.15;
          color: #1C1916; margin: 0 0 20px;
          letter-spacing: -0.01em;
        }
        .rh-section-dark .rh-h2 { color: #EAE6DE; }

        .rh-h3 {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 19px; font-weight: 400;
          color: #1C1916; margin: 0 0 10px; line-height: 1.3;
        }
        .rh-section-dark .rh-h3 { color: #D8D4CC; }

        .rh-body {
          font-family: system-ui, -apple-system, sans-serif;
          font-size: 16px; line-height: 1.82;
          color: #72706C; margin: 0 0 20px;
        }
        .rh-body:last-child { margin-bottom: 0; }
        .rh-section-dark .rh-body { color: #7A7672; }

        .rh-body-lg {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(17px, 2.2vw, 21px);
          line-height: 1.68; color: #4A4844; margin: 0 0 32px;
        }
        .rh-section-dark .rh-body-lg { color: #8A8682; }

        .rh-caption {
          font-family: system-ui, sans-serif;
          font-size: 12px; color: #AEA9A2; line-height: 1.5;
        }

        .rh-note {
          font-family: system-ui, sans-serif;
          font-size: 13px; color: #AEA9A2;
          font-style: italic; line-height: 1.6;
        }

        /* Cards */
        .rh-card {
          padding: 28px 24px;
          border: 1px solid #E4E0D8;
          border-radius: 1px;
          background: #FAFAF7;
        }
        .rh-card-alt {
          padding: 28px 24px;
          border: 1px solid #E8E4DC;
          border-radius: 1px;
          background: #FAFAF7;
        }

        /* Divider */
        .rh-divider {
          border: none; border-top: 1px solid #E4E0D8; margin: 0;
        }
        .rh-section-dark .rh-divider { border-top-color: #2A2724; }

        /* Buttons */
        .rh-btn {
          display: inline-flex; align-items: center;
          background: #1C1916; color: #EAE6DE;
          border: 1px solid #1C1916;
          padding: 13px 26px;
          font-family: system-ui, sans-serif;
          font-size: 13px; letter-spacing: 0.03em;
          cursor: pointer; border-radius: 1px;
          transition: background 0.18s;
          text-decoration: none;
        }
        .rh-btn:hover { background: #2C2924; }

        .rh-btn-outline {
          display: inline-flex; align-items: center;
          background: transparent; color: #1C1916;
          border: 1px solid #C8C4BC;
          padding: 13px 26px;
          font-family: system-ui, sans-serif;
          font-size: 13px; letter-spacing: 0.03em;
          cursor: pointer; border-radius: 1px;
          transition: border-color 0.18s;
          text-decoration: none;
        }
        .rh-btn-outline:hover { border-color: #1C1916; }

        .rh-btn-ghost {
          display: inline-flex; align-items: center;
          background: transparent; color: #D8D4CC;
          border: 1px solid #3A3632;
          padding: 13px 26px;
          font-family: system-ui, sans-serif;
          font-size: 13px; letter-spacing: 0.03em;
          cursor: pointer; border-radius: 1px;
          transition: border-color 0.18s;
          text-decoration: none;
        }
        .rh-btn-ghost:hover { border-color: #5A5652; }

        /* Lists */
        .rh-list {
          list-style: none; padding: 0; margin: 0;
        }
        .rh-list li {
          padding: 14px 0;
          border-bottom: 1px solid #EAE6E0;
          font-family: Georgia, serif;
          font-size: 17px; color: #4A4844;
        }
        .rh-list li:first-child { border-top: 1px solid #EAE6E0; }

        /* Form */
        .rh-input {
          width: 100%; padding: 12px 14px;
          background: #fff; border: 1px solid #E4E0D8;
          border-radius: 1px;
          font-family: system-ui, sans-serif; font-size: 14px;
          color: #1C1916; transition: border-color 0.18s; outline: none;
        }
        .rh-input:focus { border-color: #9A9690; }
        .rh-form-label {
          display: block;
          font-family: system-ui, sans-serif;
          font-size: 10.5px; letter-spacing: 0.18em;
          text-transform: uppercase; color: #AEA9A2;
          margin-bottom: 8px;
        }

        /* Grids */
        .rh-grid-2 { display: grid; grid-template-columns: 1fr; gap: 16px; }
        @media (min-width: 640px) { .rh-grid-2 { grid-template-columns: 1fr 1fr; } }

        .rh-grid-3 { display: grid; grid-template-columns: 1fr; gap: 16px; }
        @media (min-width: 640px) { .rh-grid-3 { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 900px) { .rh-grid-3 { grid-template-columns: 1fr 1fr 1fr; } }

        .rh-grid-4 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        @media (min-width: 900px) { .rh-grid-4 { grid-template-columns: 1fr 1fr 1fr 1fr; } }

        /* Pillar */
        .rh-pillar {
          padding-top: 20px;
          border-top: 1px solid #E4E0D8;
        }
        .rh-section-dark .rh-pillar { border-top-color: #2A2724; }
        .rh-pillar-num {
          font-family: system-ui, sans-serif;
          font-size: 10px; color: #C8C4BC;
          letter-spacing: 0.1em; margin-bottom: 14px;
        }
        .rh-section-dark .rh-pillar-num { color: #4A4642; }
      `}</style>

      {/* Nav */}
      <nav className="rh-nav">
        <div className="rh-nav-inner">
          <Link to={createPageUrl("Home")} className="rh-logo">
            Renaissance Holdings
            <span className="rh-logo-sub">Permanent Capital · Essential Services</span>
          </Link>

          <div className="rh-nav-links">
            {navItems.map((item) => (
              <Link
                key={item.page}
                to={createPageUrl(item.page)}
                className={`rh-nav-link ${currentPageName === item.page ? "active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button className="rh-hamburger" onClick={() => setOpen(true)}>
            <Menu size={20} />
          </button>
        </div>
      </nav>

      <div className={`rh-overlay ${open ? "open" : ""}`} onClick={() => setOpen(false)} />
      <div className={`rh-mobile-menu ${open ? "open" : ""}`}>
        <div className="rh-mobile-header">
          <button className="rh-close-btn" onClick={() => setOpen(false)}>
            <X size={18} />
          </button>
        </div>
        {navItems.map((item) => (
          <Link
            key={item.page}
            to={createPageUrl(item.page)}
            onClick={() => setOpen(false)}
            className={`rh-mobile-link ${currentPageName === item.page ? "active" : ""}`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <main>{children}</main>

      <footer style={{ borderTop: "1px solid #E4E0D8", padding: "40px 0", background: "#FAFAF7" }}>
        <div className="rh-container" style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontFamily: "Georgia, serif", fontSize: "14px", color: "#1C1916", fontWeight: 600, marginBottom: "4px" }}>
              Renaissance Holdings
            </div>
            <div className="rh-caption">© 2026 · All rights reserved.</div>
          </div>
          <div style={{ display: "flex", gap: "22px", flexWrap: "wrap" }}>
            {[
              { label: "Strategy", page: "Strategy" },
              { label: "Investment Criteria", page: "InvestmentCriteria" },
              { label: "For Sellers", page: "ForSellers" },
              { label: "Contact", page: "Contact" },
            ].map((l) => (
              <Link
                key={l.page}
                to={createPageUrl(l.page)}
                style={{ fontFamily: "system-ui, sans-serif", fontSize: "12px", color: "#AEA9A2" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}