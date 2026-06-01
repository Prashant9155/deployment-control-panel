function AboutSection() {
  return (
    <section
      id="about"
      className="mt-24"
    >
      <div className="mb-10">
        <h2 className="text-5xl font-extrabold bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          About Me
        </h2>

        <p className="text-slate-400 mt-4 text-lg max-w-3xl leading-relaxed">
          Frontend-focused Software Engineer with 3 years of
          experience building scalable web applications, admin
          dashboards, deployment systems, and real-time platforms
          using React.js, TypeScript, Node.js, Docker, Redis, and
          cloud technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Card */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-8 shadow-2xl backdrop-blur-xl hover:-translate-y-2 transition-all duration-300">
          <div className="flex items-center gap-5">
            <div className="h-20 w-20 rounded-3xl bg-linear-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
              PK
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                Prashant Kumar
              </h3>

              <p className="text-cyan-400 mt-1">
                Software Engineer | React.js Developer
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-5 text-slate-300 leading-relaxed">
            <p>
              Passionate about building scalable frontend systems,
              modern dashboards, async architectures, and cloud-ready
              applications with strong focus on user experience and
              clean engineering practices.
            </p>

            <p>
              Experienced in developing full-stack applications with
              React.js, Node.js, Express.js, MongoDB, Firebase, Redis,
              Docker, BullMQ, and AWS integrations.
            </p>

            <p>
              After working professionally in organizations, also
              collaborated as a freelance developer helping local
              businesses build websites, admin dashboards, and digital
              platforms.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <span className="px-5 py-2 rounded-2xl bg-blue-600 text-white text-sm shadow-lg shadow-blue-500/20">
              Open To Work
            </span>

            <span className="px-5 py-2 rounded-2xl border border-slate-700 text-slate-300 text-sm">
              Immediate Joiner
            </span>

            <span className="px-5 py-2 rounded-2xl border border-cyan-500/30 text-cyan-300 text-sm">
              Full Stack Developer
            </span>
          </div>
        </div>

        {/* Right Card */}
        <div className="grid grid-cols-2 gap-5">
          {[
            {
              title: "Experience",
              value: "3+ Years",
            },
            {
              title: "Projects",
              value: "10+",
            },
            {
              title: "Freelance Clients",
              value: "6+",
            },
            {
              title: "Tech Stack",
              value: "20+",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <p className="text-slate-400 text-sm">
                {item.title}
              </p>

              <h3 className="text-4xl font-bold text-cyan-400 mt-4">
                {item.value}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;