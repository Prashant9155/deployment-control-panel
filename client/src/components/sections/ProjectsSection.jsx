function ProjectsSection() {
  const personalProjects = [
    {
      name: "DeployFlow",
      badge: "Personal Project",
      role: "Full Stack Deployment Platform",
      description:
        "Production-style deployment automation platform powered by Docker, BullMQ, Redis Cloud, MongoDB, and AWS Lambda with async infrastructure orchestration.",
      tech: [
        "React.js",
        "Node.js",
        "Docker",
        "BullMQ",
        "Redis",
        "AWS Lambda",
      ],
      github:
        "https://github.com/Prashant9155/deployment-control-panel",
      live:
        "https://deployment-frontend-nirh.onrender.com/",
    },

    {
      name: "NextRound AI",
      badge: "Personal Project",
      role: "AI Interview Preparation Platform",
      description:
        "AI-powered learning and interview preparation platform with roadmap generation, resume analysis, AI mock interviews, and job tracking workflows.",
      tech: [
        "React.js",
        "TypeScript",
        "Node.js",
        "AI APIs",
        "Firebase",
      ],
         github:
        "https://github.com/Prashant9155/deployment-control-panel",
      live:
        "https://deployment-frontend-nirh.onrender.com/",
    },
  ];

  const companyProjects = [
    {
      name: "Namasvi Nexus",
      company: "Professional Experience",
      role: "Event Management Platform",
      description:
        "Built scalable admin dashboards, analytics systems, reusable UI architecture, and real-time integrations during professional collaboration.",
      tech: [
        "React.js",
        "Golang",
        "PostgreSQL",
        "Docker",
      ],
      live: "https://namasvinexus.com",
    },

    {
      name: "Elympiad",
      company: "Professional Experience",
      role: "Real-Time Quiz Platform",
      description:
        "Developed high-performance real-time quiz interfaces with WebSocket leaderboards and optimized rendering systems for large participant traffic.",
      tech: [
        "React.js",
        "Node.js",
        "WebSocket",
        "PostgreSQL",
      ],
      live: "https://admin.elympiad.com/",
    },
  ];

  return (
    <section
      id="projects"
      className="mt-28 lg:mt-36"
    >
      {/* Header */}
      <div className="max-w-3xl">
        <p className="text-cyan-300 text-sm font-medium">
          Selected Work
        </p>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-3 leading-tight">
          Engineering Products &
          <span className="block bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Production Systems
          </span>
        </h2>

        <p className="text-slate-400 mt-6 text-base sm:text-lg leading-relaxed">
          Full-stack platforms, deployment infrastructure,
          real-time systems, scalable frontend architecture,
          and cloud-focused engineering experiences built
          across personal and professional projects.
        </p>
      </div>

      {/* PERSONAL PROJECTS */}
      <div className="mt-14 lg:mt-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-cyan-300 text-sm font-medium">
              Personal Projects
            </p>

            <h3 className="text-2xl sm:text-3xl font-black text-white mt-2">
              Featured Engineering Work
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
          {personalProjects.map((project) => (
            <div
              key={project.name}
              className="group relative bg-slate-900/50 border border-slate-800 rounded-[28px] p-6 sm:p-6 lg:p-7 backdrop-blur-xl hover:border-cyan-500/20 transition-all duration-300 overflow-hidden"
            >
              {/* Glow */}
              <div className="absolute top-0 right-0 h-40 w-40 bg-cyan-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <div className="relative z-10">
                {/* Top */}
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <div className="inline-flex px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs mb-4">
                      {project.badge}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-white">
                      {project.name}
                    </h3>

                    <p className="text-cyan-300 mt-2 text-sm sm:text-base">
                      {project.role}
                    </p>
                  </div>

                  <div className="hidden sm:flex h-14 w-14 rounded-2xl bg-slate-950 border border-slate-800 items-center justify-center text-2xl">
                    🚀
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 leading-relaxed mt-6 text-sm sm:text-base">
                  {project.description}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-2.5 mt-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-2 rounded-full bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4 mt-6">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-2xl bg-linear-to-r from-blue-600 to-cyan-500 text-white text-sm font-medium hover:scale-[1.02] transition-all duration-300"
                    >
                      GitHub Repository
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-2xl border border-slate-700 text-slate-200 hover:border-cyan-500 hover:text-cyan-300 transition-all duration-300 text-sm"
                    >
                      Live Platform
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PROFESSIONAL PROJECTS */}
      <div className="mt-20 lg:mt-24">
        <div className="mb-8">
          <p className="text-cyan-300 text-sm font-medium">
            Professional Experience
          </p>

          <h3 className="text-2xl sm:text-3xl font-black text-white mt-2">
            Projects Built During Previous Roles
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {companyProjects.map((project) => (
            <div
              key={project.name}
              className="bg-slate-900/40 border border-slate-800 rounded-[26px] p-6 sm:p-7 backdrop-blur-xl"
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <div className="inline-flex px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs mb-4">
                    {project.company}
                  </div>

                  <h3 className="text-2xl font-black text-white">
                    {project.name}
                  </h3>

                  <p className="text-cyan-300 mt-2 text-sm sm:text-base">
                    {project.role}
                  </p>
                </div>

                <div className="hidden sm:flex h-12 w-12 rounded-2xl bg-slate-950 border border-slate-800 items-center justify-center">
                  💼
                </div>
              </div>

              <p className="text-slate-400 leading-relaxed mt-6 text-sm sm:text-base">
                {project.description}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-2.5 mt-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 rounded-full bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-8">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-all duration-300 text-sm sm:text-base"
                >
                  Visit Platform →

                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;

