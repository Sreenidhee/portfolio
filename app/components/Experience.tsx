"use client";

import { experience } from "../data/resume";

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "100px 24px",
        background: "var(--bg-card)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p className="section-label" style={{ marginBottom: "12px" }}>
          Experience
        </p>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginBottom: "60px",
            color: "var(--text-primary)",
          }}
        >
          Where I've worked
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {experience.map((job, i) => (
            <div
              key={i}
              className="card"
              style={{
                padding: "36px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Accent line */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: "3px",
                  background: "linear-gradient(to bottom, var(--accent), transparent)",
                  borderRadius: "0 2px 2px 0",
                }}
              />

              {/* Header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "20px",
                  flexWrap: "wrap",
                  gap: "12px",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "4px",
                    }}
                  >
                    {job.company}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "var(--accent)",
                      fontWeight: 500,
                    }}
                  >
                    {job.role}
                  </p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "12px",
                      color: "var(--text-muted)",
                      marginBottom: "4px",
                    }}
                  >
                    {job.period}
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "var(--text-muted)",
                    }}
                  >
                    {job.location}
                  </p>
                </div>
              </div>

              {/* Tech tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
                {job.tech.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <ul style={{ display: "flex", flexDirection: "column", gap: "12px", paddingLeft: "0", listStyle: "none" }}>
                {job.highlights.map((h, j) => (
                  <li
                    key={j}
                    style={{
                      display: "flex",
                      gap: "12px",
                      fontSize: "14px",
                      color: "var(--text-secondary)",
                      lineHeight: 1.7,
                    }}
                  >
                    <span
                      style={{
                        color: "var(--accent)",
                        flexShrink: 0,
                        marginTop: "7px",
                        fontSize: "6px",
                      }}
                    >
                      ◆
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
