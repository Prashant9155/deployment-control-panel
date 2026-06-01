import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import DeploymentSection from "../components/sections/DeploymentSection";
import AboutSection from "../components/sections/AboutSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import TechStackSection from "../components/sections/TechStackSection";
import ArchitectureSection from "../components/sections/ArchitectureSection";

function Dashboard() {
  const [formData, setFormData] = useState({
    projectName: "",
    repositoryUrl: "",
    branch: "main",
    buildCommand: "npm run build",
    startCommand: "npm start",

    clientName: "",
    image: "nginx:latest",
  });

  const [deploymentId, setDeploymentId] = useState(null);

  const [deploymentStatus, setDeploymentStatus] = useState("");

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

      const payload = {
        ...formData,

        clientName: formData.projectName,
        image: "nginx:latest",
      };

      const response = await axios.post(
        "http://localhost:8000/api/deploy",
        payload,
      );

      setDeploymentId(response.data.deployment._id);

      setDeploymentStatus(response.data.deployment.status);
    } catch (error) {
      console.log(error);

      setLoading(false);
    }
  };

  useEffect(() => {
    if (!deploymentId) return;

    const interval = setInterval(async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/status/${deploymentId}`,
        );

        setDeploymentStatus(response.data.status);

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
    <>
      <Navbar />

      <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-black text-white p-6">
        <div className="max-w-7xl mx-auto">
          <DeploymentSection
            formData={formData}
            handleChange={handleChange}
            handleDeploy={handleDeploy}
            loading={loading}
            deploymentStatus={deploymentStatus}
            logs={logs}
          />
          <ProjectsSection />
          <ArchitectureSection />
          <TechStackSection />
          <AboutSection />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
