"use client";

import { useReveal } from "../hooks/useReveal";
import { projects } from "../data/resume";

// GitHub SVG icon
function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="38" height="38" aria-hidden="true">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" ref={ref} style={{ paddingBottom: "100px" }}>
      <h2 className="numbered-heading" data-num="03">
        Things I&apos;ve Built
      </h2>

      {/* ── Featured projects ── */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
        {projects.slice(0, 3).map((project, i) => {
          const isEven = i % 2 === 0;
          return (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(12, 1fr)",
                gap: "16px",
                alignItems: "center",
                marginBottom: "80px",
                position: "relative",
              }}
              className="featured-project"
            >
              {/* Decorative panel */}
              <div
                style={{
                  gridColumn: isEven ? "1 / 8" : "6 / 13",
                  gridRow: "1",
                  borderRadius: "4px",
                  background: "var(--light-navy)",
                  height: "100%",
                  minHeight: "280px",
                  position: "relative",
                  overflow: "hidden",
                }}
                className="project-visual"
              >
                {/* Code decoration */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "40px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "13px",
                    color: "var(--lightest-navy)",
                    lineHeight: 2,
                    userSelect: "none",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ color: "rgba(100,255,218,0.08)", fontSize: "11px" }}>
                    {project.tech.map((t) => `import ${t.replace(/[^a-zA-Z]/g, "")} from "${t.toLowerCase().replace(/[^a-z]/g, "")}"`).join("\n")}
                  </div>
                  <div style={{ marginTop: "20px", color: "rgba(100,255,218,0.05)", fontSize: "11px" }}>
                    {project.highlights.slice(0, 2).join("\n\n")}
                  </div>
                </div>

                {/* Overlay tint on hover */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "var(--green-tint2)",
                    transition: "var(--transition)",
                    mixBlendMode: "multiply",
                  }}
                />

                {/* Category label in corner */}
                <div
                  style={{
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "var(--green)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    opacity: 0.7,
                  }}
                >
                  {project.category}
                </div>

                {/* Metrics for iris project */}
                {"metrics" in project && project.metrics && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "20px",
                      left: "20px",
                      right: "20px",
                      display: "flex",
                      gap: "12px",
                      flexWrap: "wrap",
                    }}
                  >
                    {Object.entries(project.metrics).map(([k, v]) => (
                      <div
                        key={k}
                        style={{
                          background: "rgba(10,25,47,0.8)",
                          border: "1px solid var(--lightest-navy)",
                          borderRadius: "4px",
                          padding: "6px 12px",
                          textAlign: "center",
                        }}
                      >
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
                        <div style={{ fontSize: "10px", color: "var(--slate)", textTransform: "capitalize" }}>
                          {k}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Content card */}
              <div
                style={{
                  gridColumn: isEven ? "6 / 13" : "1 / 8",
                  gridRow: "1",
                  position: "relative",
                  zIndex: 2,
                  textAlign: isEven ? "right" : "left",
                }}
                className="project-content"
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    color: "var(--green)",
                    marginBottom: "10px",
                    letterSpacing: "0.05em",
                  }}
                >
                  Featured Project
                </p>
                <h3
                  style={{
                    fontSize: "clamp(20px, 3vw, 26px)",
                    fontWeight: 700,
                    color: "var(--lightest-slate)",
                    marginBottom: "20px",
                    lineHeight: 1.2,
                  }}
                >
                  {project.title}
                </h3>

                {/* Floating description */}
                <div
                  style={{
                    background: "var(--light-navy)",
                    borderRadius: "4px",
                    padding: "24px",
                    marginBottom: "20px",
                    boxShadow: "0 10px 30px -15px var(--navy-shadow)",
                  }}
                >
                  <p style={{ color: "var(--light-slate)", fontSize: "15px", lineHeight: 1.75 }}>
                    {project.description}
                  </p>
                </div>

                {/* Tech list */}
                <ul
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "12px",
                    listStyle: "none",
                    justifyContent: isEven ? "flex-end" : "flex-start",
                    marginBottom: "16px",
                  }}
                >
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "12px",
                        color: "var(--light-slate)",
                      }}
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                {/* Links */}
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    justifyContent: isEven ? "flex-end" : "flex-start",
                  }}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View on GitHub"
                    className="icon-btn"
                  >
                    <GitHubIcon />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Other noteworthy projects ── */}
      <div style={{ marginTop: "20px" }}>
        <h3
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "20px",
            fontWeight: 600,
            color: "var(--lightest-slate)",
            textAlign: "center",
            marginBottom: "48px",
          }}
        >
          Other Noteworthy Projects
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "16px",
          }}
        >
          {/* Remaining projects as cards */}
          {projects.slice(3).map((project, i) => (
            <div key={i} className="project-card">
              {/* Header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "8px",
                }}
              >
                <span style={{ color: "var(--green)" }}>
                  <FolderIcon />
                </span>
                <div style={{ display: "flex", gap: "12px" }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="icon-btn"
                    style={{ color: "var(--light-slate)" }}
                  >
                    <GitHubIcon />
                  </a>
                </div>
              </div>

              {/* Title */}
              <h4
                style={{
                  fontSize: "17px",
                  fontWeight: 600,
                  color: "var(--lightest-slate)",
                  lineHeight: 1.3,
                  transition: "var(--transition)",
                }}
              >
                {project.title}
              </h4>

              {/* Description */}
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--slate)",
                  lineHeight: 1.7,
                  flex: 1,
                }}
              >
                {project.description}
              </p>

              {/* Tech */}
              <ul
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                  listStyle: "none",
                  marginTop: "auto",
                }}
              >
                {project.tech.map((t) => (
                  <li
                    key={t}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "var(--slate)",
                    }}
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .featured-project {
            display: block !important;
            margin-bottom: 48px !important;
          }
          .project-visual {
            min-height: 180px !important;
            border-radius: 4px 4px 0 0 !important;
          }
          .project-content {
            background: var(--light-navy);
            padding: 24px;
            text-align: left !important;
            border-radius: 0 0 4px 4px;
          }
          .project-content ul {
            justify-content: flex-start !important;
          }
          .project-content > div:last-child {
            justify-content: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
