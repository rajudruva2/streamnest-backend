 
import prisma from "../config/prisma";

export interface CreateVideoDTO {
  title: string;
  description?: string;
  filename: string;
  filepath: string;
  filesize: number;
  mimetype: string;
}

export class VideoRepository {
  async create(data: CreateVideoDTO) {
    return prisma.video.create({
      data,
    });
  }

  async findAll() {
    return prisma.video.findMany({
      orderBy: {
        uploadedAt: "desc",
      },
    });
  }
}
