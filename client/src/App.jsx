import { useEffect, useState } from "react";
import axios from "axios";

function App() {
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

        // Stop polling after completion
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

  // Dynamic Status Colors
  const getStatusColor = () => {
    switch (deploymentStatus) {
      case "Pending":
        return "text-yellow-500";

      case "Running":
        return "text-blue-500";

      case "Completed":
        return "text-green-600";

      case "Failed":
        return "text-red-600";

      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Deployment Control Panel
        </h1>

        <form
          onSubmit={handleDeploy}
          className="space-y-5"
        >
          <input
            type="text"
            name="clientName"
            placeholder="Client Name"
            value={formData.clientName}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            type="text"
            name="domain"
            placeholder="Domain"
            value={formData.domain}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            type="text"
            name="image"
            placeholder="Docker Image"
            value={formData.image}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 rounded-xl text-white font-semibold transition duration-300 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Deploying..." : "Deploy"}
          </button>
        </form>

        {deploymentStatus && (
          <div className="mt-8 p-5 border rounded-xl bg-gray-50">
            <h2 className="text-2xl font-bold mb-4">
              Deployment Status
            </h2>

            <p className="text-lg">
              <span className="font-bold">
                Status:
              </span>{" "}
              <span
                className={`font-semibold ${getStatusColor()}`}
              >
                {deploymentStatus}
              </span>
            </p>

            <p className="mt-3 text-gray-700">
              {logs}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;