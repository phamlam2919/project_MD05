// image.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ImageShow } from './entity/imageshow.entity';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(ImageShow)
    private readonly imageRepository: Repository<ImageShow>,
  ) {}

  async getAllImages(): Promise<ImageShow[]> {
    return this.imageRepository.find();
  }

  async getImageById(id: number): Promise<ImageShow> {
    const image = await this.imageRepository.findOne({
      where: {
        image_id: id,
      },
    });
    if (!image) {
      throw new NotFoundException('Image not found');
    }
    return image;
  }

  async createImage(imageData: Partial<ImageShow>): Promise<ImageShow> {
    const newImage = this.imageRepository.create(imageData);
    return this.imageRepository.save(newImage);
  }

  async updateImage(
    id: number,
    imageData: Partial<ImageShow>,
  ): Promise<ImageShow> {
    await this.getImageById(id);
    await this.imageRepository.update(id, imageData);
    return this.getImageById(id);
  }

  async deleteImage(id: number): Promise<void> {
    await this.getImageById(id);
    await this.imageRepository.delete(id);
  }
}
