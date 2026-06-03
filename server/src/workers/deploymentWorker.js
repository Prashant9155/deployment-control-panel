import { Worker } from "bullmq";
import IORedis from "ioredis";
import Deployment from "../models/Deployment.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { exec } from "child_process";
import { promisify } from "util";
import { v4 as uuidv4 } from "uuid";
import { LambdaClient, InvokeCommand } from "@aws-sdk/client-lambda";

dotenv.config();

if (mongoose.connection.readyState === 0) {
  mongoose.connect(process.env.MONGO_URI);
}

const execAsync = promisify(exec);

const connection = new IORedis(process.env.REDIS_URL, {
  maxRetriesPerRequest: null,
});

const lambdaClient = new LambdaClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
});

const deploymentRuntime =
// console.log("Runtime:", deploymentRuntime);
  process.env.DEPLOYMENT_RUNTIME ||
  (process.env.NODE_ENV === "production" ? "lambda" : "docker");

const invokeDeploymentLambda = async ({ clientName, image, deploymentId }) => {
  const command = new InvokeCommand({
    FunctionName: process.env.LAMBDA_NAME,
    InvocationType: "RequestResponse",
    Payload: JSON.stringify({
      clientName,
      image,
      deploymentId,
    }),
  });

  return lambdaClient.send(command);
};

console.log("Worker Started...");

const worker = new Worker(
  "deploymentQueue",
  async (job) => {
    console.log(job.data);
    const { deploymentId, clientName, image } = job.data;

    try {
      console.log("Starting Deployment...");
      await Deployment.findByIdAndUpdate(deploymentId, {
        status: "Running",
        logs:
          deploymentRuntime === "lambda"
            ? "Starting production deployment with AWS Lambda..."
            : "Pulling Docker image...",
      });

      if (deploymentRuntime === "lambda") {
        const lambdaResponse = await invokeDeploymentLambda({
          clientName,
          image,
          deploymentId,
        });

        console.log("Lambda Response:", lambdaResponse);

        await Deployment.findByIdAndUpdate(deploymentId, {
          status: "Completed",
          logs: "Production deployment triggered with AWS Lambda",
        });

        console.log("Deployment Completed");
        return;
      }

      // Pull Docker Image
      await execAsync(`docker pull ${image}`);

      // Unique Container Name
      const containerName = `${clientName.toLowerCase()}-${uuidv4().slice(0, 5)}`;

      // Random Port
      const randomPort = Math.floor(Math.random() * 10000) + 10000;

      // Run Docker Container
      await execAsync(`
          docker run -d \
          --name ${containerName} \
          -p ${randomPort}:80 \
             ${image}
      `);

      await Deployment.findByIdAndUpdate(deploymentId, {
        status: "Completed",
        logs: `Container deployed on port ${randomPort}`,
      });

      console.log("Deployment Completed");
    } catch (error) {
      console.log(error);

      await Deployment.findByIdAndUpdate(deploymentId, {
        status: "Failed",
        logs: error.message,
      });
    }
  },
  {
    connection,
  },
);

worker.on("completed", (job) => {
  console.log(`Job ${job.id} completed`);
});

worker.on("failed", (job, err) => {
  console.log(`Job failed: ${err.message}`);
});
