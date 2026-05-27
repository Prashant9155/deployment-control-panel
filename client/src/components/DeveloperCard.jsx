function DeveloperCard() {
  return (
    <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 rounded-2xl bg-linear-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-2xl font-bold text-white">
          PK
        </div>

        <div>
          <h3 className="text-xl font-bold text-white">
            Prashant Kumar
          </h3>

          <p className="text-slate-400 text-sm">
            Frontend Developer | React.js
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-4 text-slate-300 text-sm leading-relaxed">
        <p>
          Passionate Full-Stack & Frontend Developer focused on
          scalable UI systems, async architectures, Docker
          automation, and cloud deployments.
        </p>

        <p>
          Built real-world deployment automation workflows using
          BullMQ, Redis Cloud, AWS Lambda, Docker, and MongoDB.
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <span className="px-4 py-2 rounded-xl bg-blue-600 text-white text-sm">
          Open To Work
        </span>

        <span className="px-4 py-2 rounded-xl border border-slate-700 text-slate-300 text-sm">
          Immediate Joiner
        </span>
      </div>

      <div className="mt-6 space-y-3">
        <a
          href="https://github.com/Prashant9155"
          target="_blank"
          className="block text-cyan-400 hover:text-cyan-300 transition-all text-sm"
        >
          GitHub →
        </a>

        <a
          href="https://www.linkedin.com/in/prashantkumar-sde"
          target="_blank"
          className="block text-cyan-400 hover:text-cyan-300 transition-all text-sm"
        >
          LinkedIn →
        </a>
      </div>
    </div>
  );
}

export default DeveloperCard;