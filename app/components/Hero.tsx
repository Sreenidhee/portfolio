"use client";

import { profile } from "../data/resume";

export default function Hero() {
  return (
    <section
      id="hero"
      className="grid-bg"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "120px 24px 80px",
        position: "relative",
      }}
    >
      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(79,142,247,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%", position: "relative" }}>
        {/* Status badge */}
        <div
          className="animate-fade-up"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "var(--green-dim)",
            border: "1px solid rgba(52, 211, 153, 0.2)",
            borderRadius: "100px",
            padding: "6px 14px",
            marginBottom: "32px",
          }}
        >
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "var(--green)",
              display: "inline-block",
              animation: "pulse-slow 2s ease-in-out infinite",
            }}
          />
          <span
            style={{
              fontSize: "12px",
              color: "var(--green)",
              fontWeight: 500,
              letterSpacing: "0.03em",
            }}
          >
            Open to opportunities
          </span>
        </div>

        {/* Name */}
        <h1
          className="animate-fade-up delay-100"
          style={{
            fontSize: "clamp(42px, 7vw, 80px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            marginBottom: "16px",
            color: "var(--text-primary)",
          }}
        >
          {profile.name}
        </h1>

        {/* Title */}
        <div
          className="animate-fade-up delay-200"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "28px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(14px, 2vw, 18px)",
              color: "var(--accent)",
              fontWeight: 500,
            }}
          >
            {profile.title}
          </span>
          <span style={{ color: "var(--border-accent)", fontSize: "18px" }}>·</span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(12px, 1.5vw, 14px)",
              color: "var(--text-muted)",
            }}
          >
            M.S. CS — University of Florida
          </span>
        </div>

        {/* Tagline */}
        <p
          className="animate-fade-up delay-300"
          style={{
            fontSize: "clamp(15px, 1.8vw, 18px)",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            maxWidth: "560px",
            marginBottom: "48px",
          }}
        >
          {profile.tagline}
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-up delay-400"
          style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "56px" }}
        >
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "var(--accent)",
              color: "#0d0f14",
              padding: "12px 28px",
              borderRadius: "10px",
              fontSize: "14px",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.2s ease",
              boxShadow: "0 4px 24px rgba(79, 142, 247, 0.25)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.transform = "translateY(-1px)";
              el.style.boxShadow = "0 8px 32px rgba(79, 142, 247, 0.35)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 4px 24px rgba(79, 142, 247, 0.25)";
            }}
          >
            Get in touch
          </a>
          <a
            href="#projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "transparent",
              color: "var(--text-primary)",
              padding: "12px 28px",
              borderRadius: "10px",
              fontSize: "14px",
              fontWeight: 600,
              textDecoration: "none",
              border: "1px solid var(--border-accent)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--text-muted)";
              el.style.background = "var(--bg-card)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--border-accent)";
              el.style.background = "transparent";
            }}
          >
            View Projects
          </a>
        </div>

        {/* Social Links */}
        <div
          className="animate-fade-up delay-500"
          style={{ display: "flex", gap: "20px", alignItems: "center" }}
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "var(--text-muted)",
              textDecoration: "none",
              fontSize: "13px",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          <span style={{ color: "var(--border)", fontSize: "16px" }}>|</span>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "var(--text-muted)",
              textDecoration: "none",
              fontSize: "13px",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <span style={{ color: "var(--border)", fontSize: "16px" }}>|</span>
          <a
            href={`mailto:${profile.email}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "var(--text-muted)",
              textDecoration: "none",
              fontSize: "13px",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Email
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="animate-fade-in delay-600"
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          color: "var(--text-muted)",
        }}
      >
        <span style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          scroll
        </span>
        <svg
          width="16"
          height="20"
          viewBox="0 0 16 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="1" y="1" width="14" height="18" rx="7" />
          <circle cx="8" cy="7" r="2" fill="currentColor">
            <animate attributeName="cy" values="7;11;7" dur="1.8s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    </section>
  );
}
