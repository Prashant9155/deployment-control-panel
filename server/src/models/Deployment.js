import mongoose from "mongoose";

const deploymentSchema = new mongoose.Schema(
  {
    // Legacy fields
    clientName: {
      type: String,
    },

    domain: {
      type: String,
    },

    image: {
      type: String,
    },

    // New DeployFlow fields
    projectName: {
      type: String,
    },

    repositoryUrl: {
      type: String,
    },

    branch: {
      type: String,
      default: "main",
    },

    buildCommand: {
      type: String,
    },

    startCommand: {
      type: String,
    },

    environmentVariables: {
      type: Object,
      default: {},
    },

    status: {
      type: String,
      enum: ["Pending", "Running", "Completed", "Failed"],
      default: "Pending",
    },

    logs: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Deployment = mongoose.model(
  "Deployment",
  deploymentSchema
);

export default Deployment;