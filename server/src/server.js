import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import deploymentRoutes from "./routes/deploymentRoutes.js";

dotenv.config();

console.log("RUN_WORKER =", process.env.RUN_WORKER);
console.log(
  "DEPLOYMENT_RUNTIME =",
  process.env.DEPLOYMENT_RUNTIME
);
console.log(
  "NODE_ENV =",
  process.env.NODE_ENV
);
console.log(
  "LAMBDA_NAME =",
  process.env.LAMBDA_NAME
);

const app = express();

app.disable("etag");

app.use(cors());
app.use(express.json());

app.use("/api", deploymentRoutes);

app.get("/", (req, res) => {
  res.send("Server Running");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

if (process.env.RUN_WORKER === "true") {
  import("./workers/deploymentWorker.js")
    .then(() => {
      console.log("Deployment worker enabled");
    })
    .catch((err) => {
      console.log("Failed to start deployment worker", err);
    });
}

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
