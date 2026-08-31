"use client";

import { useState } from "react";
import { profile } from "../data/resume";
import { useActiveSection } from "../hooks/useActiveSection";

const NAV = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const SOCIALS = [
  {
    label: "GitHub",
    href: profile.github,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export default function Sidebar() {
  const active = useActiveSection(NAV.map((n) => n.id));
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ── Mobile top bar ── */}
      <header
        style={{
          display: "none",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: "rgba(10,25,47,0.85)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid var(--lightest-navy)",
          padding: "0 24px",
          height: "56px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className="mobile-header"
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "14px",
            color: "var(--green)",
            letterSpacing: "0.05em",
          }}
        >
          SVM
        </span>
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          style={{ background: "none", border: "none", cursor: "pointer", color: "var(--green)", padding: "4px" }}
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </header>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          style={{
            display: "none",
            position: "fixed",
            top: "56px",
            left: 0,
            right: 0,
            zIndex: 99,
            background: "var(--light-navy)",
            borderBottom: "1px solid var(--lightest-navy)",
            padding: "24px",
            flexDirection: "column",
            gap: "0",
          }}
          className="mobile-menu"
        >
          {NAV.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "14px 0",
                borderBottom: i < NAV.length - 1 ? "1px solid var(--lightest-navy)" : "none",
                color: active === item.id ? "var(--green)" : "var(--lightest-slate)",
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
              }}
            >
              <span style={{ color: "var(--green)", fontSize: "11px" }}>0{i + 1}.</span>
              {item.label}
            </a>
          ))}
        </div>
      )}

      {/* ── Desktop Sidebar ── */}
      <aside
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "100px 0",
          maxHeight: "100vh",
        }}
        className="sidebar"
      >
        {/* Top: Name + title + bio */}
        <div>
          <div
            className="hero-enter"
            style={{ animationDelay: "0.1s" }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "14px",
                color: "var(--green)",
                marginBottom: "20px",
              }}
            >
              Hi, my name is
            </p>
          </div>

          <h1
            className="hero-enter"
            style={{
              animationDelay: "0.2s",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 700,
              color: "var(--lightest-slate)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: "12px",
            }}
          >
            Sreenidhee
            <br />
            Vidya Modugu
          </h1>

          <h2
            className="hero-enter"
            style={{
              animationDelay: "0.3s",
              fontSize: "clamp(18px, 2.5vw, 24px)",
              fontWeight: 500,
              color: "var(--slate)",
              letterSpacing: "-0.01em",
              marginBottom: "20px",
            }}
          >
            Software Engineer
          </h2>

          <p
            className="hero-enter"
            style={{
              animationDelay: "0.4s",
              fontSize: "15px",
              color: "var(--slate)",
              lineHeight: 1.7,
              maxWidth: "340px",
              marginBottom: "40px",
            }}
          >
            I build performance-sensitive systems, backend applications,
            and full-stack software across defense research and enterprise environments.
          </p>

          {/* Nav */}
          <nav className="hero-enter" style={{ animationDelay: "0.5s" }}>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "4px" }}>
              {NAV.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0",
                      padding: "6px 0",
                      color: active === item.id ? "var(--lightest-slate)" : "var(--slate)",
                      fontSize: "13px",
                      fontFamily: "var(--font-mono)",
                      fontWeight: active === item.id ? 600 : 400,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      transition: "var(--transition)",
                      position: "relative",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.color = "var(--lightest-slate)";
                      const line = el.querySelector(".nav-line") as HTMLElement;
                      if (line) { line.style.width = "48px"; line.style.background = "var(--lightest-slate)"; }
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.color = active === item.id ? "var(--lightest-slate)" : "var(--slate)";
                      const line = el.querySelector(".nav-line") as HTMLElement;
                      if (line) {
                        line.style.width = active === item.id ? "48px" : "24px";
                        line.style.background = active === item.id ? "var(--lightest-slate)" : "var(--slate)";
                      }
                    }}
                  >
                    <span
                      className="nav-line"
                      style={{
                        display: "inline-block",
                        height: "1px",
                        width: active === item.id ? "48px" : "24px",
                        background: active === item.id ? "var(--lightest-slate)" : "var(--slate)",
                        marginRight: "16px",
                        transition: "all 0.25s var(--easing)",
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ fontSize: "11px", color: "inherit", opacity: 0.6, marginRight: "6px" }}>
                      0{i + 1}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom: Social icons */}
        <div
          className="hero-enter"
          style={{
            animationDelay: "0.6s",
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="icon-btn"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </aside>

      <style>{`
        @media (max-width: 1080px) {
          .sidebar { display: none !important; }
          .mobile-header { display: flex !important; }
          .mobile-menu { display: flex !important; }
        }
      `}</style>
    </>
  );
}
