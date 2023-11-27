// category.controller.ts
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CateGory } from './entity/category.entity';

@Controller('/api/v1/categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  getAllCategories(): Promise<CateGory[]> {
    return this.categoryService.getAllCategories();
  }

  @Get(':id')
  getCategoryById(@Param('id') id: number): Promise<CateGory> {
    return this.categoryService.getCategoryById(id);
  }

  @Post()
  createCategory(@Body() categoryData: Partial<CateGory>): Promise<CateGory> {
    return this.categoryService.createCategory(categoryData);
  }

  @Patch(':id')
  updateCategory(
    @Param('id') id: number,
    @Body() categoryData: Partial<CateGory>,
  ): Promise<CateGory> {
    return this.categoryService.updateCategory(id, categoryData);
  }

  @Delete(':id')
  deleteCategory(@Param('id') id: number): Promise<void> {
    return this.categoryService.deleteCategory(id);
  }
}
