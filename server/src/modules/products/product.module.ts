// product.module.ts
import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entity/product.entity';
import { TagModule } from '../tag/tag.module';
import { CategoryModule } from '../category/category.module';

@Module({
  imports: [TypeOrmModule.forFeature([Product]), TagModule, CategoryModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
