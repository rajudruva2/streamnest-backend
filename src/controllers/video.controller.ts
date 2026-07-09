
import { Request, Response } from "express";
import { VideoService } from "../services/video.service";

const service = new VideoService();

export class VideoController {
  async create(req: Request, res: Response) {
    try {
      const video = await service.create({
        title: req.body.title,
        description: req.body.description,
        filename: req.body.filename,
        filepath: req.body.filepath,
        filesize: Number(req.body.filesize),
        mimetype: req.body.mimetype,
      });

      return res.status(201).json(video);
    } catch (err) {
      console.error(err);

      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }
}
