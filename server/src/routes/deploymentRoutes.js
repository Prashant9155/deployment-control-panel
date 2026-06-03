import express from "express";
import Deployment from "../models/Deployment.js";
import { deploymentQueue } from "../queue/deploymentQueue.js";

const router = express.Router();

router.post("/deploy", async (req, res) => {
  try {
    const {
      projectName,
      repositoryUrl,
      branch,
      buildCommand,
      startCommand,
      environmentVariables,

      clientName,
      domain,
      image,
    } = req.body;

    const deployment = await Deployment.create({
      projectName,
      repositoryUrl,
      branch,
      buildCommand,
      startCommand,
      environmentVariables,

      clientName,
      domain,
      image,

      status: "Pending",
    });

    console.log("API HIT");
    console.log(req.body);

    await deploymentQueue.add("deploy", {
      deploymentId: deployment._id,

      projectName,
      repositoryUrl,
      branch,
      buildCommand,
      startCommand,

      clientName,
      image,
    });

    res.status(200).json({
      success: true,
      deployment,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Deployment failed",
    });
  }
});

router.get("/status/:id", async (req, res) => {
  try {
    res.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    res.set("Pragma", "no-cache");
    res.set("Expires", "0");
    res.set("Surrogate-Control", "no-store");

    const deployment = await Deployment.findById(req.params.id);

    if (!deployment) {
      return res.status(404).json({
        success: false,
        message: "Deployment not found",
      });
    }

    res.status(200).json(deployment);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Error fetching deployment status",
    });
  }
});

export default router;
