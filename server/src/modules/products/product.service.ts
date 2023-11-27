import { HttpException, HttpStatus } from '@nestjs/common';
// product.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entity/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './DTO/createProduct.dto';
import { UpdateProductDto } from './DTO/updateProduct.dto';
import { TagService } from '../tag/tag.service';
import { CategoryService } from '../category/category.service';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepositori: Repository<Product>,
    private readonly tagService: TagService,
    private readonly categoryService: CategoryService,
  ) {}

  async getAllProducts(): Promise<Product[]> {
    return await this.productRepositori.find({
      relations: ['image_shows', 'category', 'tag'],
    });
  }
  // async getAllProducts(
  //   // categoryName: string,
  //   page_number?: number,
  //   limit?: number,
  // ): Promise<Product[]> {
  //   const queryBuilder = this.productRepositori
  //     .createQueryBuilder('p')
  //     .select([
  //       'p._id',
  //       'p.name',
  //       'p.number',
  //       'p.price',
  //       'p.sale',
  //       'c.category_id',
  //       'c.name as description_name',
  //       'c.description',
  //       'c.banner',
  //       "IFNULL(image_show.image, '') as image_show",
  //     ])
  //     .innerJoin('p.category', 'c', 'p.category_id = c.category_id')
  //     .leftJoin(
  //       (subQuery) =>
  //         subQuery
  //           .select('_id')
  //           .addSelect(
  //             'GROUP_CONCAT(image ORDER BY image_id ASC)',
  //             'image_show',
  //           )
  //           .from('image_show', 'image_show')
  //           .groupBy('_id'),
  //       'image_show',
  //       'p._id = image_show._id',
  //     );
  //   // .where('c.name = :categoryName', { categoryName });

  //   if (page_number && limit) {
  //     queryBuilder.limit(limit).offset((page_number - 1) * limit);
  //   }

  //   return await queryBuilder.getRawMany();
  // }

  async getProductById(id: number): Promise<any> {
    return this.productRepositori.findOne({
      where: {
        _id: id,
      },
      relations: ['image_shows', 'category', 'tag'],
    });
  }

  async createProduct(data: any, category: any): Promise<any> {
    try {
      //lay tat ca cac truong tu body  ra
      const { name, number, price, sale, length, width, height } = data;

      //co category => di tim category trong database
      const findCategoryById = await this.categoryService.getCategoryById(
        category.category,
      );

      //tao product
      const newProduct: any = {
        name,
        number,
        price,
        sale,
        category: findCategoryById,
      };
      const createProduct = await this.productRepositori.create(newProduct);

      const saveProduct = await this.productRepositori.save(createProduct);

      // tao tag
      const newTag: any = {
        length,
        height,
        width,
        products: saveProduct,
      };

      const tagProduct = await this.tagService.createTag(newTag);
      return {
        message: 'tạo mới thành công',
        saveProduct,
        tagProduct,
      };
    } catch (error) {
      throw new HttpException('Bad Request ', HttpStatus.BAD_REQUEST);
    }
  }

  async updateProduct(id: number, product: UpdateProductDto): Promise<any> {
    try {
      await this.productRepositori.update(id, product as any);
      return {
        message: 'update thành công',
      };
    } catch (error) {
      throw new HttpException('Bad Request ', HttpStatus.BAD_REQUEST);
    }
  }

  async deleteProduct(id: number): Promise<any> {
    try {
      await this.productRepositori.delete(id);
      return {
        message: 'delete thành công',
      };
    } catch (error) {
      throw new HttpException('Bad Request ', HttpStatus.BAD_REQUEST);
    }
  }
}
