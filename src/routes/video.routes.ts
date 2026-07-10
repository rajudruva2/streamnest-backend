import { Router } from "express";
import upload from "../config/multer";
import { VideoController } from "../controllers/video.controller";

const router = Router();

const controller = new VideoController();

// Existing API (keep it)
router.post("/videos", (req, res) => {
  controller.create(req, res);
});

// New Upload API (add this)
router.post(
  "/videos/upload",
  upload.single("video"),
  (req, res) => {
    controller.upload(req, res);
  }
);

export default router;
