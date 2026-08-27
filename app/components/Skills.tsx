"use client";

import { skills } from "../data/resume";

const categoryColors: Record<string, string> = {
  Languages: "#4f8ef7",
  Backend: "#34d399",
  Frontend: "#f59e0b",
  Databases: "#a78bfa",
  "Cloud & Infrastructure": "#fb923c",
  Engineering: "#06b6d4",
  "ML / Computer Vision": "#ec4899",
};

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "100px 24px",
        background: "var(--bg-card)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p className="section-label" style={{ marginBottom: "12px" }}>
          Technical Skills
        </p>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginBottom: "56px",
            color: "var(--text-primary)",
          }}
        >
          The stack I work with
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {Object.entries(skills).map(([category, items]) => {
            const color = categoryColors[category] || "var(--accent)";
            return (
              <div
                key={category}
                className="card"
                style={{ padding: "24px" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "2px",
                      background: color,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {category}
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {items.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "4px 10px",
                        borderRadius: "6px",
                        fontSize: "12px",
                        fontWeight: 500,
                        background: `${color}10`,
                        color: color,
                        border: `1px solid ${color}30`,
                        transition: "all 0.15s ease",
                        cursor: "default",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget;
                        el.style.background = `${color}20`;
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget;
                        el.style.background = `${color}10`;
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
