import { useEffect, useState } from "react";
const currentYear = new Date().getFullYear();

const profile = {
  name: "Prashant Kumar",
  role: "Frontend Engineer | Full Stack And AI Engineering Explorer",
  email: "prashantsin2gh@gmail.com",
  mobileNumbers: ["+91 91557 29247", "+91 87893 61873"],
  github: "https://github.com/Prashant9155",
  linkedIn: "https://www.linkedin.com/in/prashantkumar-sde",
};

const quickLinks = [
  { label: "Deployment", href: "dashboard" },
  { label: "Projects", href: "projects" },
  { label: "Architecture", href: "architecture" },
  { label: "Tech Stack", href: "techstack" },
  { label: "About", href: "about" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    icon: "in",
    href: profile.linkedIn,
    value: "prashantkumar-sde",
  },
];

const contactLinks = [
  {
    label: "Email",
    icon: "@",
    href: `mailto:${profile.email}`,
    value: profile.email,
  },
  ...profile.mobileNumbers.map((mobileNumber, index) => ({
    label: index === 0 ? "Mobile" : "Alternate Mobile",
    icon: "PH",
    href: `tel:${mobileNumber.replace(/\s/g, "")}`,
    value: mobileNumber,
  })),
];

export default function Footer() {
  const [activeSection, setActiveSection] = useState("dashboard");
  // Active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = quickLinks.map((item) => item.link);

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
  }, []);

  // Smooth scroll
 

  return (
    <footer className="mt-28 lg:mt-36 border-t border-slate-800/80 pt-10 pb-8">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr_0.9fr] gap-10 lg:gap-14">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
            Open To Work
          </div>

          <h3 className="text-3xl sm:text-4xl font-black bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mt-5">
            DeployFlow
          </h3>

          <p className="text-slate-400 mt-4 max-w-xl leading-relaxed text-sm sm:text-base">
            Full-stack deployment automation portfolio by {profile.name},
            showcasing React.js interfaces, Docker workflows, BullMQ queues,
            Redis Cloud, MongoDB, AWS Lambda, and scalable async architecture.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="px-5 py-3 rounded-2xl bg-linear-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold hover:scale-[1.02] transition-all duration-300"
            >
              Contact Me
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-2xl border border-slate-700 text-slate-200 hover:border-cyan-500 hover:text-cyan-300 transition-all duration-300 text-sm font-medium"
            >
              View GitHub
            </a>
          </div>
        </div>

        <div>
          <p className="text-white font-bold text-lg">Explore</p>

          <div className="grid grid-cols-2 gap-3 mt-5">
            {quickLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  const element = document.getElementById(link.href);

                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className={` text-start text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href
                    ? "  border-cyan-500/20"
                    : "text-slate-300  "
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-white font-bold text-lg">Connect</p>

          <div className="space-y-4 mt-5">
            {[...socialLinks, ...contactLinks].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex items-center gap-3 transition-all duration-300"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-900/70 text-xs font-black text-cyan-300 group-hover:bg-cyan-500/10 transition-all duration-300">
                  {link.icon}
                </span>

                <span className="min-w-0">
                  <span className="block text-xs text-slate-500">
                    {link.label}
                  </span>

                  <span className="block text-sm text-slate-300 group-hover:text-cyan-300 transition-all duration-300 mt-1 wrap-break-word">
                    {link.value}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-slate-500">
        <p>
          &copy; {currentYear} {profile.name}. Built with React.js, Node.js, and
          cloud-first engineering.
        </p>

        <p>{profile.role}</p>
      </div>
    </footer>
  );
}
