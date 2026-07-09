
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

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

export default app;
