"use client";

import { education } from "../data/resume";

export default function Education() {
  return (
    <section
      id="education"
      style={{
        padding: "100px 24px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <p className="section-label" style={{ marginBottom: "12px" }}>
        Education
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
        Academic background
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
          gap: "24px",
        }}
        className="edu-grid"
      >
        {education.map((edu, i) => (
          <div
            key={i}
            className="card"
            style={{ padding: "32px", position: "relative", overflow: "hidden" }}
          >
            {/* Subtle top accent */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: i === 0
                  ? "linear-gradient(to right, var(--accent), transparent)"
                  : "linear-gradient(to right, var(--green), transparent)",
              }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "20px",
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "4px",
                  }}
                >
                  {edu.school}
                </h3>
                <p style={{ fontSize: "13px", color: "var(--text-muted)" }}>
                  {edu.location}
                </p>
              </div>
              {i === 0 && (
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "var(--accent)",
                    background: "var(--accent-dim)",
                    border: "1px solid var(--accent-border)",
                    padding: "3px 8px",
                    borderRadius: "4px",
                  }}
                >
                  Graduate
                </span>
              )}
            </div>

            <div
              style={{
                paddingTop: "20px",
                borderTop: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--text-muted)",
                  marginBottom: "6px",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                {edu.degree}
              </div>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                }}
              >
                {edu.field}
              </div>
              {edu.gpa && (
                <div
                  style={{
                    marginTop: "12px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "var(--green-dim)",
                    border: "1px solid rgba(52, 211, 153, 0.2)",
                    borderRadius: "6px",
                    padding: "4px 12px",
                  }}
                >
                  <span style={{ fontSize: "12px", color: "var(--green)", fontWeight: 600 }}>
                    GPA: {edu.gpa}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 500px) {
          .edu-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
