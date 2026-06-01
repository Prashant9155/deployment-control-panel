import profileImg from "../../assets/profileImg.jpeg";

function AboutSection() {
  const stats = [
    {
      label: "Experience",
      value: "3+ Years",
    },
    {
      label: "Projects",
      value: "10+",
    },
    {
      label: "Core Stack",
      value: "React.js",
    },
    {
      label: "Focus",
      value: "AI + Cloud",
    },
  ];

  const strengths = [
    "Scalable frontend architecture",
    "Admin dashboards and product systems",
    "Real-time interfaces and WebSocket flows",
    "Deployment, async queues, and cloud workflows",
  ];

  const timeline = [
    {
      period: "July 2023",
      title: "Started As Frontend Intern",
      description:
        "Joined Indic Arena Technology after MCA and began working on production UI systems.",
    },
    {
      period: "2023 - 2025",
      title: "Frontend Engineer",
      description:
        "Built dashboards, event platforms, real-time quiz interfaces, reusable components, and backend-connected workflows.",
    },
    {
      period: "2025 - Present",
      title: "Full Stack And AI Projects",
      description:
        "Expanded into deployment systems, async architecture, cloud engineering, and AI-powered product workflows.",
    },
  ];

  const learning = [
    "AI Workflows",
    "Agent Systems",
    "Cloud Architecture",
    "System Design",
  ];

  return (
    <section id="about" className="mt-28 lg:mt-36">
      <div className="grid grid-cols-1 xl:grid-cols-[0.88fr_1.12fr] gap-10 lg:gap-14 items-start">
        <div className="xl:sticky xl:top-24">
          <p className="text-cyan-300 text-sm font-medium">About Me</p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-3 leading-tight">
            Product-minded engineer building
            <span className="block bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              cloud-ready systems
            </span>
          </h2>

          <p className="text-slate-400 mt-6 text-base sm:text-lg leading-relaxed max-w-2xl">
            I am a frontend-focused software engineer with full-stack and AI
            exploration, shaped by real product work, deployment automation,
            and scalable dashboard systems.
          </p>

          <div className="relative overflow-hidden mt-10 bg-slate-900/40 border border-slate-800/70 rounded-[28px]">
            <img
              src={profileImg}
              alt="Prashant Kumar"
              className="h-105 sm:h-125 xl:h-115 w-full object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-950 via-slate-950/80 to-transparent p-6 sm:p-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-xs sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                Open To Work
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-white mt-4">
                Prashant Kumar
              </h3>

              <p className="text-cyan-300 mt-3 text-sm sm:text-base leading-relaxed">
                Frontend Engineer | Full Stack And AI Engineering Explorer
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 lg:space-y-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="bg-slate-900/40 border border-slate-800/70 rounded-2xl p-4 sm:p-5"
              >
                <p className="text-slate-500 text-xs sm:text-sm">
                  {item.label}
                </p>

                <h3 className="text-white font-black mt-2 text-base sm:text-lg leading-snug">
                  {item.value}
                </h3>
              </div>
            ))}
          </div>

          <div className="bg-slate-900/30 border border-slate-800/70 rounded-[28px] p-6 sm:p-8">
            <p className="text-cyan-300 text-sm font-medium">
              Engineering Profile
            </p>

            <h3 className="text-3xl sm:text-4xl font-black text-white mt-4 leading-tight">
              From frontend product work to infrastructure-focused builds
            </h3>

            <div className="space-y-5 mt-7 text-slate-300 leading-relaxed text-sm sm:text-base lg:text-lg">
              <p>
                My background combines React.js product engineering with
                hands-on full-stack projects. I have worked on admin dashboards,
                event platforms, real-time quiz systems, reusable UI patterns,
                and backend-connected application flows.
              </p>

              <p>
                This project reflects the direction I am growing into: building
                polished interfaces around real engineering ideas like Docker
                deployments, BullMQ workers, Redis queues, MongoDB persistence,
                and serverless AWS Lambda workflows.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-slate-900/30 border border-slate-800/70 rounded-[28px] p-6 sm:p-7">
              <p className="text-cyan-300 text-sm font-medium">
                Strengths
              </p>

              <div className="space-y-3 mt-6">
                {strengths.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-sm sm:text-base text-slate-300"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/30 border border-slate-800/70 rounded-[28px] p-6 sm:p-7">
              <p className="text-cyan-300 text-sm font-medium">
                Current Focus
              </p>

              <h4 className="text-2xl font-black text-white mt-4">
                Learning by building production-style systems
              </h4>

              <div className="flex flex-wrap gap-2.5 mt-6">
                {learning.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-2 rounded-full bg-slate-950/70 border border-slate-800 text-xs sm:text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-900/30 border border-slate-800/70 rounded-[28px] p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
              <div>
                <p className="text-cyan-300 text-sm font-medium">
                  Timeline
                </p>

                <h3 className="text-3xl sm:text-4xl font-black text-white mt-4 leading-tight">
                  Career Progression
                </h3>
              </div>

              <p className="text-slate-500 text-sm">
                July 2023 - Present
              </p>
            </div>

            <div className="mt-8 space-y-6">
              {timeline.map((item, index) => (
                <div key={item.period} className="grid grid-cols-[24px_1fr] gap-4">
                  <div className="flex flex-col items-center">
                    <span className="mt-2 h-3 w-3 rounded-full bg-cyan-400"></span>
                    {index !== timeline.length - 1 && (
                      <span className="mt-3 w-px flex-1 bg-slate-800"></span>
                    )}
                  </div>

                  <div className="pb-2">
                    <p className="text-cyan-300 text-sm font-medium">
                      {item.period}
                    </p>

                    <h4 className="text-xl font-bold text-white mt-2">
                      {item.title}
                    </h4>

                    <p className="text-slate-400 leading-relaxed mt-3 text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900/30 border border-slate-800/70 rounded-[28px] p-6 sm:p-7">
              <p className="text-slate-500 text-sm">Education</p>

              <h4 className="text-xl font-bold text-white mt-3">
                Master of Computer Applications
              </h4>

              <p className="text-slate-400 mt-3">
                Lakshmi Narain College of Technology
              </p>

              <p className="text-slate-500 mt-2 text-sm">2021 - 2023</p>
            </div>

            <div className="bg-slate-900/30 border border-slate-800/70 rounded-[28px] p-6 sm:p-7">
              <p className="text-slate-500 text-sm">Foundation</p>

              <h4 className="text-xl font-bold text-white mt-3">
                Bachelor of Science in Mathematics
              </h4>

              <p className="text-slate-400 mt-3">BRABU University</p>

              <p className="text-slate-500 mt-2 text-sm">2016 - 2019</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
