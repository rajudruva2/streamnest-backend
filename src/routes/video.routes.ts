import { Router } from "express";
import upload from "../config/multer";
import { VideoController } from "../controllers/video.controller";

const router = Router();

const controller = new VideoController();

router.post(
  "/videos/upload",
  upload.single("video"),
  (req, res) => controller.upload(req, res)
);

router.get(
  "/videos",
  (req, res) => controller.list(req, res)
);

export default router;
