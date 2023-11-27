// tag.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { tag } from './entity/tag.entity';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(tag)
    private readonly tagRepository: Repository<tag>,
  ) {}

  async getAllTags(): Promise<tag[]> {
    return this.tagRepository.find();
  }

  async getTagById(id: number): Promise<tag> {
    const tag = await this.tagRepository.findOne({
      where: {
        tag_id: id,
      },
    });
    if (!tag) {
      throw new NotFoundException('Tag not found');
    }
    return tag;
  }

  async createTag(tagData: Partial<tag>): Promise<tag> {
    const newTag = this.tagRepository.create(tagData);
    return this.tagRepository.save(newTag);
  }

  async updateTag(id: number, tagData: Partial<tag>): Promise<tag> {
    await this.getTagById(id); // Kiểm tra xem tag có tồn tại không
    await this.tagRepository.update(id, tagData);
    return this.getTagById(id);
  }

  async deleteTag(id: number): Promise<void> {
    await this.getTagById(id); // Kiểm tra xem tag có tồn tại không
    await this.tagRepository.delete(id);
  }
}
