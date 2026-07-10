"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("../config/multer"));
const video_controller_1 = require("../controllers/video.controller");
const router = (0, express_1.Router)();
const controller = new video_controller_1.VideoController();
router.post("/videos/upload", multer_1.default.single("video"), (req, res) => controller.upload(req, res));
router.get("/videos", (req, res) => controller.list(req, res));
exports.default = router;
