// category.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CateGory } from './entity/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CateGory)
    private readonly categoryRepository: Repository<CateGory>,
  ) {}

  async getAllCategories(): Promise<CateGory[]> {
    return this.categoryRepository.find();
  }

  async getCategoryById(id: number): Promise<CateGory> {
    const category = await this.categoryRepository.findOne({
      where: {
        category_id: id,
      },
    });
    if (!category) {
      throw new NotFoundException('Category not found');
    }
    return category;
  }

  async createCategory(categoryData: Partial<CateGory>): Promise<CateGory> {
    const newCategory = this.categoryRepository.create(categoryData);
    return this.categoryRepository.save(newCategory);
  }

  async updateCategory(
    id: number,
    categoryData: Partial<CateGory>,
  ): Promise<CateGory> {
    await this.getCategoryById(id);
    await this.categoryRepository.update(id, categoryData);
    return this.getCategoryById(id);
  }

  async deleteCategory(id: number): Promise<void> {
    await this.getCategoryById(id);
    await this.categoryRepository.delete(id);
  }
}
