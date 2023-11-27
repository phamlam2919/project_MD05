// tag.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';
import { tag } from './entity/tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([tag])],
  controllers: [TagController],
  providers: [TagService],
  exports: [TagService]
})
export class TagModule {}
