import { Request, Response } from "express";
import { VideoService } from "../services/video.service";

const service = new VideoService();

export class VideoController {

  async upload(req: Request, res: Response) {
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
        filepath: `uploads/${req.file.filename}`.replace(/\\/g, "/"),
        filesize: req.file.size,
        mimetype: req.file.mimetype
      });

      return res.status(201).json(video);

    } catch (error) {

      console.error(error);

      return res.status(500).json({
        message: "Internal Server Error"
      });

    }
  }

  async list(req: Request, res: Response) {
    try {

      const videos = await service.findAll();

      return res.status(200).json(videos);

    } catch (error) {

      console.error(error);

      return res.status(500).json({
        message: "Internal Server Error"
      });

    }
  }

}
