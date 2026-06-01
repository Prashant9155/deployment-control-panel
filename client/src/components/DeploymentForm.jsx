function DeploymentForm({ formData, handleChange, handleDeploy, loading }) {
  return (
    <>
      <div className="mb-6">
        <p className="text-cyan-300 text-sm font-medium">
          Interactive Deployment Runtime
        </p>

        <h2 className="text-3xl font-black text-white mt-2">
          Launch Infrastructure Workflow
        </h2>
      </div>

      <div className="bg-slate-900/60 border border-slate-800 rounded-[28px] lg:rounded-4xl p-5 sm:p-6 lg:p-8 backdrop-blur-2xl shadow-2xl">
        {/* Header */}

        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-5 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 text-xs mb-4">
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
              Deployment Runtime
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Create Deployment
            </h2>

            <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed max-w-xl">
              Trigger containerized application deployment with async queue
              processing and cloud infrastructure workflow.
            </p>
          </div>

          <div className="w-fit px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-xs sm:text-sm">
            Production Ready
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleDeploy} className="space-y-6">
          {/* Client */}
          {/* Project Name */}
          <div>
            <label className="text-slate-400 mb-2 block text-sm font-medium">
              
              Project Name
            </label>
            <input
              type="text"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              placeholder="Netflix Clone"
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white"
            />
          </div>
          {/* Git Repository */}
          <div>
            
            <label className="text-slate-400 mb-2 block text-sm font-medium">
              
              Git Repository URL
            </label>
            <input
              type="url"
              name="repositoryUrl"
              value={formData.repositoryUrl}
              onChange={handleChange}
              placeholder="https://github.com/user/project"
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white"
            />
          </div>
          {/* Branch */}
          <div>
            
            <label className="text-slate-400 mb-2 block text-sm font-medium">
              
              Branch
            </label>
            <input
              type="text"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              placeholder="main"
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white"
            />
          </div>
          {/* Build Command */}
          <div>
            
            <label className="text-slate-400 mb-2 block text-sm font-medium">
              
              Build Command
            </label>
            <input
              type="text"
              name="buildCommand"
              value={formData.buildCommand}
              onChange={handleChange}
              placeholder="npm run build"
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white"
            />
          </div>
          {/* Start Command */}
          <div>
            
            <label className="text-slate-400 mb-2 block text-sm font-medium">
              
              Start Command
            </label>
            <input
              type="text"
              name="startCommand"
              value={formData.startCommand}
              onChange={handleChange}
              placeholder="npm start"
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white"
            />
          </div>
          {/* Footer */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pt-2">
            <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-slate-500">
              <span>Docker</span>

              <span>•</span>

              <span>BullMQ</span>

              <span>•</span>

              <span>Redis Cloud</span>

              <span>•</span>

              <span>AWS Lambda</span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full lg:w-auto px-8 py-3.5 rounded-2xl font-semibold text-sm sm:text-base transition-all duration-300 ${
                loading
                  ? "bg-slate-800 text-slate-500 cursor-not-allowed"
                  : "bg-linear-to-r from-blue-600 to-cyan-500 text-white hover:scale-[1.02]"
              }`}
            >
              {loading ? "Deploying..." : "Deploy Application"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default DeploymentForm;
