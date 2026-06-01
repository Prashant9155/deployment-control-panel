import DeploymentForm from "../DeploymentForm";
import DeploymentStatus from "../DeploymentStatus";
import InfrastructurePanel from "../InfrastructurePanel";

function DeploymentSection({
  formData,
  handleChange,
  handleDeploy,
  loading,
  deploymentStatus,
  logs,
}) {
  return (
    <section
      id="dashboard"
      className="relative overflow-hidden pt-6 sm:pt-8 lg:pt-14"
    >
      {/* Background Glow */}
      {/* <div className="absolute top-0 left-0 h-72 sm:h-96 w-72 sm:w-96 bg-cyan-500/5 blur-3xl rounded-full"></div>

      <div className="absolute right-0 top-1/3 h-72 sm:h-96 w-72 sm:w-96 bg-blue-500/5 blur-3xl rounded-full"></div> */}

      <div className="relative z-10">
        {/* HERO */}
        <InfrastructurePanel />

        {/* DEPLOYMENT AREA */}
        <div className="mt-12 lg:mt-16 space-y-8">
          <DeploymentForm
            formData={formData}
            handleChange={handleChange}
            handleDeploy={handleDeploy}
            loading={loading}
          />

          <DeploymentStatus
            deploymentStatus={deploymentStatus}
            logs={logs}
          />
        </div>
      </div>
    </section>
  );
}

export default DeploymentSection;

