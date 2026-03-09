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

const LOGO_HORIZ = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69ae331eab7b724aff553a13/694e594cd_RHLogohorizbarspng.png";
const LOGO_ICON = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69ae331eab7b724aff553a13/cdb5d07ec_RHIconpng.png";
const LOGO_VERT = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69ae331eab7b724aff553a13/ce5cda084_RHLogovertnobarspng.png";

export default function Layout({ children, currentPageName }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&family=DM+Mono:wght@300;400;500&display=swap" />

      <div style={{ background: "#060907", minHeight: "100vh", color: "#e6e2d6" }}>
        <style>{`
          *, *::before, *::after { box-sizing: border-box; }
          body { background: #060907; margin: 0; }
          a { text-decoration: none; color: inherit; }

          .rh-nav {
            position: sticky; top: 0; z-index: 100;
            background: rgba(6,9,7,0.96);
            backdrop-filter: blur(8px);
            border-bottom: 1px solid #1a211a;
            height: 64px; display: flex; align-items: center;
          }
          .rh-nav-inner {
            max-width: 1140px; margin: 0 auto; padding: 0 28px;
            width: 100%;
            display: flex; align-items: center; justify-content: space-between;
          }
          @media (min-width: 640px) { .rh-nav-inner { padding: 0 48px; } }

          .rh-nav-links { display: none; gap: 28px; align-items: center; }
          @media (min-width: 960px) { .rh-nav-links { display: flex; } }

          .rh-nav-link {
            font-family: 'DM Sans', system-ui, sans-serif;
            font-size: 13px; color: #5e5a4e;
            transition: color 0.15s; white-space: nowrap;
          }
          .rh-nav-link:hover { color: #e6e2d6; }
          .rh-nav-link.active { color: #f2ecd8; font-weight: 500; }

          .rh-hamburger {
            display: flex; align-items: center; justify-content: center;
            background: none; border: none; cursor: pointer;
            padding: 6px; color: #9a9484;
          }
          @media (min-width: 960px) { .rh-hamburger { display: none; } }

          .rh-overlay {
            position: fixed; inset: 0; background: rgba(6,9,7,0.85);
            z-index: 150; opacity: 0; pointer-events: none;
            transition: opacity 0.25s;
          }
          .rh-overlay.open { opacity: 1; pointer-events: all; }

          .rh-mobile-menu {
            position: fixed; top: 0; right: 0; bottom: 0; width: 270px;
            background: #060907; z-index: 200;
            transform: translateX(100%);
            transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
            border-left: 1px solid #1a211a;
          }
          .rh-mobile-menu.open { transform: translateX(0); }

          .rh-mobile-header {
            height: 64px; display: flex;
            align-items: center; justify-content: flex-end;
            padding: 0 20px; border-bottom: 1px solid #1a211a;
          }
          .rh-close-btn {
            background: none; border: none; cursor: pointer;
            padding: 6px; color: #5e5a4e;
          }
          .rh-mobile-link {
            display: block; padding: 14px 28px;
            font-family: 'DM Sans', system-ui, sans-serif;
            font-size: 14px; color: #9a9484;
            border-bottom: 1px solid #1a211a;
            transition: background 0.15s;
          }
          .rh-mobile-link:hover { background: #0d110e; color: #e6e2d6; }
          .rh-mobile-link.active { color: #f2ecd8; font-weight: 500; }

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
          .rh-section-alt { background: #0d110e; }
          .rh-section-dark { background: #111610; }

          /* Type */
          .rh-eyebrow {
            font-family: 'DM Mono', monospace;
            font-size: 10px; letter-spacing: 0.24em;
            text-transform: uppercase; color: #c8a84c;
            display: block; margin-bottom: 18px;
          }
          .rh-h1 {
            font-family: 'Playfair Display', Georgia, serif;
            font-size: clamp(38px, 5.5vw, 62px);
            font-weight: 400; line-height: 1.1;
            color: #f2ecd8; margin: 0 0 24px;
            letter-spacing: -0.015em;
          }
          .rh-h2 {
            font-family: 'Playfair Display', Georgia, serif;
            font-size: clamp(26px, 3.8vw, 40px);
            font-weight: 400; line-height: 1.15;
            color: #f2ecd8; margin: 0 0 20px;
            letter-spacing: -0.01em;
          }
          .rh-h3 {
            font-family: 'Playfair Display', Georgia, serif;
            font-size: 19px; font-weight: 400;
            color: #e6e2d6; margin: 0 0 10px; line-height: 1.3;
          }
          .rh-body {
            font-family: 'DM Sans', system-ui, sans-serif;
            font-size: 16px; line-height: 1.82;
            color: #9a9484; margin: 0 0 20px;
          }
          .rh-body:last-child { margin-bottom: 0; }
          .rh-body-lg {
            font-family: 'Playfair Display', Georgia, serif;
            font-size: clamp(17px, 2.2vw, 21px);
            line-height: 1.68; color: #e6e2d6; margin: 0 0 32px;
          }
          .rh-caption {
            font-family: 'DM Mono', monospace;
            font-size: 11px; color: #5e5a4e; line-height: 1.5;
            letter-spacing: 0.05em;
          }
          .rh-note {
            font-family: 'DM Sans', system-ui, sans-serif;
            font-size: 13px; color: #5e5a4e;
            font-style: italic; line-height: 1.6;
          }

          /* Cards */
          .rh-card {
            padding: 28px 24px;
            border: 1px solid #1a211a;
            border-radius: 1px;
            background: #111610;
          }
          .rh-card-alt {
            padding: 28px 24px;
            border: 1px solid #1a211a;
            border-radius: 1px;
            background: #111610;
          }

          /* Divider */
          .rh-divider { border: none; border-top: 1px solid #1a211a; margin: 0; }

          /* Buttons */
          .rh-btn {
            display: inline-flex; align-items: center;
            background: #c8a84c; color: #060907;
            border: 1px solid #c8a84c;
            padding: 13px 26px;
            font-family: 'DM Mono', monospace;
            font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
            cursor: pointer; border-radius: 1px;
            transition: background 0.18s, border-color 0.18s;
            text-decoration: none; font-weight: 500;
          }
          .rh-btn:hover { background: #b89a40; border-color: #b89a40; }

          .rh-btn-outline {
            display: inline-flex; align-items: center;
            background: transparent; color: #c8a84c;
            border: 1px solid rgba(200,168,76,0.45);
            padding: 13px 26px;
            font-family: 'DM Mono', monospace;
            font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
            cursor: pointer; border-radius: 1px;
            transition: all 0.18s;
            text-decoration: none; font-weight: 500;
          }
          .rh-btn-outline:hover { border-color: #c8a84c; background: rgba(200,168,76,0.06); }

          .rh-btn-ghost {
            display: inline-flex; align-items: center;
            background: transparent; color: #c8a84c;
            border: 1px solid rgba(200,168,76,0.3);
            padding: 13px 26px;
            font-family: 'DM Mono', monospace;
            font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
            cursor: pointer; border-radius: 1px;
            transition: all 0.18s;
            text-decoration: none; font-weight: 500;
          }
          .rh-btn-ghost:hover { border-color: #c8a84c; background: rgba(200,168,76,0.06); }

          /* Lists */
          .rh-list { list-style: none; padding: 0; margin: 0; }
          .rh-list li {
            padding: 14px 0;
            border-bottom: 1px solid #1a211a;
            font-family: 'Playfair Display', Georgia, serif;
            font-size: 17px; color: #e6e2d6;
          }
          .rh-list li:first-child { border-top: 1px solid #1a211a; }

          /* Form */
          .rh-input {
            width: 100%; padding: 12px 14px;
            background: #0d110e; border: 1px solid #1a211a;
            border-radius: 1px;
            font-family: 'DM Sans', system-ui, sans-serif; font-size: 14px;
            color: #e6e2d6; transition: border-color 0.18s; outline: none;
          }
          .rh-input::placeholder { color: #2a312a; }
          .rh-input:focus { border-color: #c8a84c; }
          .rh-form-label {
            display: block;
            font-family: 'DM Mono', monospace;
            font-size: 10px; letter-spacing: 0.2em;
            text-transform: uppercase; color: #5e5a4e;
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
          .rh-pillar { padding-top: 20px; border-top: 1px solid #1a211a; }
          .rh-pillar-num {
            font-family: 'DM Mono', monospace;
            font-size: 10px; color: #6b5a2a;
            letter-spacing: 0.1em; margin-bottom: 14px;
          }
        `}</style>

        {/* Nav */}
        <nav className="rh-nav">
          <div className="rh-nav-inner">
            <Link to={createPageUrl("Home")} style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
              <img
                src={LOGO_HORIZ}
                alt="Renaissance Holdings"
                style={{ height: "34px", filter: "invert(1) sepia(1) saturate(0.4) brightness(0.95)", imageRendering: "crisp-edges" }}
              />
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

        <footer style={{ borderTop: "1px solid #1a211a", padding: "48px 0", background: "#060907" }}>
          <div className="rh-container">
            <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                  <RHMark size={34} />
                  <div>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.3em", color: "#c8a84c", textTransform: "uppercase", lineHeight: "1.2" }}>Renaissance</div>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "8.5px", letterSpacing: "0.3em", color: "#6b5a2a", textTransform: "uppercase", marginTop: "3px" }}>Holdings</div>
                  </div>
                </div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", letterSpacing: "0.18em", color: "#2a312a", textTransform: "uppercase" }}>
                  Building Quietly. Compounding Relentlessly.
                </div>
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
                    style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "12px", color: "#3a4038" }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
            <div style={{ marginTop: "32px", paddingTop: "24px", borderTop: "1px solid #1a211a" }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#2a312a", letterSpacing: "0.08em" }}>
                © 2026 Renaissance Holdings · All rights reserved.
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}