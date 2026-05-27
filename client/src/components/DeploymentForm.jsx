function DeploymentForm({
  formData,
  handleChange,
  handleDeploy,
  loading,
}) {
  return (
    <div className="lg:col-span-2 bg-slate-900/70 border border-slate-800 rounded-3xl p-8 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white">
            Create New Deployment
          </h2>

          <p className="text-slate-400 mt-2">
            Deploy containerized applications with async queue
            processing.
          </p>
        </div>

        <div className="px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm">
          Production Ready
        </div>
      </div>

      <form onSubmit={handleDeploy} className="space-y-6">
        <div>
          <label className="text-slate-300 mb-2 block text-sm font-medium">
            Client Name
          </label>

          <input
            type="text"
            name="clientName"
            placeholder="Netflix"
            value={formData.clientName}
            onChange={handleChange}
            className="w-full bg-slate-950 text-white border border-slate-700 rounded-2xl px-5 py-4 outline-none focus:border-blue-500 transition-all"
            required
          />
        </div>

        <div>
          <label className="text-slate-300 mb-2 block text-sm font-medium">
            Domain Name
          </label>

          <input
            type="text"
            name="domain"
            placeholder="netflix.platform.com"
            value={formData.domain}
            onChange={handleChange}
            className="w-full bg-slate-950 text-white border border-slate-700 rounded-2xl px-5 py-4 outline-none focus:border-blue-500 transition-all"
            required
          />
        </div>

        <div>
          <label className="text-slate-300 mb-2 block text-sm font-medium">
            Docker Image
          </label>

          <input
            type="text"
            name="image"
            placeholder="nginx:latest"
            value={formData.image}
            onChange={handleChange}
            className="w-full bg-slate-950 text-white border border-slate-700 rounded-2xl px-5 py-4 outline-none focus:border-blue-500 transition-all"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg ${
            loading
              ? "bg-slate-700 text-slate-400 cursor-not-allowed"
              : "bg-linear-to-r from-blue-600 to-cyan-500 hover:scale-[1.01] text-white shadow-blue-500/20"
          }`}
        >
          {loading ? "Deploying..." : "Deploy Application"}
        </button>
      </form>
    </div>
  );
}

export default DeploymentForm;