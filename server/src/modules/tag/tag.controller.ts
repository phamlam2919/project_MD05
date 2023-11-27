// tag.controller.ts
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TagService } from './tag.service';
import { tag } from './entity/tag.entity';
// import { Tag } from './tag.entity';

@Controller('/api/v1/tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get()
  getAllTags(): Promise<tag[]> {
    return this.tagService.getAllTags();
  }

  @Get(':id')
  getTagById(@Param('id') id: number): Promise<tag> {
    return this.tagService.getTagById(id);
  }

  @Post()
  createTag(@Body() tagData: Partial<tag>): Promise<tag> {
    return this.tagService.createTag(tagData);
  }

  @Patch(':id')
  updateTag(
    @Param('id') id: number,
    @Body() tagData: Partial<tag>,
  ): Promise<tag> {
    return this.tagService.updateTag(id, tagData);
  }

  @Delete(':id')
  deleteTag(@Param('id') id: number): Promise<void> {
    return this.tagService.deleteTag(id);
  }
}
