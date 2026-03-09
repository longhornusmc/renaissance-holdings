import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Team() {
  return (
    <>
      {/* Hero */}
      <section className="rh-section" style={{ paddingTop: "96px" }}>
        <div className="rh-container">
          <span className="rh-eyebrow">Leadership</span>
          <h1 className="rh-h1">Investing discipline. Operator focus.</h1>
          <p className="rh-body-lg">
            Renaissance Holdings combines investing discipline with operator-focused execution. Our goal is to build a long-term platform of durable service businesses supported by disciplined capital allocation and operational improvement.
          </p>
        </div>
      </section>

      <hr className="rh-divider" />

      {/* Founder */}
      <section className="rh-section">
        <div className="rh-container-text">
          <span className="rh-eyebrow">Founding Team</span>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px", maxWidth: "920px" }}>
            {/* Patrick George */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "32px",
              alignItems: "start",
              paddingBottom: "48px",
              borderBottom: "1px solid #1a211a",
            }}>
              <div>
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69ae331eab7b724aff553a13/009d073d6_image.png" 
                  alt="Patrick S. George"
                  style={{ width: "100%", borderRadius: "2px", marginBottom: "16px" }}
                />
              </div>
              <div>
                <div style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "10px", letterSpacing: "0.22em",
                  textTransform: "uppercase", color: "#5e5a4e",
                  marginBottom: "12px",
                }}>
                  Founder &amp; Managing Partner
                </div>
                <h2 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "26px", fontWeight: 400,
                  color: "#f2ecd8", margin: "0 0 20px",
                }}>
                  Patrick S. George
                </h2>
                <div className="rh-body" style={{ marginBottom: "16px" }}>
                  Patrick George is a senior executive, military officer, and capital allocator with a career spanning national defense, energy, and venture-backed growth.
                </div>
                <div className="rh-body" style={{ marginBottom: "16px" }}>
                  He serves as a Senior Executive Service (SES)–level Senior Advisor to the Department of the Navy, where he leads industry engagement and accelerates commercial innovation across more than $100 billion in Navy and Marine Corps programs. He developed the Navy's first program office dedicated to robotic and autonomous systems, contributed to the enterprise-wide SYSCOM and PEO realignment, and structured more than $1 billion in shared-risk contracting models to modernize acquisition and improve fleet readiness. He also founded and led the Navy's Department of Government Efficiency (DOGE), delivering $2.5 billion in cost avoidance and $210 million in direct savings through contract reform, AI-enabled analysis of 55,000 contracts, and enterprise modernization initiatives.
                </div>
                <div className="rh-body" style={{ marginBottom: "16px" }}>
                  In the private sector, Patrick is President and Board Director of Hover Energy, where he helped lead the company's transition from research and development to commercial-scale deployment. Alongside the CEO, the company expanded across North America and the United Kingdom and executed a strategic joint venture with a publicly traded European clean energy company.
                </div>
                <div className="rh-body" style={{ marginBottom: "16px" }}>
                  Before founding Beachwood Ventures, he co-founded and served as President of Accelerate Resources, a data-driven energy company backed by New York-based private equity firm Pine Brook Partners with a $300 million commitment. The company executed more than 180 transactions before the sale of its Permian Basin assets.
                </div>
                <div className="rh-body" style={{ marginBottom: "16px" }}>
                  Patrick has served over 20 years as a Marine Corps officer. His service includes command of an elite reconnaissance company, leadership roles within the Marine Innovation Unit, and current strategic duties with 4th Civil Affairs Group. On active duty, he completed two combat tours in Iraq, where he led infantry and border security operations and trained Iraqi security forces.
                </div>
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "11px", color: "#5e5a4e",
                  lineHeight: "1.8", marginBottom: "16px",
                }}>
                  MBA, Cornell University SC Johnson (Roy H. Park Leadership Fellow &amp; Nolan Scholar)<br />
                  BA Economics &amp; Government, University of Texas at Austin
                </div>
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "11px", color: "#5e5a4e",
                  lineHeight: "1.8",
                }}>
                  Cornell Johnson's 10 Under 10 Notable Alumni Award · EY Entrepreneur of the Year Nominee · 40 Under 40, Dallas Business Journal · 40 Under 40, Oil and Gas Investor · Three Navy &amp; Marine Corps Commendation
                </div>
              </div>
            </div>

            {/* Second Founding Team Member - Placeholder */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "32px",
              alignItems: "start",
            }}>
              <div>
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69ae331eab7b724aff553a13/5cf84e9be_Profile-SuitSquareBW.JPEG" 
                  alt="Founding Partner"
                  style={{ width: "100%", borderRadius: "2px", marginBottom: "16px" }}
                />
              </div>
              <div>
                <div style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "10px", letterSpacing: "0.22em",
                  textTransform: "uppercase", color: "#5e5a4e",
                  marginBottom: "12px",
                }}>
                  Founding Partner
                </div>
                <h2 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "26px", fontWeight: 400,
                  color: "#f2ecd8", margin: "0 0 16px",
                }}>
                  [Name]
                </h2>
                <p className="rh-body" style={{ maxWidth: "100%" }}>
                  Background and biography to be added.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="rh-section rh-section-alt">
        <div className="rh-container-text">
          <span className="rh-eyebrow">Operating Advisors &amp; Partners</span>
          <h2 className="rh-h2" style={{ maxWidth: "480px", marginBottom: "16px" }}>
            Supported by experienced operators and industry specialists.
          </h2>
          <p className="rh-body" style={{ maxWidth: "560px", marginBottom: "44px" }}>
            Renaissance Holdings is supported by a network of operators, industry advisors, and capital partners who bring direct experience in the markets we target.
          </p>
          <div className="rh-grid-3">
            {["Operating Advisor", "Industry Specialist", "Strategic Partner"].map((role) => (
              <div key={role} className="rh-card">
                <div style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "10px", letterSpacing: "0.2em",
                  textTransform: "uppercase", color: "#5e5a4e",
                  marginBottom: "10px",
                }}>
                  {role}
                </div>
                <div style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "18px", color: "#f2ecd8",
                  marginBottom: "10px", fontWeight: 400,
                }}>
                  [Name]
                </div>
                <p className="rh-body" style={{ marginBottom: 0, fontSize: "14px" }}>
                  Details to be added.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="rh-section">
        <div className="rh-container-text">
          <span className="rh-eyebrow">Get in Touch</span>
          <h2 className="rh-h2">We welcome introductions.</h2>
          <p className="rh-body" style={{ marginBottom: "32px" }}>
            Whether you are a founder exploring a transition, a broker with a relevant opportunity, or an operator interested in the platform, we welcome a conversation.
          </p>
          <Link to={createPageUrl("Contact")} className="rh-btn">Start a Conversation</Link>
        </div>
      </section>
    </>
  );
}