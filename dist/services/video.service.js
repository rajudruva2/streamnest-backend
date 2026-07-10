"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoService = void 0;
const video_repository_1 = require("../repositories/video.repository");
class VideoService {
    repository = new video_repository_1.VideoRepository();
    async create(video) {
        return this.repository.create(video);
    }
    async findAll() {
        return this.repository.findAll();
    }
}
exports.VideoService = VideoService;
