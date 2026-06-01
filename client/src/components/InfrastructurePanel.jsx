function InfrastructurePanel() {
  const techStack = [
    {
      name: "React.js",
      link: "https://react.dev",
    },
    {
      name: "Node.js",
      link: "https://nodejs.org/en/docs",
    },
    {
      name: "Docker",
      link: "https://docs.docker.com",
    },
    {
      name: "BullMQ",
      link: "https://docs.bullmq.io",
    },
    {
      name: "Redis",
      link: "https://redis.io/docs",
    },
    {
      name: "MongoDB",
      link: "https://www.mongodb.com/docs",
    },
    {
      name: "AWS Lambda",
      link: "https://docs.aws.amazon.com/lambda",
    },
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-12 xl:gap-20 items-center">
      {/* LEFT CONTENT */}
      <div>
        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 text-xs sm:text-sm mb-6 lg:mb-8">
          <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>

          Production Deployment Infrastructure
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black leading-[1.02] tracking-tight text-white">
          Cloud Deployment
          <span className="block bg-linear-to-r from-blue-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent">
            Automation Platform
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 lg:mt-8 text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
          Full-stack deployment workflow system powered by
          React.js, Docker, BullMQ, Redis Cloud, MongoDB,
          and AWS Lambda with scalable async infrastructure
          orchestration.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 lg:mt-10">
          <a
            href="#projects"
            className="w-full sm:w-auto text-center px-6 py-3.5 rounded-2xl bg-linear-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:scale-[1.02] transition-all duration-300"
          >
            Explore Projects
          </a>

          {/* <a
            href="#architecture"
            className="w-full sm:w-auto text-center px-6 py-3.5 rounded-2xl border border-slate-700 text-slate-200 hover:border-cyan-500 hover:text-cyan-300 transition-all duration-300"
          >
            System Architecture
          </a> */}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2.5 mt-8 lg:mt-10">
          {techStack.map((tech) => (
            <a
              key={tech.name}
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-full bg-slate-900/70 border border-slate-800 text-xs sm:text-sm text-slate-200 hover:border-cyan-500/40 hover:text-cyan-300 transition-all duration-300"
            >
              {tech.name}
            </a>
          ))}
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="relative">
        {/* Glow */}
        <div className="absolute inset-0 bg-cyan-500/5 blur-3xl rounded-full"></div>

        {/* Terminal */}
        <div className="relative bg-black/80 border border-slate-800 rounded-[28px] overflow-hidden shadow-2xl backdrop-blur-xl">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-slate-800 bg-slate-950/90">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>

              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>

              <div className="h-3 w-3 rounded-full bg-green-500"></div>

              <span className="ml-4 text-slate-500 text-xs sm:text-sm font-medium">
                deployment-runtime.sh
              </span>
            </div>

            <div className="flex items-center gap-2 text-green-300 text-xs sm:text-sm">
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>

              Live
            </div>
          </div>

          {/* Terminal Logs */}
          <div className="p-5 sm:p-6 font-mono text-xs sm:text-sm space-y-3 text-green-400">
            <div className="flex gap-3">
              <span>$</span>

              <p>docker build production-image</p>
            </div>

            <div className="flex gap-3">
              <span>$</span>

              <p>redis queue connected...</p>
            </div>

            <div className="flex gap-3">
              <span>$</span>

              <p>bullmq worker processing deployment...</p>
            </div>

            <div className="flex gap-3">
              <span>$</span>

              <p>aws lambda invoked successfully...</p>
            </div>

            <div className="flex gap-3 text-cyan-300">
              <span>$</span>

              <p>deployment completed successfully 🚀</p>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-3 border-t border-slate-800">
            {[
              {
                label: "Deployments",
                value: "128+",
              },
              {
                label: "Containers",
                value: "24",
              },
              {
                label: "Success",
                value: "99.9%",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="p-4 sm:p-5 border-r last:border-r-0 border-slate-800"
              >
                <p className="text-slate-500 text-[10px] sm:text-xs uppercase tracking-wider">
                  {item.label}
                </p>

                <h3 className="text-lg sm:text-xl font-black text-white mt-2">
                  {item.value}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfrastructurePanel;
