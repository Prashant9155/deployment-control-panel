function DeploymentStatus({
  deploymentStatus,
  logs,
}) {
  if (!deploymentStatus) return null;

  const getStatusStyles = () => {
    switch (deploymentStatus) {
      case "Pending":
        return {
          text: "text-yellow-300",
          badge:
            "bg-yellow-500/20 border-yellow-500/30",
          progress: "w-[30%] bg-yellow-400",
        };

      case "Running":
        return {
          text: "text-blue-300",
          badge:
            "bg-blue-500/20 border-blue-500/30",
          progress: "w-[70%] bg-blue-500",
        };

      case "Completed":
        return {
          text: "text-green-300",
          badge:
            "bg-green-500/20 border-green-500/30",
          progress: "w-full bg-green-500",
        };

      case "Failed":
        return {
          text: "text-red-300",
          badge:
            "bg-red-500/20 border-red-500/30",
          progress: "w-full bg-red-500",
        };

      default:
        return {
          text: "text-slate-300",
          badge:
            "bg-slate-500/20 border-slate-500/30",
          progress: "w-[10%] bg-slate-500",
        };
    }
  };

  const styles = getStatusStyles();

  return (
    <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-white">
          Deployment Status
        </h3>

        <span
          className={`px-4 py-1 rounded-full border text-sm ${styles.badge} ${styles.text}`}
        >
          {deploymentStatus}
        </span>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-slate-300 mb-2">
          <span>Deployment Progress</span>

          <span>{deploymentStatus}</span>
        </div>

        <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${styles.progress}`}
          ></div>
        </div>
      </div>

      {/* Logs */}
      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
        <p className="text-sm text-slate-400 mb-2">
          Deployment Logs
        </p>

        <p className="text-slate-200 leading-relaxed">
          {logs || "Waiting for deployment logs..."}
        </p>
      </div>
    </div>
  );
}

export default DeploymentStatus;