import { useEffect, useState } from "react";
import resumePdf from "../../assets/Prashant_kumar_Software_Engineer_3yrs.pdf";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const [activeSection, setActiveSection] = useState("dashboard");

  const [showResumeModal, setShowResumeModal] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const navItems = [
    {
      name: "Deployment",
      link: "dashboard",
    },
    {
      name: "Projects",
      link: "projects",
    },
    {
      name: "Architecture",
      link: "architecture",
    },
    {
      name: "Tech Stack",
      link: "techstack",
    },
    {
      name: "About",
      link: "about",
    },
  ];

  // Active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.link);

      for (const section of sections) {
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  // Smooth scroll
  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });

      setMobileMenu(false);
    }
  };

  const downloadResume = () => {
    const link = document.createElement("a");

    link.href = resumePdf;
    link.download = "Prashant-Kumar-Resume.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setShowResumeModal(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto">
          <div className="h-16 lg:h-18 flex items-center justify-between">
            {/* Logo */}
            <div>
              <h1 className="text-2xl md:text-3xl font-black bg-linear-to-r from-blue-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent">
                DeployFlow
              </h1>

              <p className="text-[11px] text-slate-500 tracking-widest uppercase">
                Full Stack Deployment System
              </p>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.link)}
                  className={`px-5 py-3 rounded-2xl text-sm font-medium transition-all duration-300 ${
                    activeSection === item.link
                      ? "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                      : "text-slate-300 hover:text-white hover:bg-slate-900"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Desktop Right */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://github.com/Prashant9155/deployment-control-panel"
                target="_blank"
                className="text-slate-400 hover:text-cyan-300 transition-all duration-300"
              >
                GitHub
              </a>

              <button
                onClick={() => setShowResumeModal(true)}
                className="px-6 py-3 rounded-2xl bg-linear-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:scale-[1.03] transition-all duration-300 shadow-lg shadow-cyan-500/20"
              >
                Resume
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden flex flex-col gap-1"
            >
              <span className="h-0.5 w-6 bg-white rounded-full"></span>

              <span className="h-0.5 w-6 bg-white rounded-full"></span>

              <span className="h-0.5 w-6 bg-white rounded-full"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden ${
          mobileMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Overlay */}
        <div
          onClick={() => setMobileMenu(false)}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        ></div>

        {/* Sidebar */}
        <div
          className={`absolute top-0 right-0 h-full w-[80%] max-w-sm bg-slate-950 border-l border-slate-800 p-6 transition-all duration-300 ${
            mobileMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Top */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl font-black bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                DeployFlow
              </h2>

              <p className="text-xs text-slate-500 mt-1">
                Cloud Deployment Portfolio
              </p>
            </div>

            <button
              onClick={() => setMobileMenu(false)}
              className="text-slate-400 text-2xl"
            >
              ×
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.link)}
                className={`text-left px-5 py-4 rounded-2xl transition-all duration-300 ${
                  activeSection === item.link
                    ? "bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"
                    : "bg-slate-900 text-slate-300 hover:bg-slate-800"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 space-y-4">
            <a
              href="https://github.com/Prashant9155"
              target="_blank"
              className="block w-full text-center px-5 py-4 rounded-2xl border border-slate-700 text-slate-300 hover:border-cyan-500 hover:text-cyan-300 transition-all duration-300"
            >
              GitHub Profile
            </a>

            <button
              onClick={() => {
                setMobileMenu(false);
                setShowResumeModal(true);
              }}
              className="w-full px-5 py-4 rounded-2xl bg-linear-to-r from-blue-600 to-cyan-500 text-white font-semibold"
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
      {showResumeModal && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowResumeModal(false)}
          />

          {/* Modal */}
          <div className="relative w-full max-w-md rounded-3xl border border-slate-800 bg-slate-950 p-8 shadow-2xl">
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-cyan-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 16V4m0 12l-4-4m4 4l4-4M4 20h16"
                  />
                </svg>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center text-white">
              Download Resume
            </h3>

            <p className="text-slate-400 text-center mt-3">
              Would you like to download Prashant Kumar's latest resume?
            </p>

            <div className="flex gap-3 mt-8">
              <button
                onClick={() => setShowResumeModal(false)}
                className="flex-1 py-3 rounded-2xl border border-slate-700 text-slate-300 hover:bg-slate-900 transition-all"
              >
                Cancel
              </button>

              <button
                onClick={downloadResume}
                className="flex-1 py-3 rounded-2xl bg-linear-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:scale-[1.02] transition-all"
              >
                Download
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
