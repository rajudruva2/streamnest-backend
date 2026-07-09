import { Router } from "express";
import { VideoController } from "../controllers/video.controller";

const router = Router();

const controller = new VideoController();

router.post("/videos", (req, res) => {
  controller.create(req, res);
});

export default router;
