import { useEffect, useState } from "react";
import axios from "axios";

import HeroSection from "../components/HeroSection";
import DeploymentForm from "../components/DeploymentForm";
import DeploymentStatus from "../components/DeploymentStatus";
import DeveloperCard from "../components/DeveloperCard";
import StatsCard from "../components/StatsCard";

function Dashboard() {
  const [formData, setFormData] = useState({
    clientName: "",
    domain: "",
    image: "",
  });

  const [deploymentId, setDeploymentId] =
    useState(null);

  const [deploymentStatus, setDeploymentStatus] =
    useState("");

  const [logs, setLogs] = useState("");

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDeploy = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:8000/api/deploy",
        formData
      );

      setDeploymentId(
        response.data.deployment._id
      );

      setDeploymentStatus(
        response.data.deployment.status
      );
    } catch (error) {
      console.log(error);

      setLoading(false);
    }
  };

  // Poll Deployment Status
  useEffect(() => {
    if (!deploymentId) return;

    const interval = setInterval(async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/status/${deploymentId}`
        );

        setDeploymentStatus(
          response.data.status
        );

        setLogs(response.data.logs);

        if (
          response.data.status === "Completed" ||
          response.data.status === "Failed"
        ) {
          setLoading(false);

          clearInterval(interval);
        }
      } catch (error) {
        console.log(error);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [deploymentId]);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        <HeroSection />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="lg:col-span-2 space-y-8">
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

          {/* Right Sidebar */}
          <div className="space-y-8">
            <DeveloperCard />

            <StatsCard />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between gap-4 text-slate-400 text-sm">
          <p>
            © 2026 Deployment Control Panel • Built by
            Prashant Kumar
          </p>

          <div className="flex gap-6">
            <span>React.js</span>
            <span>Node.js</span>
            <span>Docker</span>
            <span>AWS</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;