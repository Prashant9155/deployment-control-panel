import mongoose from "mongoose";

const deploymentSchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
      required: true,
    },

    domain: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
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