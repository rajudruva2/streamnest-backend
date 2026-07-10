"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoController = void 0;
const video_service_1 = require("../services/video.service");
const service = new video_service_1.VideoService();
class VideoController {
    async upload(req, res) {
        try {
            if (!req.file) {
                return res.status(400).json({
                    message: "Video file is required"
                });
            }
            const video = await service.create({
                title: req.body.title,
                description: req.body.description,
                filename: req.file.filename,
                filepath: req.file.path,
                filesize: req.file.size,
                mimetype: req.file.mimetype
            });
            return res.status(201).json(video);
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "Internal Server Error"
            });
        }
    }
    async list(req, res) {
        try {
            const videos = await service.findAll();
            return res.status(200).json(videos);
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "Internal Server Error"
            });
        }
    }
}
exports.VideoController = VideoController;
