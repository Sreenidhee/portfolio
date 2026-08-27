"use client";

import { useState } from "react";
import { projects } from "../data/resume";

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section
      id="projects"
      style={{
        padding: "100px 24px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <p className="section-label" style={{ marginBottom: "12px" }}>
        Featured Projects
      </p>
      <h2
        style={{
          fontSize: "clamp(28px, 4vw, 42px)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          marginBottom: "16px",
          color: "var(--text-primary)",
        }}
      >
        What I've built
      </h2>
      <p
        style={{
          fontSize: "15px",
          color: "var(--text-secondary)",
          marginBottom: "56px",
          maxWidth: "520px",
        }}
      >
        End-to-end engineering projects spanning full-stack web applications and ML/CV research systems.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {projects.map((project, i) => {
          const isOpen = expanded === i;
          return (
            <div
              key={i}
              className="card"
              style={{
                overflow: "hidden",
                transition: "all 0.3s ease",
              }}
            >
              {/* Main content */}
              <div style={{ padding: "32px 36px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "16px",
                    flexWrap: "wrap",
                    gap: "12px",
                  }}
                >
                  <div>
                    {/* Category badge */}
                    <span
                      style={{
                        display: "inline-block",
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        color: "var(--text-muted)",
                        letterSpacing: "0.08em",
                        marginBottom: "8px",
                      }}
                    >
                      {project.category.toUpperCase()}
                    </span>
                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {project.title}
                    </h3>
                  </div>

                  {/* Metrics for iris project */}
                  {"metrics" in project && project.metrics && (
                    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                      {Object.entries(project.metrics).map(([k, v]) => (
                        <div key={k} style={{ textAlign: "center" }}>
                          <div
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "18px",
                              fontWeight: 700,
                              color: "var(--green)",
                            }}
                          >
                            {String(v)}
                          </div>
                          <div style={{ fontSize: "10px", color: "var(--text-muted)", textTransform: "capitalize" }}>
                            {k}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.75,
                    marginBottom: "20px",
                  }}
                >
                  {project.description}
                </p>

                {/* Tech tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px" }}>
                  {project.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Expand button */}
                <button
                  onClick={() => setExpanded(isOpen ? null : i)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "var(--accent)",
                    fontSize: "13px",
                    fontWeight: 500,
                    padding: 0,
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  {isOpen ? "Hide details" : "View details"}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              </div>

              {/* Expanded section */}
              {isOpen && (
                <div
                  style={{
                    borderTop: "1px solid var(--border)",
                    padding: "28px 36px",
                    background: "rgba(79, 142, 247, 0.02)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                      marginBottom: "16px",
                    }}
                  >
                    Engineering Highlights
                  </p>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "12px", listStyle: "none", padding: 0 }}>
                    {project.highlights.map((h, j) => (
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
                            color: "var(--green)",
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
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
