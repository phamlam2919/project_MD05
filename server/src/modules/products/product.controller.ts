// product.controller.ts
import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service'; // Thay đổi đường dẫn tùy thuộc vào cấu trúc của bạn

@Controller('/api/v1/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAllProducts() {
    return await this.productService.getAllProducts();
  }

  @Get(':id')
  async getProductById(@Param('id') id: number) {
    return await this.productService.getProductById(id);
  }

  @Post()
  async createProduct(@Body() body: any, @Query() category: string) {
    return await this.productService.createProduct(body, category);
  }

  @Patch(':id')
  async updateProduct(@Param('id') id: number, @Body() body: any) {
    return await this.productService.updateProduct(id, body);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: number) {
    return await this.productService.deleteProduct(id);
  }
}
