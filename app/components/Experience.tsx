"use client";

import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { experience } from "../data/resume";

export default function Experience() {
  const [active, setActive] = useState(0);
  const ref = useReveal();
  const job = experience[active];

  return (
    <section id="experience" ref={ref} style={{ paddingBottom: "100px" }}>
      <h2 className="numbered-heading" data-num="02">
        Where I&apos;ve Worked
      </h2>

      <div
        style={{
          display: "flex",
          gap: "0",
          minHeight: "340px",
        }}
        className="exp-layout"
      >
        {/* Tab list */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minWidth: "180px",
            flexShrink: 0,
            overflowX: "auto",
          }}
          className="tab-list"
          role="tablist"
        >
          {experience.map((e, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={`tab-btn ${active === i ? "active" : ""}`}
            >
              {/* Short company name for tabs */}
              {e.company === "DRDO — Defence Research & Development Organisation"
                ? "DRDO"
                : e.company}
            </button>
          ))}
        </div>

        {/* Content */}
        <div
          key={active}
          style={{
            padding: "4px 28px",
            flex: 1,
            animation: "fadeUp 0.3s var(--easing) both",
          }}
          role="tabpanel"
        >
          {/* Title + Company */}
          <h3
            style={{
              fontSize: "20px",
              fontWeight: 600,
              color: "var(--lightest-slate)",
              marginBottom: "4px",
            }}
          >
            {job.role.split("(")[0].trim()}
            {job.role.includes("(") && (
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
                  fontWeight: 400,
                  color: "var(--slate)",
                  marginTop: "2px",
                }}
              >
                ({job.role.split("(")[1]}
              </span>
            )}
          </h3>
          <p style={{ marginBottom: "4px" }}>
            <span style={{ color: "var(--green)", fontSize: "16px", fontWeight: 500 }}>
              @{" "}
              {job.company === "DRDO — Defence Research & Development Organisation"
                ? "DRDO"
                : job.company}
            </span>
          </p>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--slate)",
              marginBottom: "24px",
            }}
          >
            {job.period} · {job.location}
          </p>

          {/* Tech tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
            {job.tech.map((t) => (
              <span key={t} className="skill-tag">
                {t}
              </span>
            ))}
          </div>

          {/* Bullets */}
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
            {job.highlights.map((h, j) => (
              <li
                key={j}
                style={{
                  display: "flex",
                  gap: "10px",
                  color: "var(--light-slate)",
                  fontSize: "15px",
                  lineHeight: 1.7,
                }}
              >
                <span
                  style={{
                    color: "var(--green)",
                    fontSize: "12px",
                    flexShrink: 0,
                    marginTop: "6px",
                  }}
                >
                  ▹
                </span>
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 600px) {
          .exp-layout {
            flex-direction: column !important;
          }
          .tab-list {
            flex-direction: row !important;
            overflow-x: auto;
            min-width: unset !important;
            border-left: none !important;
            border-bottom: 2px solid var(--lightest-navy);
            margin-bottom: 24px;
          }
          .tab-btn {
            border-left: none !important;
            border-bottom: 2px solid transparent;
            padding: 12px 16px !important;
            margin-bottom: -2px;
          }
          .tab-btn.active {
            border-bottom: 2px solid var(--green) !important;
          }
        }
      `}</style>
    </section>
  );
}
