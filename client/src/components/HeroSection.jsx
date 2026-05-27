function HeroSection() {
  return (
    <div className="mb-10">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Deployment Control Panel
          </h1>

          <p className="text-slate-300 mt-4 text-lg max-w-2xl leading-relaxed">
            Full-Stack deployment automation platform built with React,
            Node.js, Docker, BullMQ, Redis Cloud, MongoDB, and AWS Lambda.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            {[
              "React.js",
              "Node.js",
              "Docker",
              "Redis",
              "BullMQ",
              "MongoDB",
              "AWS Lambda",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-sm text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 shadow-2xl w-full lg:w-87.5 backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>

            <span className="text-green-400 font-semibold">
              System Online
            </span>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between text-slate-300">
              <span>Docker Engine</span>

              <span className="font-bold text-green-400">
                Connected
              </span>
            </div>

            <div className="flex justify-between text-slate-300">
              <span>Redis Queue</span>

              <span className="font-bold text-cyan-400">
                Active
              </span>
            </div>

            <div className="flex justify-between text-slate-300">
              <span>AWS Lambda</span>

              <span className="font-bold text-blue-400">
                Running
              </span>
            </div>

            <div className="flex justify-between text-slate-300">
              <span>MongoDB</span>

              <span className="font-bold text-green-400">
                Connected
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;