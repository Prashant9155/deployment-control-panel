function TechStackSection() {
  const techStack = [
    {
      name: "React.js",
      category: "Frontend",
      link: "https://react.dev",
    },

    {
      name: "Node.js",
      category: "Backend",
      link: "https://nodejs.org/en/docs",
    },

    {
      name: "Docker",
      category: "DevOps",
      link: "https://docs.docker.com",
    },

    {
      name: "MongoDB",
      category: "Database",
      link: "https://www.mongodb.com/docs",
    },

    {
      name: "BullMQ",
      category: "Queue System",
      link: "https://docs.bullmq.io",
    },

    {
      name: "Redis",
      category: "Caching",
      link: "https://redis.io/docs",
    },

    {
      name: "AWS Lambda",
      category: "Cloud",
      link: "https://docs.aws.amazon.com/lambda",
    },

    {
      name: "Tailwind CSS",
      category: "Styling",
      link: "https://tailwindcss.com/docs",
    },

    {
      name: "Express.js",
      category: "Backend",
      link: "https://expressjs.com",
    },

    {
      name: "PostgreSQL",
      category: "Database",
      link: "https://www.postgresql.org/docs",
    },

    {
      name: "Firebase",
      category: "Backend Service",
      link: "https://firebase.google.com/docs",
    },

    {
      name: "TypeScript",
      category: "Language",
      link: "https://www.typescriptlang.org/docs",
    },
  ];

  return (
    <section
      id="techstack"
      className="mt-28"
    >
      {/* Heading */}
      <div className="mb-14">
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 text-sm mb-6">
          <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>

          Production Engineering Stack
        </div>

        <h2 className="text-5xl md:text-6xl font-black leading-tight text-white">
          Technologies I Use
        </h2>

        <p className="text-slate-400 mt-6 text-lg leading-relaxed max-w-3xl">
          Modern frontend, backend, cloud, DevOps, and infrastructure
          technologies used to build scalable production-grade
          applications and deployment workflows.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {techStack.map((tech) => (
          <a
            key={tech.name}
            href={tech.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-slate-900/60 border border-slate-800 rounded-3xl p-5 md:p-6 shadow-xl hover:-translate-y-1.5 hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-xl overflow-hidden"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-linear-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-start justify-between">
                <p className="text-slate-500 text-sm">
                  {tech.category}
                </p>

                <span className="text-slate-600 group-hover:text-cyan-300 transition-all duration-300">
                  ↗
                </span>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-white mt-5 group-hover:text-cyan-300 transition-all duration-300">
                {tech.name}
              </h3>
            </div>
          </a>
        ))}
      </div>

      {/* Bottom Info */}
      <div className="mt-12 text-slate-500 text-sm">
        Click any technology to explore its official documentation.
      </div>
    </section>
  );
}

export default TechStackSection;

