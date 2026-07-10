
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import videoRoutes from "./routes/video.routes";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(
  "/uploads",
  express.static(path.join(process.cwd(), "uploads"))
);

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
