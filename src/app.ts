import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import videoRoutes from "./routes/video.routes";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.get("/api/v1/health", (_req, res) => {
  res.status(200).json({
    status: "UP",
    service: "streamnest-backend",
    version: "1.0.0",
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/v1", videoRoutes);

export default app;
