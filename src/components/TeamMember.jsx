import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function TeamMember({ name, title, image, keyFacts, biography }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Image and Basic Info */}
      <div style={{ marginBottom: "20px" }}>
        {image ? (
          <img 
            src={image} 
            alt={name}
            style={{ width: "100%", borderRadius: "2px", marginBottom: "16px" }}
          />
        ) : (
          <div style={{
            width: "100%",
            aspectRatio: "1",
            background: "#111610",
            borderRadius: "2px",
            marginBottom: "16px",
            border: "1px solid #1a211a",
          }} />
        )}
        <div style={{
          fontFamily: "'DM Sans', system-ui, sans-serif",
          fontSize: "10px", letterSpacing: "0.22em",
          textTransform: "uppercase", color: "#5e5a4e",
          marginBottom: "8px",
        }}>
          {title}
        </div>
        <h3 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "21px", fontWeight: 400,
          color: "#f2ecd8", margin: "0 0 16px",
        }}>
          {name}
        </h3>

        {/* Key Facts */}
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px" }}>
          {keyFacts.map((fact, i) => (
            <li key={i} style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "11px", color: "#5e5a4e",
              lineHeight: "1.6", marginBottom: "4px",
            }}>
              {fact}
            </li>
          ))}
        </ul>
      </div>

      {/* Dropdown Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          background: "none",
          border: "1px solid rgba(200,168,76,0.3)",
          color: "#c8a84c",
          padding: "12px 16px",
          fontFamily: "'DM Mono', monospace",
          fontSize: "11px",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          cursor: "pointer",
          borderRadius: "1px",
          transition: "all 0.18s",
          width: "100%",
        }}
        onMouseEnter={(e) => e.target.style.borderColor = "#c8a84c"}
        onMouseLeave={(e) => e.target.style.borderColor = "rgba(200,168,76,0.3)"}
      >
        Full Bio
        <ChevronDown 
          size={14} 
          style={{
            marginLeft: "auto",
            transition: "transform 0.2s",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>

      {/* Expandable Biography */}
      {isOpen && (
        <div style={{
          marginTop: "20px",
          paddingTop: "20px",
          borderTop: "1px solid #1a211a",
        }}>
          {biography}
        </div>
      )}
    </div>
  );
}