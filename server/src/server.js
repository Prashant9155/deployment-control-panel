import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import deploymentRoutes from "./routes/deploymentRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", deploymentRoutes);

app.get("/", (req, res) => {
  res.send("Server Running");
});
app.get("/", (req, res) => {
  res.send("Backend Running");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});