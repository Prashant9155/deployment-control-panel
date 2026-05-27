import express from "express";
import Deployment from "../models/Deployment.js";
import { deploymentQueue } from "../queue/deploymentQueue.js";

const router = express.Router();

router.post("/deploy", async (req, res) => {
  try {
    const { clientName, domain, image } = req.body;

    const deployment = await Deployment.create({
      clientName,
      domain,
      image,
      status: "Pending",
    });

    console.log("API HIT");
    console.log(req.body);

    console.log("Adding Job To Queue");
    await deploymentQueue.add("deploy", {
      deploymentId: deployment._id,
      clientName,
      image,
    });

    console.log("Job Added");

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
    const deployment = await Deployment.findById(req.params.id);

    res.json(deployment);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching deployment status",
    });
  }
});

export default router;
