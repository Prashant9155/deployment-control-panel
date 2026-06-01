function ArchitectureSection() {
  const workflow = [
    "React Frontend",
    "Express API",
    "BullMQ Queue",
    "Worker Process",
    "Docker Runtime",
    "AWS Lambda",
  ];

  const decisions = [
    {
      title: "Why BullMQ?",
      answer:
        "BullMQ was used for async deployment processing to avoid blocking API requests and to create scalable background job execution workflows.",
    },

    {
      title: "Why Redis Cloud?",
      answer:
        "Redis Cloud was selected as the queue backend because BullMQ depends on Redis for fast distributed job processing and lightweight real-time task management.",
    },

    {
      title: "Why Docker?",
      answer:
        "Docker enabled isolated deployment environments and containerized runtime execution similar to real-world cloud deployment systems.",
    },

    {
      title: "Why AWS Lambda?",
      answer:
        "AWS Lambda was integrated for event-driven serverless execution without maintaining dedicated infrastructure servers.",
    },

    {
      title: "Why Async Architecture?",
      answer:
        "Deployment tasks are long-running operations. Async queues improve reliability, scalability, and user experience by separating request handling from execution.",
    },

    {
      title: "How Was Infrastructure Cost Optimized?",
      answer:
        "The platform was intentionally designed using free-tier cloud services, lightweight infrastructure, serverless functions, and efficient async processing to avoid operational costs during development.",
    },
  ];

  return (
    <section
      id="architecture"
      className="mt-28 lg:mt-36"
    >
      {/* Header */}
      <div className="max-w-4xl">
        <p className="text-cyan-300 text-sm font-medium">
          System Design
        </p>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-3 leading-tight">
          Engineering Architecture &
          <span className="block bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Infrastructure Decisions
          </span>
        </h2>

        <p className="text-slate-400 mt-6 text-base sm:text-lg leading-relaxed max-w-3xl">
          Production-inspired deployment architecture focused on
          async workflows, scalable infrastructure orchestration,
          and zero-cost cloud engineering using modern full-stack
          technologies and serverless infrastructure patterns.
        </p>
      </div>

      {/* Workflow */}
      <div className="mt-14 lg:mt-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-cyan-300 text-sm font-medium">
              Deployment Workflow
            </p>

            <h3 className="text-2xl sm:text-3xl font-black text-white mt-2">
              Infrastructure Execution Flow
            </h3>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 lg:gap-4">
          {workflow.map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-3"
            >
              <div className="px-4 py-3 rounded-2xl bg-slate-900/50 border border-slate-800 text-sm sm:text-base text-slate-200 backdrop-blur-xl">
                {item}
              </div>

              {index !== workflow.length - 1 && (
                <div className="text-cyan-300 text-xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Engineering Decisions */}
      <div className="mt-20 lg:mt-24">
        <div className="mb-10">
          <p className="text-cyan-300 text-sm font-medium">
            Engineering Decisions
          </p>

          <h3 className="text-2xl sm:text-3xl font-black text-white mt-2">
            Why These Technologies Were Chosen
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {decisions.map((item) => (
            <div
              key={item.title}
              className="bg-slate-900/30 border border-slate-800/70 rounded-[26px] p-6 sm:p-7 backdrop-blur-xl"
            >
              <h4 className="text-xl font-bold text-white">
                {item.title}
              </h4>

              <p className="text-slate-400 leading-relaxed mt-4 text-sm sm:text-base">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Cost Optimization */}
      <div className="mt-20 lg:mt-24">
        <div className="relative overflow-hidden bg-linear-to-br from-slate-900/60 to-slate-950 border border-cyan-500/10 rounded-4xl p-7 sm:p-10">
          {/* Glow */}
          <div className="absolute top-0 right-0 h-72 w-72 bg-cyan-500/5 blur-3xl rounded-full"></div>

          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-xs sm:text-sm mb-6">
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>

              Zero Infrastructure Cost Engineering
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Built Without Paid Infrastructure
            </h3>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mt-6 max-w-3xl">
              All personal infrastructure systems were designed
              intentionally around free-tier cloud services,
              serverless architecture, lightweight queues,
              efficient async processing, and optimized deployment
              workflows to simulate production-grade systems
              without operational infrastructure cost.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                "Free-Tier Cloud Services",
                "Serverless Execution",
                "Async Queue Optimization",
                "Lightweight Infrastructure",
                "Scalable Workflow Design",
              ].map((item) => (
                <div
                  key={item}
                  className="px-4 py-2 rounded-full bg-slate-950/70 border border-slate-800 text-sm text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArchitectureSection;

