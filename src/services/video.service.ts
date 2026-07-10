
import {
  VideoRepository,
  CreateVideoDTO,
} from "../repositories/video.repository";

export class VideoService {

  private repository = new VideoRepository();

  async create(video: CreateVideoDTO) {
    return this.repository.create(video);
  }

  async findAll() {
    return this.repository.findAll();
  }

}
