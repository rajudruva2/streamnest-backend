"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoRepository = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
class VideoRepository {
    async create(data) {
        return prisma_1.default.video.create({
            data,
        });
    }
    async findAll() {
        return prisma_1.default.video.findMany({
            orderBy: {
                uploadedAt: "desc",
            },
        });
    }
}
exports.VideoRepository = VideoRepository;
