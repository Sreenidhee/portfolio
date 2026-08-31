"use client";

import { useReveal } from "../hooks/useReveal";
import { profile } from "../data/resume";

export default function Contact() {
  const ref = useReveal();

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        paddingBottom: "100px",
        textAlign: "center",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "14px",
          color: "var(--green)",
          marginBottom: "20px",
        }}
      >
        04. What&apos;s Next?
      </p>

      <h2
        style={{
          fontSize: "clamp(36px, 6vw, 56px)",
          fontWeight: 700,
          color: "var(--lightest-slate)",
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          marginBottom: "24px",
        }}
      >
        Get In Touch
      </h2>

      <p
        style={{
          color: "var(--light-slate)",
          fontSize: "17px",
          lineHeight: 1.75,
          marginBottom: "48px",
          maxWidth: "500px",
          margin: "0 auto 48px",
        }}
      >
        I&apos;m currently open to full-time software engineering opportunities.
        Whether you have a question, a role in mind, or just want to connect —
        my inbox is always open.
      </p>

      <a href={`mailto:${profile.email}`} className="btn-outline">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          width="18"
          height="18"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
        Say Hello
      </a>

      {/* Footer */}
      <div style={{ marginTop: "80px" }}>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "var(--slate)",
            lineHeight: 2,
          }}
        >
          Designed &amp; Built by{" "}
          <span style={{ color: "var(--green)" }}>Sreenidhee Vidya Modugu</span>
        </p>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--slate)",
            opacity: 0.6,
          }}
        >
          Built with Next.js &amp; TypeScript
        </p>
      </div>
    </section>
  );
}
