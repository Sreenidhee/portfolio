"use client";

import { useReveal } from "../hooks/useReveal";
import { skills, education } from "../data/resume";

const FEATURED_SKILLS = [
  "C++", "Python", "Java", "JavaScript", "Go",
  "Django", "React.js", "REST APIs",
  "MySQL", "PostgreSQL",
  "Docker", "Kubernetes", "AWS", "Linux",
  "PyTorch", "YOLOv8", "OpenCV",
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" ref={ref} style={{ paddingBottom: "100px" }}>
      <h2 className="numbered-heading" data-num="01">
        About Me
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "3fr 2fr",
          gap: "48px",
          alignItems: "start",
        }}
        className="about-grid"
      >
        {/* Text column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ color: "var(--light-slate)", lineHeight: 1.75 }}>
            I&apos;m a software engineer with a background in building performance-sensitive C/C++ systems,
            backend applications, and full-stack web platforms across{" "}
            <span style={{ color: "var(--lightest-slate)" }}>defense research</span> and{" "}
            <span style={{ color: "var(--lightest-slate)" }}>enterprise environments</span>. I hold
            an M.S. in Computer Science from the{" "}
            <span className="inline-link" style={{ cursor: "default" }}>University of Florida</span>.
          </p>
          <p style={{ color: "var(--light-slate)", lineHeight: 1.75 }}>
            At <span style={{ color: "var(--lightest-slate)" }}>Accenture</span>, I developed and
            customized enterprise Guidewire applications — implementing business logic, debugging
            complex cross-layer issues, and delivering across the full SDLC in close collaboration
            with business stakeholders and QA engineers.
          </p>
          <p style={{ color: "var(--light-slate)", lineHeight: 1.75 }}>
            At <span style={{ color: "var(--lightest-slate)" }}>DRDO</span>, I built
            performance-critical C++ image-processing pipelines and a YOLOv8-based object-detection
            system over ~20,000 aircraft images, achieving a{" "}
            <span style={{ color: "var(--green)" }}>~20% performance improvement</span> and a{" "}
            <span style={{ color: "var(--green)" }}>~25% accuracy gain</span> through systematic
            profiling and optimization.
          </p>

          <p style={{ color: "var(--light-slate)", lineHeight: 1.75, marginTop: "4px" }}>
            Here are some technologies I&apos;ve been working with:
          </p>

          {/* Skills grid */}
          <ul
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "8px 16px",
              listStyle: "none",
              marginTop: "4px",
            }}
          >
            {FEATURED_SKILLS.map((skill) => (
              <li
                key={skill}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
                  color: "var(--light-slate)",
                }}
              >
                <span style={{ color: "var(--green)", fontSize: "10px", flexShrink: 0 }}>▹</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Education card */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {education.map((edu, i) => (
            <div
              key={i}
              style={{
                background: "var(--light-navy)",
                border: "1px solid var(--lightest-navy)",
                borderRadius: "4px",
                padding: "24px",
                transition: "var(--transition)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--green)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--lightest-navy)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--green)",
                  letterSpacing: "0.08em",
                  marginBottom: "8px",
                  textTransform: "uppercase",
                }}
              >
                {edu.degree}
              </p>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "var(--lightest-slate)",
                  lineHeight: 1.3,
                  marginBottom: "6px",
                }}
              >
                {edu.field}
              </p>
              <p style={{ fontSize: "13px", color: "var(--slate)", marginBottom: "4px" }}>
                {edu.school}
              </p>
              <p style={{ fontSize: "12px", color: "var(--slate)" }}>{edu.location}</p>
              {edu.gpa && (
                <p
                  style={{
                    marginTop: "12px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    color: "var(--green)",
                  }}
                >
                  GPA: {edu.gpa}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
