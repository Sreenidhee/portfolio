import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      {/* ── Desktop: two-column sticky sidebar layout ── */}
      <div
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
          padding: "0 100px",
          display: "grid",
          gridTemplateColumns: "minmax(0, 5fr) minmax(0, 7fr)",
          gap: "80px",
          minHeight: "100vh",
        }}
        className="page-layout"
      >
        <Sidebar />

        {/* Right scrollable content */}
        <main
          style={{ paddingTop: "100px" }}
          className="main-content"
        >
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>

      <style>{`
        @media (max-width: 1080px) {
          .page-layout {
            grid-template-columns: 1fr !important;
            padding: 0 !important;
          }
          .main-content {
            padding: 80px 40px 0 !important;
          }
        }
        @media (max-width: 480px) {
          .main-content {
            padding: 80px 24px 0 !important;
          }
        }
      `}</style>
    </>
  );
}
