// image.controller.ts
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ImageService } from './imagshow.service';
import { ImageShow } from './entity/imageshow.entity';

@Controller('/api/v1/images')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Get()
  getAllImages(): Promise<ImageShow[]> {
    return this.imageService.getAllImages();
  }

  @Get(':id')
  getImageById(@Param('id') id: number): Promise<ImageShow> {
    return this.imageService.getImageById(id);
  }

  @Post()
  createImage(@Body() imageData: Partial<ImageShow>): Promise<ImageShow> {
    return this.imageService.createImage(imageData);
  }

  @Patch(':id')
  updateImage(
    @Param('id') id: number,
    @Body() imageData: Partial<ImageShow>,
  ): Promise<ImageShow> {
    return this.imageService.updateImage(id, imageData);
  }

  @Delete(':id')
  deleteImage(@Param('id') id: number): Promise<void> {
    return this.imageService.deleteImage(id);
  }
}
