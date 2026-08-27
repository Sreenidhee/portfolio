"use client";

import { profile } from "../data/resume";

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "100px 24px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
        className="about-grid"
      >
        {/* Left */}
        <div>
          <p className="section-label" style={{ marginBottom: "16px" }}>
            About
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              marginBottom: "24px",
              color: "var(--text-primary)",
            }}
          >
            Engineering software that
            <br />
            <span className="accent-gradient-text">performs under pressure</span>
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              lineHeight: 1.8,
              fontSize: "15px",
              marginBottom: "24px",
            }}
          >
            {profile.summary}
          </p>
          <a
            href={`mailto:${profile.email}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "var(--accent)",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 500,
              borderBottom: "1px solid var(--accent-border)",
              paddingBottom: "2px",
              transition: "border-color 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "var(--accent)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "var(--accent-border)")
            }
          >
            {profile.email}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M7 7h10v10M7 17 17 7" />
            </svg>
          </a>
        </div>

        {/* Right — stat cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
          }}
        >
          {[
            {
              label: "Languages",
              value: "8+",
              desc: "C++, Python, Java, Go & more",
            },
            {
              label: "Focus Areas",
              value: "3+",
              desc: "Systems, Backend, ML/CV",
            },
            {
              label: "Degree",
              value: "M.S.",
              desc: "Computer Science, UFL",
            },
            {
              label: "B.E. GPA",
              value: "8.68",
              desc: "Osmania University",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="card"
              style={{ padding: "20px" }}
            >
              <div
                style={{
                  fontSize: "28px",
                  fontWeight: 700,
                  color: "var(--accent)",
                  letterSpacing: "-0.02em",
                  marginBottom: "4px",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {item.value}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: "4px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {item.label}
              </div>
              <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
