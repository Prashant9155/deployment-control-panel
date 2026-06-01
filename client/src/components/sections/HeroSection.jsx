
function HeroSection() {
  const techStack = [
    "React.js",
    "Node.js",
    "Docker",
    "Redis",
    "BullMQ",
    "MongoDB",
    "AWS Lambda",
  ];

  const logs = [
    "Initializing deployment workflow...",
    "Connecting Redis worker...",
    "Docker container started...",
    "Provisioning cloud resources...",
    "Deployment completed successfully 🚀",
  ];

  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      {/* Background Glow */}
      {/* <div className="absolute top-0 left- h-96 w-full bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 h-96 w-full bg-blue-500/10 blur-3xl rounded-full"></div> */}

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 text-sm mb-8">
            <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>

            Open To Work • Frontend Engineer • Immediate Joiner
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight text-white">
            Prashant Kumar
          </h1>

          <div className="mt-4 text-2xl md:text-3xl font-bold bg-linear-to-r from-blue-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent">
            Frontend Engineer building scalable cloud-ready systems.
          </div>

          {/* Description */}
          <p className="mt-8 text-slate-300 text-lg leading-relaxed max-w-2xl">
            Specialized in React.js, scalable UI architecture,
            deployment automation, async workflows, Docker systems,
            and modern full-stack engineering with real-world
            production-focused applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#projects"
              className="px-7 py-4 rounded-2xl bg-linear-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:scale-[1.03] transition-all duration-300 shadow-lg shadow-cyan-500/20"
            >
              View Projects
            </a>

            <a
              href="https://www.linkedin.com/in/prashantkumar-sde"
              target="_blank"
              className="px-7 py-4 rounded-2xl border border-slate-700 text-slate-200 hover:border-cyan-500 hover:text-cyan-300 transition-all duration-300"
            >
              Contact Me
            </a>

            <button className="px-7 py-4 rounded-2xl bg-slate-900 border border-slate-700 text-slate-200 hover:bg-slate-800 transition-all duration-300">
              Download Resume
            </button>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14">
            {[
              {
                label: "Experience",
                value: "3+ Years",
              },
              {
                label: "Projects",
                value: "10+",
              },
              {
                label: "Tech Stack",
                value: "20+",
              },
              {
                label: "Deployments",
                value: "128+",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-slate-900/60 border border-slate-800 rounded-3xl p-5 backdrop-blur-xl hover:-translate-y-1 transition-all duration-300"
              >
                <p className="text-slate-400 text-sm">
                  {item.label}
                </p>

                <h3 className="text-2xl font-bold text-cyan-300 mt-2">
                  {item.value}
                </h3>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 mt-10">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-200 text-sm hover:border-cyan-500/40 hover:text-cyan-300 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">
          {/* Main Card */}
          <div className="relative bg-slate-900/70 border border-slate-800 rounded-4xl overflow-hidden shadow-2xl backdrop-blur-2xl">
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-slate-950/70">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>

                <span className="ml-4 text-slate-400 text-sm">
                  production-deployment.sh
                </span>
              </div>

              <div className="text-green-400 text-sm font-semibold">
                LIVE
              </div>
            </div>

            {/* Terminal Logs */}
            <div className="p-6 space-y-4 font-mono text-sm">
              {logs.map((log, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-green-400"
                >
                  <span>$</span>

                  <span className="text-slate-300">
                    {log}
                  </span>
                </div>
              ))}
            </div>

            {/* Architecture Preview */}
            <div className="border-t border-slate-800 p-6">
              <h3 className="text-white font-bold text-lg mb-5">
                System Architecture
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "React Frontend",
                  "Express API",
                  "BullMQ Queue",
                  "Docker Engine",
                  "MongoDB",
                  "AWS Lambda",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3 text-sm text-slate-300 hover:border-cyan-500/30 transition-all duration-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating Cards */}
          {/* <div className="absolute -top-6 -right-6 bg-green-500/10 border border-green-500/20 rounded-2xl px-5 py-4 backdrop-blur-xl shadow-xl">
            <p className="text-green-300 text-sm">
              Deployment Success
            </p>

            <h3 className="text-2xl font-black text-white mt-1">
              99.9%
            </h3>
          </div> */}

          {/* <div className="absolute -bottom-6 -left-6 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl px-5 py-4 backdrop-blur-xl shadow-xl">
            <p className="text-cyan-300 text-sm">
              Active Containers
            </p>

            <h3 className="text-2xl font-black text-white mt-1">
              24
            </h3>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

