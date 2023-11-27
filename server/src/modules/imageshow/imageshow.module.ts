// image.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageController } from './imageshow.controller';
import { ImageService } from './imagshow.service';
import { ImageShow } from './entity/imageshow.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ImageShow])],
  controllers: [ImageController],
  providers: [ImageService],
})
export class ImageModule {}
